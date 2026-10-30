import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { colors, radius, space } from '@/constants/appTheme';
import { getSubject, subjectLessons } from '@/data/content';
import { back, go } from '@/lib/nav';
import { isLessonFree, isPremium } from '@/lib/premium';
import { examLabel, subjectAccuracy, subjectProgress, topicProgress } from '@/lib/progress';
import { useUserState } from '@/lib/store';

// Ders ekrani: konular + ilerleme. Konu testi ve ders testi burada (karma deneme yok).
export default function SubjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useUserState();
  const subject = getSubject(id);

  if (!subject) {
    return (
      <Screen>
        <Pressable onPress={back}>
          <Text style={styles.sub}>Ders bulunamadı. Geri dön</Text>
        </Pressable>
      </Screen>
    );
  }

  const p = subjectProgress(state, subject);
  const acc = subjectAccuracy(state, subject.id);
  const premium = isPremium(state);
  const qCount = subjectLessons(subject).reduce((n, l) => n + l.questions.length, 0);

  return (
    <Screen>
      <Pressable onPress={back} hitSlop={12} style={styles.back} accessibilityLabel="Geri">
        <Ionicons name="chevron-back" size={26} color={colors.ink} />
      </Pressable>
      <Text style={styles.title}>{subject.title}</Text>
      <Text style={styles.sub}>
        {examLabel(subject)} · {subject.topics.length} konu · {p.done}/{p.total} ders{acc ? ` · başarı %${acc.pct}` : ''}
      </Text>

      <PressableScale
        style={styles.test}
        onPress={() => go(premium ? `/quiz/${encodeURIComponent(`subject:${subject.id}`)}` : '/paywall?src=quiz')}
        accessibilityLabel="Ders testi">
        <Ionicons name={premium ? 'flash-outline' : 'lock-closed'} size={22} color={colors.onAccent} />
        <View style={{ flex: 1 }}>
          <Text style={styles.testTitle}>{subject.title} testi</Text>
          <Text style={styles.testSub}>Tüm konulardan 20 soru · havuz {qCount} soru</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.onAccent} />
      </PressableScale>

      {subject.topics.map((t) => {
        const tp = topicProgress(state, t);
        return (
          <View key={t.id} style={styles.topic}>
            <View style={styles.topicHead}>
              <Text style={styles.topicTitle}>{t.title.toLocaleUpperCase('tr')}</Text>
              <Text style={styles.topicCount}>
                {tp.done}/{tp.total}
              </Text>
            </View>
            {t.lessons.map((l) => {
              const done = !!state.lessonsDone[l.id];
              const locked = !premium && !isLessonFree(l.id);
              return (
                <PressableScale key={l.id} style={styles.lesson} onPress={() => go(locked ? '/paywall?src=lesson' : `/lesson/${l.id}`)} accessibilityLabel={l.title}>
                  <Ionicons
                    name={locked ? 'lock-closed' : done ? 'checkmark-circle' : 'play-circle-outline'}
                    size={26}
                    color={locked ? colors.muted : done ? colors.success : colors.accent}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.lessonTitle}>{l.title}</Text>
                    <Text style={styles.sub}>
                      {Math.max(1, Math.round(l.durationSec / 60))} dk · {l.questions.length} soru
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.muted} />
                </PressableScale>
              );
            })}
            <Pressable
              onPress={() => go(premium ? `/quiz/${encodeURIComponent(`topic:${t.id}`)}` : '/paywall?src=quiz')}
              hitSlop={8}
              accessibilityLabel={`${t.title} konu testi`}>
              <Text style={styles.topicTest}>{premium ? 'Konu testi çöz' : 'Konu testi · Premium'}</Text>
            </Pressable>
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: { width: 32, height: 32, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: colors.ink, letterSpacing: -0.5 },
  test: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.accent,
  },
  testTitle: { fontSize: 15, fontWeight: '800', color: colors.onAccent },
  testSub: { fontSize: 13, color: colors.onAccent, opacity: 0.85 },
  topic: { gap: space.sm },
  topicHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  topicTitle: { flex: 1, fontSize: 13, fontWeight: '800', color: colors.accent, letterSpacing: 1 },
  topicCount: { fontSize: 13, fontWeight: '800', color: colors.muted },
  topicTest: { fontSize: 14, fontWeight: '800', color: colors.accent, paddingVertical: space.xs },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.line,
  },
  lessonTitle: { fontSize: 15, fontWeight: '700', color: colors.ink },
  sub: { fontSize: 13, color: colors.muted },
});
