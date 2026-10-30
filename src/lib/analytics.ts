// Olay izleme yer tutucusu. Firebase Analytics baglaninca yalnizca bu dosya degisir.
export type EventName =
  | 'app_open'
  | 'onboarding_step'
  | 'onboarding_done'
  | 'lesson_start'
  | 'lesson_complete'
  | 'quiz_done'
  | 'review_done'
  | 'note_saved'
  | 'paywall_view'
  | 'paywall_cta'
  | 'paywall_close'
  | 'purchase_success';

// Web: Firebase Analytics (JS SDK). Native: Analytics/Crashlytics icin @react-native-firebase + dev build gerekir
// (Expo Go'da calismaz); o zaman yalniz bu dosyaya eklenir.
import { Platform } from 'react-native';

import { app } from '@/lib/firebase';

type Logger = (name: string, params?: Record<string, unknown>) => void;
let logger: Logger | null = null;
let loading = false;

function ensureLogger() {
  if (logger || loading || Platform.OS !== 'web' || !app || !process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID) return;
  loading = true;
  import('firebase/analytics')
    .then(async (m) => {
      if (await m.isSupported()) {
        const a = m.getAnalytics(app!);
        logger = (n, p) => m.logEvent(a, n, p);
      }
    })
    .catch(() => {});
}

export function track(name: EventName, props: Record<string, string | number | boolean> = {}) {
  if (__DEV__) console.debug('[track]', name, props);
  ensureLogger();
  try {
    logger?.(name, props);
  } catch {
    // izleme asla uygulamayi bozmaz
  }
}
