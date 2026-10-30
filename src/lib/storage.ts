// Anahtar-deger depolama soyutlamasi (web / varsayilan): localStorage, yoksa bellek.
// Native surum: storage.native.ts (expo-sqlite kv-store). Platform dosyalari web paketine sqlite/wasm sokmaz.
export interface KV {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

function memoryKV(): KV {
  const m = new Map<string, string>();
  return {
    get: (k) => m.get(k) ?? null,
    set: (k, v) => void m.set(k, v),
    remove: (k) => void m.delete(k),
  };
}

function create(): KV {
  try {
    const ls = globalThis.localStorage;
    if (!ls) return memoryKV();
    return {
      get: (k) => ls.getItem(k),
      set: (k, v) => ls.setItem(k, v),
      remove: (k) => ls.removeItem(k),
    };
  } catch {
    return memoryKV();
  }
}

export const kv: KV = create();
