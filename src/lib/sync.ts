// Bulut senkronu: users/{uid} dokumani. Son yazan kazanir (updatedAt). Premium senkronlanmaz.
// Cevrimdisi calisir: degisiklikler yerelde kalir, baglanti gelince bir sonraki degisiklikte yazilir.
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useSyncExternalStore } from 'react';

import { db } from '@/lib/firebase';
import { onAuthUser } from '@/lib/auth';
import { getState, getUpdatedAt, hydrateFromRemote, subscribeState } from '@/lib/store';

export type SyncStatus = 'off' | 'syncing' | 'ok' | 'error';

let status: SyncStatus = db ? 'syncing' : 'off';
let lastAt = 0;
const sl = new Set<() => void>();
const setStatus = (s: SyncStatus) => {
  status = s;
  if (s === 'ok') lastAt = Date.now();
  sl.forEach((l) => l());
};

export function useSyncStatus(): { status: SyncStatus; lastAt: number } {
  const st = useSyncExternalStore(
    (cb) => {
      sl.add(cb);
      return () => sl.delete(cb);
    },
    () => status,
    () => status,
  );
  return { status: st, lastAt };
}

let uid: string | null = null;
let timer: ReturnType<typeof setTimeout> | null = null;
let ready = false; // ilk cekme bitmeden yazma (yeni cihaz eski veriyi ezmesin)

async function push() {
  if (!db || !uid) return;
  const { premium: _premium, ...rest } = getState();
  try {
    await setDoc(doc(db, 'users', uid), { v: 1, updatedAt: getUpdatedAt() || Date.now(), state: JSON.parse(JSON.stringify(rest)) });
    setStatus('ok');
  } catch (e) {
    console.warn('[sync] yazilamadi', e);
    setStatus('error');
  }
}

function schedule() {
  if (!ready) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => void push(), 2500);
}

async function pull(u: string) {
  if (!db) return;
  setStatus('syncing');
  ready = false;
  try {
    const snap = await getDoc(doc(db, 'users', u));
    const data = snap.exists() ? (snap.data() as { updatedAt?: number; state?: Record<string, unknown> }) : null;
    if (data?.state && (data.updatedAt ?? 0) > getUpdatedAt()) {
      hydrateFromRemote(data.state, data.updatedAt ?? Date.now());
      setStatus('ok');
    } else {
      ready = true;
      await push();
    }
  } catch (e) {
    console.warn('[sync] cekilemedi', e);
    setStatus('error');
  } finally {
    ready = true;
  }
}

let started = false;
export function startSync() {
  if (started || !db) return;
  started = true;
  subscribeState(schedule);
  onAuthUser((u) => {
    if (!u) {
      uid = null;
      return;
    }
    if (u.uid === uid) return;
    uid = u.uid;
    void pull(u.uid);
  });
}

export async function syncNow() {
  if (timer) clearTimeout(timer);
  if (uid) await push();
}
