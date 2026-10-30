import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { colors, radius, space } from '@/constants/appTheme';
import { getLesson, getSubject } from '@/data/content';
import { track } from '@/lib/analytics';
import { back, go, replace } from '@/lib/nav';
import { canOpenLesson } from '@/lib/premium';
import { addNote, useUserState } from '@/lib/store';

// Ders detayi: video + konu notu (kaydedilebilir) + sorular.
export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useUserState();
  const lesson = getLesson(id);
  const locked = !!lesson && !canOpenLesson(state, lesson.id);
  useEffect(() => {
    if (locked) replace('/paywall?src=lesson');
  }, [locked]);

  if (!lesson) {
    return (
      <Screen>
        <Pressable onPress={back}>
          <Text style={styles.sub}>Ders bulunamadı. Geri dön</Text>
        </Pressable>
      </Screen>
    );
  }

  const subject = getSubject(lesson.subjectId);
  const done = !!state.lessonsDone[lesson.id];

  return (
    <Screen>
      <Pressable onPress={back} hitSlop={12} style={styles.back} accessibilityLabel="Geri">
        <Ionicons name="chevron-back" size={26} color={colors.ink} />
      </Pressable>
      <Text style={styles.subject}>{subject?.title}</Text>
      <Text style={styles.title}>{lesson.title}</Text>

      <PressableScale style={styles.watch} onPress={() => go(`/watch/${lesson.id}`)} accessibilityLabel="Videoyu izle">
        <Ionicons name="play" size={22} color={colors.onAccent} />
        <Text style={styles.watchText}>{done ? 'Videoyu tekrar izle' : 'Videoyu izle'}</Text>
        <Text style={styles.watchMeta}>{Math.round(lesson.durationSec / 60)} dk</Text>
      </PressableScale>

      <Text style={styles.section}>Konu notu</Text>
      <View style={styles.notes}>
        {lesson.summary.map((s, i) => {
          const saved = state.notes.some((n) => n.lessonId === lesson.id && n.text === s);
          return (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bullet}>{s}</Text>
              <Pressable
                hitSlop={10}
                disabled={saved}
                accessibilityLabel="Notlarıma ekle"
                onPress={() => {
                  addNote(lesson.id, s);
                  track('note_saved', { lesson: lesson.id, source: 'summary' });
                }}>
                <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={22} color={saved ? colors.accent : colors.muted} />
              </Pressable>
            </View>
          );
        })}
      </View>

      <Text style={styles.section}>Videodaki bölümler</Text>
      {lesson.scenes.map((sc) => (
        <View key={sc.id} style={styles.scene}>
          <Text style={styles.time}>
            {Math.floor(sc.startSec / 60)}:{String(sc.startSec % 60).padStart(2, '0')}
          </Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.sceneTitle}>{sc.title}</Text>
            <Text style={styles.sub}>{sc.narration}</Text>
          </View>
        </View>
      ))}

      <PressableScale style={styles.quiz} onPress={() => go(`/quiz/${lesson.id}`)} accessibilityLabel="Soru çöz">
        <Text style={styles.quizText}>{lesson.questions.length} soru çöz</Text>
      </PressableScale>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: { width: 32, height: 32, justifyContent: 'center' },
  subject: { fontSize: 13, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1 },
  title: { fontSize: 22, lineHeight: 27, fontWeight: '800', color: colors.ink, letterSpacing: -0.5 },
  sub: { fontSize: 14, lineHeight: 21, color: colors.muted },
  watch: {
    height: 60,
    borderRadius: radius.lg,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg,
  },
  watchText: { flex: 1, color: colors.onAccent, fontSize: 15, fontWeight: '800' },
  watchMeta: { color: colors.onAccent, fontSize: 14, fontWeight: '700', opacity: 0.85 },
  section: { fontSize: 13, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: space.sm },
  notes: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: space.lg, gap: space.md },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: space.md },
  bullet: { flex: 1, fontSize: 14, lineHeight: 21, color: colors.ink },
  scene: { flexDirection: 'row', gap: space.md },
  time: { width: 40, fontSize: 13, fontWeight: '800', color: colors.secondary },
  sceneTitle: { fontSize: 14, fontWeight: '700', color: colors.ink },
  quiz: {
    height: 56,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: space.md,
  },
  quizText: { color: colors.accent, fontSize: 15, fontWeight: '800' },
});
