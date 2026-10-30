import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PressableScale } from '@/components/pressable-scale';
import { colors, radius, space } from '@/constants/appTheme';
import { getSubject, subjectLessons, subjectsForTrack } from '@/data/content';
import type { Lesson } from '@/data/types';
import { go } from '@/lib/nav';
import { interleave, sortSubjects, undoneFirst } from '@/lib/plan';
import { canOpenLesson, isPremium } from '@/lib/premium';
import { getState, useUserState } from '@/lib/store';

// KESFET: dikey sinema akisi. Ustte ders secimi; ilk acilista "Karisik" (dersler sirayla dolasir).
// Her sayfa bir ders videosu; yukari kaydirinca siradaki. Bitmemisler once gelir.
const GRADIENTS: [string, string][] = [
  ['#2A1B4D', '#14121A'],
  ['#12383F', '#14121A'],
  ['#4A1F2B', '#14121A'],
  ['#2B3A14', '#14121A'],
  ['#1F2D5A', '#14121A'],
  ['#4A3414', '#14121A'],
];

const MIX = 'mix';

export default function DiscoverScreen() {
  const state = useUserState();
  const [h, setH] = useState(0);
  const [filter, setFilter] = useState<string>(MIX);

  const subjects = subjectsForTrack(state.profile.track);
  const trackKey = state.profile.track ?? 'lisans';

  // Sira yalnizca secim degisince hesaplanir: izlerken liste yerinden oynamaz.
  const lessons = useMemo(() => {
    const s = getState();
    const subs = sortSubjects(subjectsForTrack(s.profile.track), s);
    if (filter === MIX) return interleave(subs.map((sub) => undoneFirst(subjectLessons(sub), s)));
    const one = getSubject(filter);
    return one ? undoneFirst(subjectLessons(one), s) : [];
  }, [filter, trackKey]);

  const chip = (id: string, label: string, icon?: string) => {
    const on = filter === id;
    return (
      <Pressable key={id} onPress={() => setFilter(id)} style={[styles.filter, on && styles.filterOn]} accessibilityLabel={label}>
        {icon ? <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={14} color={on ? colors.accent : colors.cinemaInk} /> : null}
        <Text style={[styles.filterText, on && { color: colors.accent }]}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.root} onLayout={(e) => setH(e.nativeEvent.layout.height)}>
      {h > 0 ? (
        <FlatList
          key={filter}
          data={lessons}
          keyExtractor={(l) => l.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          getItemLayout={(_, i) => ({ length: h, offset: h * i, index: i })}
          renderItem={({ item, index }) => (
            <Page
              lesson={item}
              index={index}
              height={h}
              done={!!state.lessonsDone[item.id]}
              locked={!canOpenLesson(state, item.id)}
              total={lessons.length}
            />
          )}
        />
      ) : null}
      <SafeAreaView edges={['top']} style={styles.topBar} pointerEvents="box-none">
        <View style={styles.topRow} pointerEvents="box-none">
          <Text style={styles.brand}>Keşfet</Text>
          {isPremium(state) ? null : (
            <Pressable onPress={() => go('/paywall?src=discover')} hitSlop={10} style={styles.pro} accessibilityLabel="Premium">
              <Ionicons name="ribbon-outline" size={14} color={colors.cinemaInk} />
              <Text style={styles.proText}>Premium</Text>
            </Pressable>
          )}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
          {chip(MIX, 'Karışık', 'shuffle-outline')}
          {subjects.map((s) => chip(s.id, s.title))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function Page({
  lesson,
  index,
  height,
  done,
  locked,
  total,
}: {
  lesson: Lesson;
  index: number;
  height: number;
  done: boolean;
  locked: boolean;
  total: number;
}) {
  const subject = getSubject(lesson.subjectId);
  const topic = subject?.topics.find((t) => t.id === lesson.topicId);
  const g = GRADIENTS[index % GRADIENTS.length];
  return (
    <LinearGradient colors={g} style={[styles.page, { height }]}>
      <View style={styles.center}>
        <View style={styles.chip}>
          <Ionicons name={(subject?.icon ?? 'book-outline') as keyof typeof Ionicons.glyphMap} size={14} color={colors.cinemaInk} />
          <Text style={styles.chipText}>
            {subject?.title}
            {topic ? ` · ${topic.title}` : ''}
          </Text>
        </View>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.hook} numberOfLines={4}>
          {lesson.scenes[0]?.narration}
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.meta}>
          {Math.max(1, Math.round(lesson.durationSec / 60))} dk · {lesson.scenes.length} sahne · {lesson.questions.length} soru
          {done ? ' · Tamamlandı' : ''}
        </Text>
        <PressableScale
          style={styles.cta}
          onPress={() => go(locked ? '/paywall?src=discover' : `/watch/${lesson.id}`)}
          accessibilityLabel={locked ? 'Premium ile aç' : 'Dersi izle'}>
          <Ionicons name={locked ? 'lock-closed' : 'play'} size={18} color={colors.accent} />
          <Text style={styles.ctaText}>{locked ? 'Premium ile aç' : done ? 'Tekrar izle' : 'Dersi izle'}</Text>
        </PressableScale>
        {locked ? (
          <Text style={styles.hint}>Her dersin ilk 2 videosu ücretsiz</Text>
        ) : (
          <Pressable onPress={() => go(`/lesson/${lesson.id}`)} hitSlop={8}>
            <Text style={styles.link}>Konu notu ve sorular</Text>
          </Pressable>
        )}
        <Text style={styles.hint}>
          {index + 1} / {total} · yukarı kaydır
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cinema },
  topBar: { position: 'absolute', top: 0, left: 0, right: 0 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: space.xl,
    paddingTop: space.sm,
  },
  brand: { color: colors.cinemaInk, fontSize: 18, fontWeight: '800' },
  pro: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    paddingHorizontal: space.md,
    height: 30,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  proText: { color: colors.cinemaInk, fontSize: 12, fontWeight: '800' },
  filters: { paddingHorizontal: space.xl, paddingVertical: space.md, gap: space.sm },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    height: 34,
    paddingHorizontal: space.md,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  filterOn: { backgroundColor: '#FFFFFF' },
  filterText: { color: colors.cinemaInk, fontSize: 13, fontWeight: '700' },
  page: { paddingHorizontal: space.xl, justifyContent: 'space-between', paddingTop: 150, paddingBottom: space.xl },
  center: { gap: space.md },
  chip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    backgroundColor: 'rgba(255,255,255,0.16)',
    paddingHorizontal: space.md,
    paddingVertical: space.xs,
    borderRadius: radius.pill,
  },
  chipText: { color: colors.cinemaInk, fontSize: 13, fontWeight: '700' },
  title: { color: colors.cinemaInk, fontSize: 27, lineHeight: 32, fontWeight: '800', letterSpacing: -0.8 },
  hook: { color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 22 },
  bottom: { gap: space.md, alignItems: 'stretch' },
  meta: { color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: '600' },
  cta: {
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
  },
  ctaText: { color: colors.accent, fontSize: 15, fontWeight: '800' },
  link: { color: colors.cinemaInk, fontSize: 14, fontWeight: '700', textAlign: 'center', textDecorationLine: 'underline' },
  hint: { color: 'rgba(255,255,255,0.45)', fontSize: 12, textAlign: 'center' },
});
