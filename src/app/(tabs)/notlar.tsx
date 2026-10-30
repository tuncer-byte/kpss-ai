import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Segmented } from '@/components/segmented';
import { colors, radius, space } from '@/constants/appTheme';
import { allLessons, getLesson, subjectsForTrack } from '@/data/content';
import { go } from '@/lib/nav';
import { addCardFromNote, removeNote, useUserState } from '@/lib/store';

export default function NotesScreen() {
  const state = useUserState();
  const [tab, setTab] = useState('mine');
  const lessons = allLessons(subjectsForTrack(state.profile.track));

  // Notlari derse gore grupla
  const groups = new Map<string, typeof state.notes>();
  for (const n of state.notes) groups.set(n.lessonId, [...(groups.get(n.lessonId) ?? []), n]);

  return (
    <Screen>
      <ScreenHeader title="Notlarım" subtitle="Videolardan aldığın notlar ve konu özetleri" />
      <Segmented
        options={[
          { key: 'mine', label: `Notlarım (${state.notes.length})` },
          { key: 'topic', label: 'Konu Notları' },
        ]}
        value={tab}
        onChange={setTab}
      />

      {tab === 'mine' ? (
        state.notes.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="bookmark-outline" size={36} color={colors.muted} />
            <Text style={styles.emptyTitle}>Henüz notun yok</Text>
            <Text style={styles.sub}>Bir videoyu izlerken "Not al"a dokun; not burada, ait olduğu dersle birlikte durur.</Text>
          </View>
        ) : (
          [...groups.entries()].map(([lessonId, notes]) => (
            <View key={lessonId} style={styles.group}>
              <Pressable onPress={() => go(`/lesson/${lessonId}`)}>
                <Text style={styles.groupTitle}>{getLesson(lessonId)?.title ?? 'Ders'}</Text>
              </Pressable>
              {notes.map((n) => {
                const inReview = !!state.cards[`n:${n.id}`];
                return (
                  <View key={n.id} style={styles.note}>
                    <Text style={styles.noteText}>{n.text}</Text>
                    <View style={styles.actions}>
                      <Pressable onPress={() => addCardFromNote(n)} disabled={inReview} hitSlop={8} style={styles.action}>
                        <Ionicons name={inReview ? 'checkmark-circle' : 'repeat-outline'} size={16} color={colors.accent} />
                        <Text style={styles.actionText}>{inReview ? 'Tekrarda' : 'Tekrara ekle'}</Text>
                      </Pressable>
                      <Pressable onPress={() => removeNote(n.id)} hitSlop={8} style={styles.action}>
                        <Ionicons name="trash-outline" size={16} color={colors.muted} />
                        <Text style={[styles.actionText, { color: colors.muted }]}>Sil</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </View>
          ))
        )
      ) : (
        lessons.map((l) => (
          <PressableScale key={l.id} style={styles.group} onPress={() => go(`/lesson/${l.id}`)} accessibilityLabel={l.title}>
            <Text style={styles.groupTitle}>{l.title}</Text>
            {l.summary.map((s, i) => (
              <Text key={i} style={styles.bullet}>
                • {s}
              </Text>
            ))}
          </PressableScale>
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { alignItems: 'center', gap: space.sm, padding: space.xxl },
  emptyTitle: { fontSize: 16, fontWeight: '800', color: colors.ink },
  sub: { fontSize: 14, lineHeight: 20, color: colors.muted, textAlign: 'center' },
  group: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: space.lg, gap: space.sm },
  groupTitle: { fontSize: 15, fontWeight: '800', color: colors.ink },
  note: { backgroundColor: colors.surface, borderRadius: radius.md, padding: space.md, gap: space.sm },
  noteText: { fontSize: 14, lineHeight: 21, color: colors.ink },
  actions: { flexDirection: 'row', gap: space.lg },
  action: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
  actionText: { fontSize: 13, fontWeight: '700', color: colors.accent },
  bullet: { fontSize: 14, lineHeight: 21, color: colors.muted },
});
