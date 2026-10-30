// Icerik yazimi icin kisa yardimcilar. Bir dersi demet (tuple) olarak yazariz:
//   sahne  = [baslik, [vurgu1, vurgu2], anlatim]
//   soru   = [soru metni, [A,B,C,D,E], dogruIndeks, aciklama]
import type { Lesson, Question, Scene, Subject, Topic, TrackId } from './types';

export type SceneT = [title: string, keyPoints: string[], narration: string];
export type QuestionT = [text: string, options: string[], answer: number, explanation: string];

const CHARS_PER_SEC = 14; // anlatici hizi (yaklasik)

// Dogru cevap hep ayni siklarda toplanmasin diye siklar (kararli, tohumlu) karistirilir.
// Sayisal / sirali sikli sorular, "Hepsi", "Hicbiri", "I ve II" gibi siraya bagli sorular oldugu gibi kalir.
function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function orderBound(options: string[]): boolean {
  if (options.every((o) => /^[\d−\-+.,/\s]/.test(o.trim()))) return true; // sayisal / sirali
  return options.some((o) => /(hepsi|hiçbiri|yukarıdakilerin|^[IVX]+(\s|,|$)|\bI ve\b|\bve III\b)/i.test(o));
}

function shuffleOptions(options: string[], answer: number, seed: string): { options: string[]; answer: number } {
  if (orderBound(options)) return { options, answer };
  let x = hashSeed(seed) || 1;
  const rnd = () => {
    x ^= x << 13;
    x >>>= 0;
    x ^= x >>> 17;
    x ^= x << 5;
    x >>>= 0;
    return x / 4294967296;
  };
  const idx = options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { options: idx.map((i) => options[i]), answer: idx.indexOf(answer) };
}


export function lesson(id: string, title: string, scenes: SceneT[], qs: QuestionT[]): Lesson {
  let t = 0;
  const built: Scene[] = scenes.map(([sceneTitle, keyPoints, narration], i) => {
    const s: Scene = { id: `s${i + 1}`, startSec: t, title: sceneTitle, narration, keyPoints };
    t += Math.max(25, Math.ceil(narration.length / CHARS_PER_SEC));
    return s;
  });
  const questions: Question[] = qs.map(([text, options, answer, explanation], i) => {
    const m = shuffleOptions(options, answer, `${id}:${i}`);
    return { id: `q${i + 1}`, text, options: m.options, answer: m.answer, explanation };
  });
  return {
    id,
    topicId: '',
    subjectId: '',
    title,
    durationSec: t,
    scenes: built,
    summary: scenes.map(([, keyPoints]) => keyPoints.join(' · ')),
    questions,
  };
}

export function topic(id: string, title: string, lessons: Lesson[]): Topic {
  return { id, title, lessons: lessons.map((l) => ({ ...l, topicId: id })) };
}

export function subject(
  id: string,
  title: string,
  icon: string,
  examQuestions: number,
  tracks: TrackId[],
  topics: Topic[],
): Subject {
  return {
    id,
    title,
    icon,
    examQuestions,
    tracks,
    topics: topics.map((t) => ({ ...t, lessons: t.lessons.map((l) => ({ ...l, subjectId: id })) })),
  };
}

export const ALL_TRACKS: TrackId[] = ['lisans', 'onlisans', 'ortaogretim'];
