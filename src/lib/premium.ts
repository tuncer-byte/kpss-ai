// Uyelik / paywall kurallari. TEK yer: ucretsiz kapsam, planlar ve fiyatlar burada.
// RevenueCat baglaninca: PLANS fiyatlari offerings'ten gelir, purchase() SDK'yi cagirir,
// isPremium() musteri bilgisindeki entitlement'a bakar. Ekranlar bu dosyadaki fonksiyonlari kullanir.
import { SUBJECTS, getLesson, subjectLessons } from '@/data/content';
import type { PlanId, UserState } from '@/data/types';
import { getConfig } from '@/lib/remoteConfig';
import { activatePremium, clearPremium } from '@/lib/store';

// Her dersin ilk N videosu (konu notu + sorulariyla) ucretsiz. N, Firestore config/app'ten gelir (varsayilan 2).

export const TRIAL_DAYS = 3;

export type Plan = {
  id: PlanId;
  title: string;
  price: string; // YER TUTUCU fiyat: RevenueCat offerings'ten gelecek
  perMonth: string;
  badge?: string;
  note: string;
};

// Fiyatlar config/app'ten gelir (YER TUTUCU: RevenueCat offerings baglaninca magaza fiyati kullanilir).
export function getPlans(): Plan[] {
  const c = getConfig();
  const yearly = c.yearlyPrice;
  return [
    { id: 'yearly', title: 'Sınav sezonu · 12 ay', price: yearly, perMonth: 'tek ödeme, 12 ay', badge: 'En avantajlı', note: 'Sınava kadar tam erişim' },
    { id: 'monthly', title: 'Aylık', price: c.monthlyPrice, perMonth: 'aylık yenilenir', note: 'İstediğin zaman iptal' },
  ];
}

export const BENEFITS: { icon: string; title: string; text: string }[] = [
  { icon: 'play-circle-outline', title: 'Tüm video dersler', text: 'Türkçe, Matematik, Tarih, Coğrafya, Vatandaşlık ve Güncel: konuların tamamı' },
  { icon: 'flash-outline', title: 'Konu ve ders testleri', text: 'Her konudan ÖSYM tarzı soru çöz, eksiğini gör' },
  { icon: 'calendar-outline', title: 'Kişisel çalışma planı', text: 'Sınav tarihine ve günlük sürene göre sıralı plan' },
  { icon: 'cloud-upload-outline', title: 'Cihazlar arası yedek', text: 'İlerlemen ve notların hesabında güvende' },
];

let freeCache: { n: number; ids: Set<string> } | null = null;
function freeIds(): Set<string> {
  const n = getConfig().freeLessonsPerSubject;
  if (freeCache?.n !== n) {
    freeCache = { n, ids: new Set(SUBJECTS.flatMap((s) => subjectLessons(s).slice(0, n).map((l) => l.id))) };
  }
  return freeCache.ids;
}

export function isPremium(s: UserState): boolean {
  return s.premium.plan !== null;
}

export function isLessonFree(lessonId: string): boolean {
  return freeIds().has(lessonId);
}

// Bu dersi (video, not, sorular) acabilir mi?
export function canOpenLesson(s: UserState, lessonId: string): boolean {
  return isPremium(s) || isLessonFree(lessonId);
}

// Konu / ders testi kapsami Premium. Ders testi (tek ders) ucretsiz derslerde serbest.
export function canOpenQuiz(s: UserState, scope: string): boolean {
  if (isPremium(s)) return true;
  if (scope.startsWith('topic:') || scope.startsWith('subject:')) return false;
  return isLessonFree(scope) && !!getLesson(scope);
}

export function trialDaysLeft(s: UserState): number | null {
  const t = s.premium.trialEndsAt;
  if (!t) return null;
  return Math.max(0, Math.ceil((t - Date.now()) / 86400000));
}

// --- Satin alma (simdilik yerel taslak) ---
// RevenueCat: Purchases.purchasePackage(...) basariliysa activatePremium cagrilir.
export async function purchase(plan: PlanId): Promise<{ ok: boolean }> {
  activatePremium(plan, TRIAL_DAYS);
  return { ok: true };
}

export async function restorePurchases(): Promise<{ restored: boolean }> {
  // RevenueCat: Purchases.restorePurchases()
  return { restored: false };
}

export function cancelPremiumForTest() {
  clearPremium();
}
