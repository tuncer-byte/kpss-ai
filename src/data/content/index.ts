import type { Lesson, Subject, Topic, TrackId } from '../types';
import { cografya } from './cografya';
import { geometri } from './geometri';
import { guncel } from './guncel';
import { matematik } from './matematik';
import { tarih } from './tarih';
import { turkce } from './turkce';
import { vatandaslik } from './vatandaslik';

// Icerik kaynagi. Firebase gelince bu dosya, uzaktan yuklenen veriyi donduren bir
// servise donusur; ekranlar yalnizca asagidaki yardimcilari kullanir.
// Sira OSYM test sirasini izler: Turkce, Matematik (Geometri dahil), Tarih, Cografya, Vatandaslik, Guncel.
// Geometri, OSYM'de Matematik testinin parcasi oldugu icin Matematik dersinin altina katilir.
const matematikTam: Subject = {
  ...matematik,
  topics: [
    ...matematik.topics,
    ...geometri.topics.map((t) => ({
      ...t,
      title: `Geometri: ${t.title}`,
      lessons: t.lessons.map((l) => ({ ...l, subjectId: matematik.id })),
    })),
  ],
};

export const SUBJECTS: Subject[] = [turkce, matematikTam, tarih, cografya, vatandaslik, guncel];

export function subjectsForTrack(track: TrackId | null): Subject[] {
  const t = track ?? 'lisans';
  return SUBJECTS.filter((s) => s.tracks.includes(t));
}

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id);
}

export function allLessons(subjects: Subject[] = SUBJECTS): Lesson[] {
  return subjects.flatMap((s) => s.topics.flatMap((t) => t.lessons));
}

export function getLesson(id: string): Lesson | undefined {
  return allLessons().find((l) => l.id === id);
}

export function getTopic(id: string): Topic | undefined {
  for (const s of SUBJECTS) {
    const t = s.topics.find((x) => x.id === id);
    if (t) return t;
  }
  return undefined;
}

export function subjectLessons(s: Subject): Lesson[] {
  return s.topics.flatMap((t) => t.lessons);
}

export const TRACKS: { id: TrackId; label: string; hint: string; icon: string }[] = [
  { id: 'lisans', label: 'Lisans', hint: 'Genel Yetenek ve Genel Kültür', icon: 'school-outline' },
  { id: 'onlisans', label: 'Önlisans', hint: 'Genel Yetenek ve Genel Kültür', icon: 'ribbon-outline' },
  { id: 'ortaogretim', label: 'Ortaöğretim', hint: 'Genel Yetenek ve Genel Kültür', icon: 'library-outline' },
];
