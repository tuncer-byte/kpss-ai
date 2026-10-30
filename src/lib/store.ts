// Kullanici verisinin tek kaynagi. Okuma: useUserState(). Yazma: asagidaki aksiyonlar.
// Kalicilik lib/storage.ts uzerinden; Firebase eklenince commit() icinden senkron tetiklenir.
import { useSyncExternalStore } from 'react';
import type { Grade } from 'ts-fsrs';

import { getLesson } from '@/data/content';
import type { Note, PlanId, Profile, QuizResult, SrsCard, UserState } from '@/data/types';
import { emptyCard, rate } from '@/lib/srs';
import { kv } from '@/lib/storage';

const KEY = 'kpss-ai:state:v1';
const TS_KEY = 'kpss-ai:updatedAt';

const initialProfile: Profile = {
  name: '',
  onboarded: false,
  track: null,
  examHorizon: 'unknown',
  dailyMinutes: 20,
  weakSubjects: [],
};

function initialState(): UserState {
  return { profile: initialProfile, premium: { plan: null, since: null, trialEndsAt: null }, lessonsDone: {}, notes: [], cards: {}, results: [], activity: {}, lastLesson: null };
}

function load(): UserState {
  try {
    const raw = kv.get(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<UserState>;
      const base = initialState();
      const profile = { ...base.profile, ...(p.profile ?? {}) };
      if (!['lisans', 'onlisans', 'ortaogretim'].includes(profile.track ?? 'lisans')) profile.track = 'lisans'; // eski 'oabt' kaydi
      return { ...base, ...p, profile };
    }
  } catch {
    // bozuk kayit: bos durumla basla
  }
  return initialState();
}

let state: UserState = load();
const listeners = new Set<() => void>();

let hydrating = false;

function commit(next: UserState) {
  state = next;
  try {
    kv.set(KEY, JSON.stringify(state));
    if (!hydrating) kv.set(TS_KEY, String(Date.now()));
  } catch {
    // depolama dolu / kapali: bellekte devam
  }
  listeners.forEach((l) => l());
}

// Bulut senkronu icin: yerel degisiklik zamani ve abonelik (lib/sync.ts kullanir).
export function getUpdatedAt(): number {
  return Number(kv.get(TS_KEY) ?? 0) || 0;
}

export function subscribeState(l: () => void): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}

// Buluttaki daha yeni durumu yerele alir. Premium cihaza ozel kalir (magaza / RevenueCat belirler).
export function hydrateFromRemote(remote: Partial<UserState>, at: number) {
  const base = initialState();
  const profile = { ...base.profile, ...(remote.profile ?? {}) };
  if (!['lisans', 'onlisans', 'ortaogretim'].includes(profile.track ?? 'lisans')) profile.track = 'lisans';
  hydrating = true;
  try {
    commit({ ...base, ...remote, profile, premium: state.premium });
    kv.set(TS_KEY, String(at));
  } finally {
    hydrating = false;
  }
}

export function getState(): UserState {
  return state;
}

export function useUserState(): UserState {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => state,
    () => state,
  );
}

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

export function dayKey(d = new Date()): string {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

// ---- Profil / onboarding ----

export function updateProfile(patch: Partial<Profile>) {
  commit({ ...state, profile: { ...state.profile, ...patch } });
}

export function completeOnboarding() {
  updateProfile({ onboarded: true, track: state.profile.track ?? 'lisans' });
}

export function resetAll() {
  commit(initialState());
}

// ---- Ilerleme ----

export function logMinutes(minutes: number) {
  const k = dayKey();
  commit({ ...state, activity: { ...state.activity, [k]: (state.activity[k] ?? 0) + minutes } });
}

// ---- Uyelik (yerel taslak; RevenueCat baglaninca lib/premium.ts icinden cagrilir) ----

export function activatePremium(plan: PlanId, trialDays: number) {
  const now = Date.now();
  commit({ ...state, premium: { plan, since: now, trialEndsAt: trialDays > 0 ? now + trialDays * 86400000 : null } });
}

export function clearPremium() {
  commit({ ...state, premium: { plan: null, since: null, trialEndsAt: null } });
}

export function setLastLesson(lessonId: string) {
  if (state.lastLesson === lessonId) return;
  commit({ ...state, lastLesson: lessonId });
}

export function markLessonDone(lessonId: string) {
  if (state.lessonsDone[lessonId]) return;
  commit({ ...state, lessonsDone: { ...state.lessonsDone, [lessonId]: Date.now() } });
}

// Ust uste calisilan gun sayisi (bugun henuz yoksa dunden sayilir).
export function currentStreak(s: UserState = state): number {
  let n = 0;
  const d = new Date();
  if (!s.activity[dayKey(d)]) d.setDate(d.getDate() - 1);
  while (s.activity[dayKey(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// ---- Notlar ----

export function addNote(lessonId: string, text: string, sceneId: string | null = null): Note | null {
  const t = text.trim();
  if (!t) return null;
  if (state.notes.some((n) => n.lessonId === lessonId && n.text === t)) return null; // tekrar ekleme
  const note: Note = { id: uid(), lessonId, sceneId, text: t, createdAt: Date.now() };
  commit({ ...state, notes: [note, ...state.notes] });
  return note;
}

export function removeNote(id: string) {
  commit({ ...state, notes: state.notes.filter((n) => n.id !== id) });
}

// ---- Tekrar (FSRS) ----

function putCard(c: Omit<SrsCard, 'card_json' | 'due_ms' | 'reps'>) {
  if (state.cards[c.id]) return;
  const e = emptyCard();
  commit({ ...state, cards: { ...state.cards, [c.id]: { ...c, ...e, reps: 0 } } });
}

export function addCardFromQuestion(lessonId: string, questionId: string) {
  const q = getLesson(lessonId)?.questions.find((x) => x.id === questionId);
  if (!q) return;
  putCard({ id: `q:${lessonId}:${questionId}`, lessonId, front: q.text, back: `${q.options[q.answer]}\n\n${q.explanation}` });
}

export function addCardFromNote(note: Note) {
  putCard({ id: `n:${note.id}`, lessonId: note.lessonId, front: 'Bu notu hatırlıyor musun?', back: note.text });
}

export function dueCards(now = Date.now(), s: UserState = state): SrsCard[] {
  return Object.values(s.cards)
    .filter((c) => c.due_ms <= now)
    .sort((a, b) => a.due_ms - b.due_ms);
}

export function reviewCard(id: string, grade: Grade) {
  const c = state.cards[id];
  if (!c) return;
  const r = rate(c.card_json, grade);
  commit({ ...state, cards: { ...state.cards, [id]: { ...c, card_json: r.card_json, due_ms: r.due_ms, reps: r.reps } } });
}

// ---- Sinav / deneme ----

export function recordQuiz(scope: string, total: number, correct: number) {
  const r: QuizResult = { id: uid(), scope, total, correct, at: Date.now() };
  commit({ ...state, results: [r, ...state.results].slice(0, 50) });
}
