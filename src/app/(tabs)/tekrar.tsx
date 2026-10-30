import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating, type Grade } from 'ts-fsrs';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { colors, radius, space } from '@/constants/appTheme';
import { getLesson } from '@/data/content';
import { track } from '@/lib/analytics';
import { dueCards, reviewCard, useUserState } from '@/lib/store';

// TEKRAR: FSRS aralikli tekrar. Kartlar quiz yanlislarindan ve notlardan gelir.
const BUTTONS: { grade: Grade; label: string; color: string }[] = [
  { grade: Rating.Again, label: 'Tekrar', color: colors.again },
  { grade: Rating.Hard, label: 'Zor', color: colors.hard },
  { grade: Rating.Good, label: 'İyi', color: colors.good },
  { grade: Rating.Easy, label: 'Kolay', color: colors.easy },
];

export default function ReviewScreen() {
  const state = useUserState();
  const [flipped, setFlipped] = useState(false);
  const due = dueCards(Date.now(), state);
  const card = due[0];
  const total = Object.keys(state.cards).length;

  return (
    <Screen>
      <ScreenHeader title="Tekrar" subtitle={`${due.length} kart bekliyor · toplam ${total}`} />
      {!card ? (
        <View style={styles.empty}>
          <Ionicons name="checkmark-circle-outline" size={44} color={colors.good} />
          <Text style={styles.emptyTitle}>{total === 0 ? 'Henüz kartın yok' : 'Bugünlük tamam'}</Text>
          <Text style={styles.sub}>
            {total === 0
              ? 'Quiz\'te yanlış yaptığın sorular ve "Tekrara ekle" dediğin notlar burada kart olur.'
              : 'Yeni tekrarlar zamanı geldikçe burada görünür.'}
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.lesson}>{getLesson(card.lessonId)?.title}</Text>
          <PressableScale style={styles.card} onPress={() => setFlipped((f) => !f)} accessibilityLabel="Kartı çevir" haptic="light">
            <Text style={styles.face}>{flipped ? 'CEVAP' : 'SORU'}</Text>
            <Text style={styles.cardText}>{flipped ? card.back : card.front}</Text>
            {!flipped ? <Text style={styles.tap}>Cevap için dokun</Text> : null}
          </PressableScale>
          {flipped ? (
            <View style={styles.buttons}>
              {BUTTONS.map((b) => (
                <PressableScale
                  key={b.label}
                  style={[styles.btn, { backgroundColor: b.color }]}
                  accessibilityLabel={b.label}
                  onPress={() => {
                    reviewCard(card.id, b.grade);
                    track('review_done', { grade: b.grade });
                    setFlipped(false);
                  }}>
                  <Text style={styles.btnText}>{b.label}</Text>
                </PressableScale>
              ))}
            </View>
          ) : null}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { alignItems: 'center', gap: space.sm, padding: space.xxl },
  emptyTitle: { fontSize: 18, fontWeight: '800', color: colors.ink },
  sub: { fontSize: 14, lineHeight: 20, color: colors.muted, textAlign: 'center' },
  lesson: { fontSize: 13, fontWeight: '700', color: colors.muted },
  card: {
    minHeight: 280,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    padding: space.xl,
    justifyContent: 'center',
    gap: space.md,
  },
  face: { fontSize: 12, fontWeight: '800', color: colors.accent, letterSpacing: 1 },
  cardText: { fontSize: 18, lineHeight: 26, fontWeight: '700', color: colors.ink },
  tap: { fontSize: 13, color: colors.muted },
  buttons: { flexDirection: 'row', gap: space.sm },
  btn: { flex: 1, height: 52, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
});
