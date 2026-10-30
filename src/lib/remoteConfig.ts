// Ucretsiz "uzaktan ayar": Firestore config/app dokumani (herkese okunur, istemciden yazilamaz).
// Fiyat / ucretsiz ders sayisi magaza guncellemesi olmadan Console'dan degisir. Alan yoksa varsayilan kullanilir.
import { doc, getDoc } from 'firebase/firestore';
import { useSyncExternalStore } from 'react';

import { db } from '@/lib/firebase';

export type RemoteConfig = {
  freeLessonsPerSubject: number;
  yearlyPrice: string;
  monthlyPrice: string;
};

export const DEFAULT_CONFIG: RemoteConfig = {
  freeLessonsPerSubject: 2,
  yearlyPrice: '₺799 / yıl',
  monthlyPrice: '₺149 / ay',
};

let cfg: RemoteConfig = DEFAULT_CONFIG;
const ls = new Set<() => void>();

export function getConfig(): RemoteConfig {
  return cfg;
}

export function useRemoteConfig(): RemoteConfig {
  return useSyncExternalStore(
    (cb) => {
      ls.add(cb);
      return () => ls.delete(cb);
    },
    () => cfg,
    () => cfg,
  );
}

export async function loadRemoteConfig() {
  if (!db) return;
  try {
    const snap = await getDoc(doc(db, 'config', 'app'));
    if (!snap.exists()) return;
    const d = snap.data() as Record<string, unknown>;
    const n = Number(d.freeLessonsPerSubject);
    cfg = {
      freeLessonsPerSubject: Number.isFinite(n) && n >= 0 && n <= 20 ? Math.floor(n) : DEFAULT_CONFIG.freeLessonsPerSubject,
      yearlyPrice: typeof d.yearlyPrice === 'string' && d.yearlyPrice ? d.yearlyPrice : DEFAULT_CONFIG.yearlyPrice,
      monthlyPrice: typeof d.monthlyPrice === 'string' && d.monthlyPrice ? d.monthlyPrice : DEFAULT_CONFIG.monthlyPrice,
    };
    ls.forEach((l) => l());
  } catch (e) {
    console.warn('[config] okunamadi, varsayilan kullaniliyor', e);
  }
}
