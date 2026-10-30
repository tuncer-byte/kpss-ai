// Kisisel calisma plani: zayif derslerden basla, dersleri sirayla dolas (bir gunde tek derse yigilma).
import { subjectLessons, subjectsForTrack } from '@/data/content';
import type { Lesson, Subject, UserState } from '@/data/types';

// Her dersin listesinden sirayla birer ders alarak dolasir (round-robin).
export function interleave<T>(lists: T[][]): T[] {
  const out: T[] = [];
  const max = Math.max(0, ...lists.map((l) => l.length));
  for (let i = 0; i < max; i++) for (const l of lists) if (i < l.length) out.push(l[i]);
  return out;
}

export function undoneFirst(lessons: Lesson[], s: UserState): Lesson[] {
  return [...lessons.filter((l) => !s.lessonsDone[l.id]), ...lessons.filter((l) => s.lessonsDone[l.id])];
}

export function sortSubjects(subjects: Subject[], s: UserState): Subject[] {
  const weak = new Set(s.profile.weakSubjects);
  return [...subjects].sort((a, b) => Number(weak.has(b.id)) - Number(weak.has(a.id)));
}

export function orderedLessons(s: UserState): Lesson[] {
  const subjects = sortSubjects(subjectsForTrack(s.profile.track), s);
  return interleave(subjects.map((sub) => undoneFirst(subjectLessons(sub), s)));
}

export function nextLessons(s: UserState, count = 3): Lesson[] {
  return orderedLessons(s)
    .filter((l) => !s.lessonsDone[l.id])
    .slice(0, count);
}

export function lessonsPerDay(dailyMinutes: number): number {
  // Bir ders ~3 dk video + not + soru = ~10 dk varsayimi
  return Math.max(1, Math.round(dailyMinutes / 10));
}

export const HORIZONS = [
  { id: 'm3', label: '3 aydan az' },
  { id: 'm6', label: '3-6 ay' },
  { id: 'y1', label: '6-12 ay' },
  { id: 'unknown', label: 'Henüz bilmiyorum' },
] as const;

export const MINUTES = [10, 20, 30, 45] as const;
