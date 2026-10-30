// Hesap: acilista misafir (anonim) girisi; e-posta/sifre ile misafir hesabi BAGLANIR (ilerleme ayni uid'de kalir).
// Apple / Google girisi: yerel (dev build) kurulum gerektirir, README'ye bak.
import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  linkWithCredential,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { useSyncExternalStore } from 'react';

import { auth, firebaseEnabled } from '@/lib/firebase';

export type AuthInfo = {
  ready: boolean; // ilk durum bilindi mi
  enabled: boolean; // Firebase yapilandirildi mi
  uid: string | null;
  email: string | null;
  isAnonymous: boolean;
};

let info: AuthInfo = { ready: !firebaseEnabled, enabled: firebaseEnabled, uid: null, email: null, isAnonymous: true };
const listeners = new Set<() => void>();
const authListeners = new Set<(u: User | null) => void>();

function set(next: AuthInfo) {
  info = next;
  listeners.forEach((l) => l());
}

if (auth) {
  onAuthStateChanged(auth, (u) => {
    set({ ready: true, enabled: true, uid: u?.uid ?? null, email: u?.email ?? null, isAnonymous: u?.isAnonymous ?? true });
    authListeners.forEach((l) => l(u));
    if (!u) void signInAnonymously(auth!).catch((e) => console.warn('[auth] anonim giris basarisiz', e));
  });
}

export function useAuth(): AuthInfo {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => info,
    () => info,
  );
}

export function getAuthInfo(): AuthInfo {
  return info;
}

export function onAuthUser(cb: (u: User | null) => void): () => void {
  authListeners.add(cb);
  if (auth?.currentUser) cb(auth.currentUser);
  return () => authListeners.delete(cb);
}

const MESSAGES: Record<string, string> = {
  'auth/invalid-email': 'E-posta adresi geçersiz.',
  'auth/missing-password': 'Şifre gir.',
  'auth/weak-password': 'Şifre en az 6 karakter olmalı.',
  'auth/email-already-in-use': 'Bu e-posta zaten kayıtlı. Giriş yapmayı dene.',
  'auth/credential-already-in-use': 'Bu e-posta zaten kayıtlı. Giriş yapmayı dene.',
  'auth/invalid-credential': 'E-posta veya şifre hatalı.',
  'auth/wrong-password': 'E-posta veya şifre hatalı.',
  'auth/user-not-found': 'Bu e-postayla hesap bulunamadı.',
  'auth/too-many-requests': 'Çok fazla deneme. Biraz sonra tekrar dene.',
  'auth/network-request-failed': 'İnternet bağlantısı yok.',
  'auth/operation-not-allowed': 'Bu giriş yöntemi henüz etkin değil.',
};

export function authError(e: unknown): string {
  const code = (e as { code?: string })?.code ?? '';
  return MESSAGES[code] ?? 'Bir sorun oluştu. Tekrar dene.';
}

// Misafir hesabini e-postaya baglar (uid ve ilerleme korunur).
export async function registerEmail(email: string, password: string): Promise<void> {
  if (!auth) throw { code: 'auth/operation-not-allowed' };
  const cred = EmailAuthProvider.credential(email.trim(), password);
  const u = auth.currentUser;
  if (u?.isAnonymous) {
    await linkWithCredential(u, cred);
    set({ ...info, email: email.trim(), isAnonymous: false });
  } else if (!u) {
    await createUserWithEmailAndPassword(auth, email.trim(), password); // misafir oturumu henuz acilmadiysa
  } else {
    throw { code: 'auth/email-already-in-use' };
  }
}

// Var olan hesaba giris (baska cihaz). Bulut verisi yerele iner (lib/sync.ts).
export async function signInEmail(email: string, password: string): Promise<void> {
  if (!auth) throw { code: 'auth/operation-not-allowed' };
  await signInWithEmailAndPassword(auth, email.trim(), password);
}

export async function resetPassword(email: string): Promise<void> {
  if (!auth) throw { code: 'auth/operation-not-allowed' };
  await sendPasswordResetEmail(auth, email.trim());
}

export async function signOut(): Promise<void> {
  if (!auth) return;
  await fbSignOut(auth); // onAuthStateChanged yeni bir misafir hesabi acar
}
