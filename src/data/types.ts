// KPSS icerik ve kullanici veri modeli.
// Icerik (Subject > Topic > Lesson > Scene) ileride Firebase'den gelir; simdilik content/ altinda yerel.

export type TrackId = 'lisans' | 'onlisans' | 'ortaogretim';

export type Question = {
  id: string;
  text: string;
  options: string[]; // KPSS'de 5 sik (A-E)
  answer: number; // options indeksi
  explanation: string;
};

// Bir videonun zaman damgali sahnesi (dikey izlemede bir "sayfa").
export type Scene = {
  id: string;
  startSec: number;
  title: string;
  narration: string; // AI anlatici metni (altyazi / transkript)
  keyPoints: string[]; // sahnede vurgulanan kisa bilgiler (nota donusur)
};

export type Lesson = {
  id: string;
  topicId: string;
  subjectId: string;
  title: string;
  durationSec: number;
  videoUrl?: string; // AI uretimi video baglaninca doldurulur; yoksa sahne modu calisir
  posterUrl?: string;
  scenes: Scene[];
  summary: string[]; // konu notu maddeleri
  questions: Question[];
};

export type Topic = { id: string; title: string; lessons: Lesson[] };

export type Subject = {
  id: string;
  title: string;
  icon: string; // Ionicons adi
  examQuestions: number; // sinavdaki soru sayisi (OSYM dagilimi)
  tracks: TrackId[];
  topics: Topic[];
};

// ---- Kullanici verisi ----

export type Profile = {
  name: string; // gorunen ad (bos = misafir)
  onboarded: boolean;
  track: TrackId | null;
  examHorizon: 'm3' | 'm6' | 'y1' | 'unknown';
  dailyMinutes: number;
  weakSubjects: string[];
};

export type Note = {
  id: string;
  lessonId: string;
  sceneId: string | null;
  text: string;
  createdAt: number;
};

export type SrsCard = {
  id: string; // 'q:<lessonId>:<questionId>' | 'n:<noteId>'
  front: string;
  back: string;
  lessonId: string;
  card_json: string;
  due_ms: number;
  reps: number;
};

export type QuizResult = {
  id: string;
  scope: string; // lessonId | 'topic:<id>' | 'subject:<id>'
  total: number;
  correct: number;
  at: number;
};

export type PlanId = 'yearly' | 'monthly';

// Abonelik durumu. Simdilik yerel; RevenueCat baglaninca musteri bilgisinden doldurulur.
export type Premium = {
  plan: PlanId | null;
  since: number | null;
  trialEndsAt: number | null;
};

export type UserState = {
  premium: Premium;
  profile: Profile;
  lessonsDone: Record<string, number>; // lessonId -> bitis zamani
  notes: Note[];
  cards: Record<string, SrsCard>;
  results: QuizResult[];
  activity: Record<string, number>; // 'YYYY-MM-DD' -> dakika (seri icin)
  lastLesson: string | null; // en son acilan ders ("Devam et")
};
