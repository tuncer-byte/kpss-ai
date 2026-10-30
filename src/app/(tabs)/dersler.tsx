import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { colors, radius, space } from '@/constants/appTheme';
import { getLesson, subjectsForTrack } from '@/data/content';
import { go } from '@/lib/nav';
import { lessonsPerDay, orderedLessons } from '@/lib/plan';
import { canOpenLesson, isPremium } from '@/lib/premium';
import { examLabel, subjectAccuracy, subjectProgress } from '@/lib/progress';
import { currentStreak, dueCards, useUserState } from '@/lib/store';

const norm = (s: string) => s.toLocaleLowerCase('tr').trim();

export default function LessonsScreen() {
  const state = useUserState();
  const subjects = subjectsForTrack(state.profile.track);
  const premium = isPremium(state);
  const plan = orderedLessons(state)
    .filter((l) => !state.lessonsDone[l.id] && canOpenLesson(state, l.id))
    .slice(0, lessonsPerDay(state.profile.dailyMinutes));
  const due = dueCards(Date.now(), state).length;
  const streak = currentStreak(state);
  const [q, setQ] = useState('');
  const last = state.lastLesson ? getLesson(state.lastLesson) : undefined;

  const query = norm(q);
  const hits = query
    ? subjects.flatMap((s) =>
        s.topics.flatMap((t) => {
          const topicHit = norm(t.title).includes(query);
          const ls = t.lessons.filter((l) => topicHit || norm(l.title).includes(query));
          return ls.map((l) => ({ l, subject: s.title, topic: t.title }));
        }),
      )
    : [];

  return (
    <Screen>
      <ScreenHeader title="Dersler" subtitle="Konu ara, plana bak, derse gir" />

      <View style={styles.search}>
        <Ionicons name="search-outline" size={18} color={colors.muted} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Konu ara (ör. üçgen, Lozan, EBOB)"
          placeholderTextColor={colors.muted}
          style={styles.input}
          autoCorrect={false}
          accessibilityLabel="Konu ara"
        />
      </View>

      {query ? (
        hits.length === 0 ? (
          <Text style={styles.sub}>Eşleşen konu bulunamadı.</Text>
        ) : (
          hits.slice(0, 30).map(({ l, subject, topic }) => (
            <PressableScale key={l.id} style={styles.planRow} onPress={() => go(`/lesson/${l.id}`)} accessibilityLabel={l.title}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{l.title}</Text>
                <Text style={styles.sub}>
                  {subject} · {topic}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </PressableScale>
          ))
        )
      ) : (
        <>
          {last ? (
            <PressableScale style={styles.resume} onPress={() => go(`/watch/${last.id}`)} accessibilityLabel="Devam et">
              <Ionicons name="play-circle" size={34} color={colors.onAccent} />
              <View style={{ flex: 1 }}>
                <Text style={styles.resumeLabel}>Kaldığın yerden devam et</Text>
                <Text style={styles.resumeTitle} numberOfLines={1}>
                  {last.title}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.onAccent} />
            </PressableScale>
          ) : null}

          <View style={styles.stats}>
            <Stat icon="flame-outline" value={String(streak)} label="gün seri" />
            <Stat icon="checkmark-done-outline" value={String(Object.keys(state.lessonsDone).length)} label="ders bitti" />
            <Stat icon="repeat-outline" value={String(due)} label="tekrar var" onPress={() => go('/tekrar')} />
          </View>

          <Text style={styles.section}>Bugünün planı</Text>
          {plan.length === 0 ? (
            <PressableScale style={styles.card} onPress={() => go('/paywall?src=profile')} accessibilityLabel="Premium">
              <Text style={styles.cardTitle}>{premium ? 'Tüm dersleri bitirdin' : 'Ücretsiz dersleri bitirdin'}</Text>
              <Text style={styles.sub}>
                {premium ? 'Notlarından, tekrar kartlarından ve testlerden devam edebilirsin.' : 'Devam etmek için Premium’a geç. 3 gün ücretsiz.'}
              </Text>
            </PressableScale>
          ) : (
            plan.map((l) => (
              <PressableScale key={l.id} style={styles.planRow} onPress={() => go(`/watch/${l.id}`)} accessibilityLabel={l.title}>
                <View style={styles.play}>
                  <Ionicons name="play" size={18} color={colors.onAccent} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{l.title}</Text>
                  <Text style={styles.sub}>
                    {subjects.find((s) => s.id === l.subjectId)?.title} · {Math.max(1, Math.round(l.durationSec / 60))} dk
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={colors.muted} />
              </PressableScale>
            ))
          )}

          <Text style={styles.section}>Tüm dersler</Text>
          {subjects.map((s) => {
            const p = subjectProgress(state, s);
            const acc = subjectAccuracy(state, s.id);
            return (
              <PressableScale key={s.id} style={styles.subject} onPress={() => go(`/subject/${s.id}`)} accessibilityLabel={s.title}>
                <ProgressRing progress={p.total ? p.done / p.total : 0} color={colors.accent} trackColor={colors.line} size={52}>
                  <Ionicons name={s.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.accent} />
                </ProgressRing>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{s.title}</Text>
                  <Text style={styles.sub}>
                    {s.topics.length} konu · {p.done}/{p.total} ders{acc ? ` · başarı %${acc.pct}` : ''}
                  </Text>
                  <Text style={styles.exam}>{examLabel(s)}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={colors.muted} />
              </PressableScale>
            );
          })}
        </>
      )}
    </Screen>
  );
}

function Stat({ icon, value, label, onPress }: { icon: string; value: string; label: string; onPress?: () => void }) {
  return (
    <PressableScale style={styles.stat} onPress={onPress} disabled={!onPress} haptic={onPress ? 'light' : 'none'}>
      <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.accent} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    height: 48,
    paddingHorizontal: space.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  input: { flex: 1, fontSize: 15, color: colors.ink },
  resume: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.accent,
  },
  resumeLabel: { fontSize: 12, fontWeight: '700', color: colors.onAccent, opacity: 0.85 },
  resumeTitle: { fontSize: 15, fontWeight: '800', color: colors.onAccent },
  stats: { flexDirection: 'row', gap: space.sm },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: space.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  statValue: { fontSize: 19, fontWeight: '800', color: colors.ink },
  statLabel: { fontSize: 12, color: colors.muted, fontWeight: '600' },
  section: { fontSize: 13, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: space.sm },
  card: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: space.lg, gap: space.xs },
  planRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.md,
    borderRadius: radius.lg,
    backgroundColor: colors.accentSoft,
  },
  play: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subject: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: colors.ink },
  sub: { fontSize: 13, color: colors.muted },
  exam: { fontSize: 12, color: colors.accent, fontWeight: '700', marginTop: 1 },
});
