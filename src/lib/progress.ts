// Ilerleme ve sonuc yardimcilari (ekranlar arasinda ortak).
import { getLesson, getSubject, SUBJECTS, subjectLessons } from '@/data/content';
import type { Subject, Topic, UserState } from '@/data/types';

export function subjectOfTopic(topicId: string): Subject | undefined {
  return SUBJECTS.find((s) => s.topics.some((t) => t.id === topicId));
}

// Test kapsami: dersId | "topic:<id>" | "subject:<id>"
export function scopeTitle(scope: string): string {
  if (scope.startsWith('topic:')) {
    const id = scope.slice(6);
    return `Konu testi · ${subjectOfTopic(id)?.topics.find((t) => t.id === id)?.title ?? ''}`;
  }
  if (scope.startsWith('subject:')) return `Ders testi · ${getSubject(scope.slice(8))?.title ?? ''}`;
  return getLesson(scope)?.title ?? 'Ders soruları';
}

export function scopeSubjectId(scope: string): string | undefined {
  if (scope.startsWith('topic:')) return subjectOfTopic(scope.slice(6))?.id;
  if (scope.startsWith('subject:')) return scope.slice(8);
  return getLesson(scope)?.subjectId;
}

export function topicProgress(state: UserState, t: Topic): { done: number; total: number } {
  return { done: t.lessons.filter((l) => state.lessonsDone[l.id]).length, total: t.lessons.length };
}

export function subjectProgress(state: UserState, s: Subject): { done: number; total: number } {
  const ls = subjectLessons(s);
  return { done: ls.filter((l) => state.lessonsDone[l.id]).length, total: ls.length };
}

// Bir dersteki cozulen testlerin toplam basarisi (yoksa null).
export function subjectAccuracy(state: UserState, subjectId: string): { pct: number; total: number } | null {
  let total = 0;
  let correct = 0;
  for (const r of state.results) {
    if (scopeSubjectId(r.scope) !== subjectId) continue;
    total += r.total;
    correct += r.correct;
  }
  return total ? { pct: Math.round((correct / total) * 100), total } : null;
}

// OSYM'deki soru sayisi etiketi.
export function examLabel(s: Subject): string {
  return `Sınavda ${s.examQuestions} soru`;
}
