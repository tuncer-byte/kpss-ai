import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, FlatList, Pressable, StyleSheet, Text, View, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PressableScale } from '@/components/pressable-scale';
import { colors, radius, space } from '@/constants/appTheme';
import { getLesson } from '@/data/content';
import type { Scene } from '@/data/types';
import { track } from '@/lib/analytics';
import { back, replace } from '@/lib/nav';
import { canOpenLesson } from '@/lib/premium';
import { addNote, logMinutes, markLessonDone, setLastLesson, useUserState } from '@/lib/store';

// DIKEY SINEMA PLAYER: her sahne tam ekran bir sayfa; yukari kaydirinca siradaki sahne.
// Video dosyasi (lesson.videoUrl) baglaninca sahne arka plani yerine video oynatilir;
// simdilik AI anlatici metni, sahne basligi ve anahtar bilgiler ekranda akar.
type Page = { kind: 'scene'; scene: Scene } | { kind: 'end' };

const BG: [string, string][] = [
  ['#2A1B4D', '#14121A'],
  ['#12383F', '#14121A'],
  ['#4A1F2B', '#14121A'],
  ['#1F2D5A', '#14121A'],
];

export default function WatchScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLesson(id);
  const state = useUserState();
  const locked = !!lesson && !canOpenLesson(state, lesson.id);
  useEffect(() => {
    if (locked) replace('/paywall?src=lesson');
  }, [locked]);
  const [h, setH] = useState(0);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const listRef = useRef<FlatList<Page>>(null);
  const progress = useRef(new Animated.Value(0)).current;

  const pages = useMemo<Page[]>(
    () => (lesson ? [...lesson.scenes.map((scene) => ({ kind: 'scene' as const, scene })), { kind: 'end' as const }] : []),
    [lesson],
  );

  useEffect(() => {
    if (lesson && !locked) {
      track('lesson_start', { lesson: lesson.id });
      setLastLesson(lesson.id);
    }
  }, [lesson]);

  // Sahne suresi anlatim uzunlugundan: 6-18 sn. Bitince sonraki sahneye gecer.
  useEffect(() => {
    progress.setValue(0);
    const page = pages[idx];
    if (!playing || !page || page.kind !== 'scene' || h === 0) return;
    const ms = Math.min(18000, Math.max(6000, page.scene.narration.length * 70));
    const anim = Animated.timing(progress, { toValue: 1, duration: ms, easing: Easing.linear, useNativeDriver: false });
    anim.start(({ finished }) => {
      if (finished) listRef.current?.scrollToIndex({ index: idx + 1, animated: true });
    });
    return () => anim.stop();
  }, [idx, playing, pages, h, progress]);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.root}>
        <Pressable onPress={back}>
          <Text style={styles.missing}>Ders bulunamadı. Geri dön</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (h === 0) return;
    const i = Math.round(e.nativeEvent.contentOffset.y / h);
    if (i !== idx && i >= 0 && i < pages.length) setIdx(i);
  };

  const finish = (goQuiz: boolean) => {
    markLessonDone(lesson.id);
    logMinutes(Math.max(1, Math.round(lesson.durationSec / 60)));
    track('lesson_complete', { lesson: lesson.id });
    if (goQuiz) replace(`/quiz/${lesson.id}`);
    else back();
  };

  const barWidth = progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  return (
    <View style={styles.root} onLayout={(e) => setH(e.nativeEvent.layout.height)}>
      {h > 0 ? (
        <FlatList
          ref={listRef}
          data={pages}
          keyExtractor={(p, i) => (p.kind === 'scene' ? p.scene.id : `end-${i}`)}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          onScroll={onScroll}
          scrollEventThrottle={32}
          getItemLayout={(_, i) => ({ length: h, offset: h * i, index: i })}
          renderItem={({ item, index }) =>
            item.kind === 'scene' ? (
              <ScenePage
                scene={item.scene}
                lessonId={lesson.id}
                height={h}
                bg={BG[index % BG.length]}
                saved={state.notes.some((n) => n.sceneId === item.scene.id && n.lessonId === lesson.id)}
                playing={playing}
                onTogglePlay={() => setPlaying((p) => !p)}
              />
            ) : (
              <View style={[styles.page, styles.endPage, { height: h }]}>
                <Ionicons name="checkmark-circle" size={64} color={colors.good} />
                <Text style={styles.endTitle}>Ders bitti</Text>
                <Text style={styles.endSub}>{lesson.title}</Text>
                <PressableScale style={styles.cta} onPress={() => finish(true)} accessibilityLabel="Soruları çöz">
                  <Text style={styles.ctaText}>{lesson.questions.length} soruyu çöz</Text>
                </PressableScale>
                <Pressable onPress={() => finish(false)} hitSlop={8}>
                  <Text style={styles.link}>Şimdilik kapat</Text>
                </Pressable>
              </View>
            )
          }
        />
      ) : null}

      <SafeAreaView edges={['top']} style={styles.top} pointerEvents="box-none">
        <View style={styles.segments}>
          {lesson.scenes.map((s, i) => (
            <View key={s.id} style={styles.segTrack}>
              {i < idx ? <View style={[styles.segFill, { width: '100%' }]} /> : null}
              {i === idx ? <Animated.View style={[styles.segFill, { width: barWidth }]} /> : null}
            </View>
          ))}
        </View>
        <Pressable onPress={back} hitSlop={12} accessibilityLabel="Kapat" style={styles.close}>
          <Ionicons name="close" size={26} color={colors.cinemaInk} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

function ScenePage({
  scene,
  lessonId,
  height,
  bg,
  saved,
  playing,
  onTogglePlay,
}: {
  scene: Scene;
  lessonId: string;
  height: number;
  bg: [string, string];
  saved: boolean;
  playing: boolean;
  onTogglePlay: () => void;
}) {
  return (
    <LinearGradient colors={bg} style={[styles.page, { height }]}>
      <Pressable style={styles.tapArea} onPress={onTogglePlay} accessibilityLabel={playing ? 'Duraklat' : 'Oynat'}>
        <Text style={styles.sceneTitle}>{scene.title}</Text>
        <View style={styles.points}>
          {scene.keyPoints.map((p, i) => (
            <View key={i} style={styles.point}>
              <Text style={styles.pointText}>{p}</Text>
            </View>
          ))}
        </View>
        {!playing ? <Ionicons name="pause-circle" size={48} color="rgba(255,255,255,0.6)" /> : null}
      </Pressable>
      <View style={styles.caption}>
        <Text style={styles.captionText}>{scene.narration}</Text>
        <PressableScale
          style={[styles.noteBtn, saved && styles.noteBtnOn]}
          disabled={saved}
          accessibilityLabel="Not al"
          onPress={() => {
            addNote(lessonId, `${scene.title}: ${scene.keyPoints.join(' · ')}`, scene.id);
            track('note_saved', { lesson: lessonId, source: 'scene' });
          }}>
          <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={18} color={saved ? colors.accent : colors.cinemaInk} />
          <Text style={[styles.noteText, saved && { color: colors.accent }]}>{saved ? 'Notlarına eklendi' : 'Not al'}</Text>
        </PressableScale>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cinema },
  missing: { color: colors.cinemaInk, padding: space.xl },
  page: { paddingHorizontal: space.xl, paddingTop: 110, paddingBottom: space.xxl, justifyContent: 'space-between' },
  top: { position: 'absolute', top: 0, left: 0, right: 0, paddingHorizontal: space.lg, paddingTop: space.sm, gap: space.sm },
  segments: { flexDirection: 'row', gap: 4 },
  segTrack: { flex: 1, height: 3, borderRadius: radius.pill, backgroundColor: 'rgba(255,255,255,0.25)', overflow: 'hidden' },
  segFill: { height: 3, backgroundColor: '#FFFFFF' },
  close: { alignSelf: 'flex-end' },
  tapArea: { flex: 1, justifyContent: 'center', gap: space.lg },
  sceneTitle: { color: colors.cinemaInk, fontSize: 30, lineHeight: 35, fontWeight: '800', letterSpacing: -0.8 },
  points: { gap: space.sm },
  point: { backgroundColor: 'rgba(255,255,255,0.14)', borderRadius: radius.md, paddingHorizontal: space.lg, paddingVertical: space.md },
  pointText: { color: colors.cinemaInk, fontSize: 16, lineHeight: 23, fontWeight: '700' },
  caption: { gap: space.md },
  captionText: { color: 'rgba(255,255,255,0.88)', fontSize: 15, lineHeight: 22 },
  noteBtn: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xs,
    paddingHorizontal: space.lg,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  noteBtnOn: { backgroundColor: '#FFFFFF' },
  noteText: { color: colors.cinemaInk, fontSize: 14, fontWeight: '800' },
  endPage: { backgroundColor: colors.cinema, alignItems: 'center', justifyContent: 'center', gap: space.md },
  endTitle: { color: colors.cinemaInk, fontSize: 26, fontWeight: '800' },
  endSub: { color: 'rgba(255,255,255,0.7)', fontSize: 15, textAlign: 'center', marginBottom: space.lg },
  cta: { alignSelf: 'stretch', height: 56, borderRadius: radius.lg, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  ctaText: { color: colors.onAccent, fontSize: 15, fontWeight: '800' },
  link: { color: colors.cinemaInk, fontSize: 14, fontWeight: '700', textDecorationLine: 'underline', marginTop: space.sm },
});
