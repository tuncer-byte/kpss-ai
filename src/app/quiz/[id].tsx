import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { colors, radius, space } from '@/constants/appTheme';
import { getLesson, getSubject, getTopic, subjectLessons } from '@/data/content';
import type { Question } from '@/data/types';
import { track } from '@/lib/analytics';
import { back, replace } from '@/lib/nav';
import { canOpenQuiz } from '@/lib/premium';
import { scopeTitle } from '@/lib/progress';
import { addCardFromQuestion, getState, logMinutes, recordQuiz } from '@/lib/store';

type Item = Question & { lessonId: string };

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function pool(lessons: ReturnType<typeof subjectLessons>): Item[] {
  return lessons.flatMap((l) => l.questions.map((q) => ({ ...q, lessonId: l.id })));
}

// Kapsam: dersId | "topic:<konuId>" | "subject:<dersId>"
function build(scope: string): { title: string; items: Item[] } {
  if (scope.startsWith('subject:')) {
    const sub = getSubject(scope.slice(8));
    return { title: scopeTitle(scope), items: shuffle(pool(sub ? subjectLessons(sub) : [])).slice(0, 20) };
  }
  if (scope.startsWith('topic:')) {
    const t = getTopic(scope.slice(6));
    return { title: scopeTitle(scope), items: shuffle(pool(t?.lessons ?? [])).slice(0, 15) };
  }
  const lesson = getLesson(scope);
  return { title: lesson?.title ?? 'Sorular', items: (lesson?.questions ?? []).map((q) => ({ ...q, lessonId: scope })) };
}

// Ders / konu / ders testi sorulari. Yanlislar otomatik tekrar kartina eklenir.
export default function QuizScreen() {
  const { id: rawId } = useLocalSearchParams<{ id: string }>();
  const id = decodeURIComponent(rawId);
  const setup = useRef(build(id)).current;
  const locked = !canOpenQuiz(getState(), id);
  useEffect(() => {
    if (locked) replace('/paywall?src=quiz');
  }, [locked]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const { title, items } = setup;
  const q = items[i];

  if (items.length === 0) {
    return (
      <Screen>
        <Pressable onPress={back}>
          <Text style={styles.sub}>Bu kapsamda soru yok. Geri dön</Text>
        </Pressable>
      </Screen>
    );
  }

  if (done) {
    const pct = Math.round((correct / items.length) * 100);
    return (
      <Screen>
        <View style={styles.result}>
          <Ionicons name={pct >= 70 ? 'trophy-outline' : 'refresh-circle-outline'} size={56} color={pct >= 70 ? colors.success : colors.hard} />
          <Text style={styles.resultScore}>
            {correct}/{items.length}
          </Text>
          <Text style={styles.title}>{pct >= 70 ? 'Harika gidiyorsun' : 'Biraz daha tekrar'}</Text>
          <Text style={styles.sub}>
            {items.length - correct > 0
              ? `${items.length - correct} yanlışın tekrar kartlarına eklendi.`
              : 'Hepsini doğru bildin.'}
          </Text>
          <PressableScale style={styles.cta} onPress={back} accessibilityLabel="Bitir">
            <Text style={styles.ctaText}>Bitir</Text>
          </PressableScale>
        </View>
      </Screen>
    );
  }

  const answered = picked !== null;

  const choose = (n: number) => {
    if (answered) return;
    setPicked(n);
    if (n === q.answer) setCorrect((c) => c + 1);
    else addCardFromQuestion(q.lessonId, q.id);
  };

  const next = () => {
    if (i + 1 >= items.length) {
      const finalCorrect = correct;
      recordQuiz(id, items.length, finalCorrect);
      logMinutes(Math.max(1, Math.round(items.length / 2)));
      track('quiz_done', { scope: id, correct: finalCorrect, total: items.length });
      setDone(true);
    } else {
      setI(i + 1);
      setPicked(null);
    }
  };

  return (
    <Screen>
      <View style={styles.head}>
        <Pressable onPress={back} hitSlop={12} accessibilityLabel="Kapat">
          <Ionicons name="close" size={26} color={colors.ink} />
        </Pressable>
        <Text style={styles.headTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.count}>
          {i + 1}/{items.length}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${((i + (answered ? 1 : 0)) / items.length) * 100}%` }]} />
      </View>

      <Text style={styles.question}>{q.text}</Text>
      {q.options.map((o, n) => {
        const isAnswer = n === q.answer;
        const isPicked = n === picked;
        const state = !answered ? 'idle' : isAnswer ? 'right' : isPicked ? 'wrong' : 'idle';
        return (
          <PressableScale
            key={n}
            style={[styles.opt, state === 'right' && styles.optRight, state === 'wrong' && styles.optWrong]}
            onPress={() => choose(n)}
            haptic="light"
            accessibilityLabel={o}>
            <Text style={styles.optKey}>{String.fromCharCode(65 + n)}</Text>
            <Text style={styles.optText}>{o}</Text>
            {state === 'right' ? <Ionicons name="checkmark-circle" size={22} color={colors.success} /> : null}
            {state === 'wrong' ? <Ionicons name="close-circle" size={22} color={colors.danger} /> : null}
          </PressableScale>
        );
      })}

      {answered ? (
        <>
          <View style={styles.explain}>
            <Text style={styles.explainLabel}>{picked === q.answer ? 'Doğru' : 'Yanlış'}</Text>
            <Text style={styles.explainText}>{q.explanation}</Text>
          </View>
          <PressableScale style={styles.cta} onPress={next} accessibilityLabel="Devam">
            <Text style={styles.ctaText}>{i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki soru'}</Text>
          </PressableScale>
        </>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  headTitle: { flex: 1, fontSize: 14, fontWeight: '700', color: colors.muted },
  count: { fontSize: 14, fontWeight: '800', color: colors.ink },
  track: { height: 6, borderRadius: radius.pill, backgroundColor: colors.line, overflow: 'hidden' },
  fill: { height: 6, backgroundColor: colors.accent },
  question: { fontSize: 19, lineHeight: 26, fontWeight: '800', color: colors.ink, marginVertical: space.sm },
  opt: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.lineStrong,
  },
  optRight: { borderColor: colors.success, backgroundColor: '#E7F5E8' },
  optWrong: { borderColor: colors.danger, backgroundColor: '#FBE9E5' },
  optKey: { width: 24, fontSize: 14, fontWeight: '800', color: colors.accent },
  optText: { flex: 1, fontSize: 15, color: colors.ink, fontWeight: '600' },
  explain: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: space.lg, gap: space.xs },
  explainLabel: { fontSize: 12, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1 },
  explainText: { fontSize: 14, lineHeight: 21, color: colors.ink },
  cta: { height: 56, borderRadius: radius.lg, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  ctaText: { color: colors.onAccent, fontSize: 15, fontWeight: '800' },
  result: { alignItems: 'center', gap: space.md, paddingTop: space.xxl },
  resultScore: { fontSize: 44, fontWeight: '800', color: colors.ink },
  title: { fontSize: 20, fontWeight: '800', color: colors.ink },
  sub: { fontSize: 14, color: colors.muted, textAlign: 'center' },
});
