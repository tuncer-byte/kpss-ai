// Native (iOS/Android): expo-sqlite kv-store, Expo Go dahil calisir.
import store from 'expo-sqlite/kv-store';

import type { KV } from './storage';

function create(): KV {
  try {
    return {
      get: (k) => store.getItemSync(k),
      set: (k, v) => store.setItemSync(k, v),
      remove: (k) => void store.removeItemSync(k),
    };
  } catch {
    const m = new Map<string, string>();
    return { get: (k) => m.get(k) ?? null, set: (k, v) => void m.set(k, v), remove: (k) => void m.delete(k) };
  }
}

export const kv: KV = create();
