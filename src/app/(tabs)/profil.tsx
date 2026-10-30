import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { ChoiceRow } from '@/components/onboarding-step';
import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { ACTIVE_PALETTE, colors, radius, space } from '@/constants/appTheme';
import { APP_NAME } from '@/constants/brand';
import { TRACKS } from '@/data/content';
import { useAuth } from '@/lib/auth';
import { go } from '@/lib/nav';
import { HORIZONS, MINUTES } from '@/lib/plan';
import { cancelPremiumForTest, isPremium, trialDaysLeft } from '@/lib/premium';
import { scopeTitle } from '@/lib/progress';
import { currentStreak, resetAll, updateProfile, useUserState } from '@/lib/store';

export default function ProfileScreen() {
  const state = useUserState();
  const { profile } = state;
  const premium = isPremium(state);
  const auth = useAuth();
  const trial = trialDaysLeft(state);
  const [confirm, setConfirm] = useState(false);
  const initial = (profile.name.trim()[0] ?? 'K').toLocaleUpperCase('tr');
  const track = TRACKS.find((t) => t.id === (profile.track ?? 'lisans'));

  return (
    <Screen>
      <ScreenHeader title="Profil" hideProfile />

      <View style={styles.me}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            value={profile.name}
            onChangeText={(name) => updateProfile({ name })}
            placeholder="Adını yaz"
            placeholderTextColor={colors.muted}
            style={styles.name}
            maxLength={30}
            accessibilityLabel="Adın"
          />
          <Text style={styles.sub}>
            {track?.label} adayı · {premium ? 'Premium' : 'Ücretsiz'}
          </Text>
        </View>
      </View>

      {premium ? (
        <View style={styles.premiumOn}>
          <Ionicons name="ribbon" size={22} color={colors.onAccent} />
          <View style={{ flex: 1 }}>
            <Text style={styles.premiumOnTitle}>Premium aktif</Text>
            <Text style={styles.premiumOnSub}>
              {state.premium.plan === 'yearly' ? 'Sınav sezonu planı' : 'Aylık plan'}
              {trial !== null && trial > 0 ? ` · deneme ${trial} gün kaldı` : ''}
            </Text>
          </View>
        </View>
      ) : (
        <PressableScale style={styles.upsell} onPress={() => go('/paywall?src=profile')} accessibilityLabel="Premium'a geç">
          <Ionicons name="ribbon-outline" size={24} color={colors.accent} />
          <View style={{ flex: 1 }}>
            <Text style={styles.upsellTitle}>Tüm derslere ve testlere eriş</Text>
            <Text style={styles.sub}>3 gün ücretsiz dene</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.muted} />
        </PressableScale>
      )}

      <View style={styles.stats}>
        <Stat value={currentStreak(state)} label="gün seri" />
        <Stat value={Object.keys(state.lessonsDone).length} label="ders" />
        <Stat value={state.notes.length} label="not" />
        <Stat value={Object.keys(state.cards).length} label="kart" />
      </View>

      <Text style={styles.section}>Hedefim</Text>
      {TRACKS.map((t) => (
        <ChoiceRow
          key={t.id}
          label={t.label}
          icon={t.icon}
          selected={(profile.track ?? 'lisans') === t.id}
          onPress={() => updateProfile({ track: t.id, weakSubjects: [] })}
        />
      ))}

      <Text style={styles.section}>Sınava kalan süre</Text>
      <View style={styles.tiles}>
        {HORIZONS.map((h) => (
          <Chip key={h.id} label={h.label} on={profile.examHorizon === h.id} onPress={() => updateProfile({ examHorizon: h.id })} />
        ))}
      </View>

      <Text style={styles.section}>Günlük süre</Text>
      <View style={styles.tiles}>
        {MINUTES.map((m) => (
          <Chip key={m} label={`${m} dk`} on={profile.dailyMinutes === m} onPress={() => updateProfile({ dailyMinutes: m })} />
        ))}
      </View>

      <Text style={styles.section}>Son test sonuçların</Text>
      {state.results.length === 0 ? (
        <Text style={styles.sub}>Henüz test çözmedin. Bir dersin sonunda soruları çözebilirsin.</Text>
      ) : (
        state.results.slice(0, 6).map((r) => {
          const pct = Math.round((r.correct / Math.max(1, r.total)) * 100);
          return (
            <View key={r.id} style={styles.result}>
              <View style={{ flex: 1 }}>
                <Text style={styles.resultTitle} numberOfLines={1}>
                  {scopeTitle(r.scope)}
                </Text>
                <Text style={styles.sub}>{new Date(r.at).toLocaleDateString('tr-TR')}</Text>
              </View>
              <Text style={[styles.score, { color: pct >= 70 ? colors.success : colors.hard }]}>
                {r.correct}/{r.total}
              </Text>
            </View>
          );
        })
      )}

      <Text style={styles.section}>Hesap</Text>
      <PressableScale style={styles.row} onPress={() => go('/account')} accessibilityLabel="Hesap">
        <Ionicons name="person-outline" size={20} color={colors.accent} />
        <View style={{ flex: 1 }}>
          <Text style={styles.rowTitle}>{auth.email ?? 'Misafir olarak devam ediyorsun'}</Text>
          <Text style={styles.sub}>{auth.email ? 'İlerlemen bulutta yedekleniyor' : 'İlerlemeni kaybetmemek için hesap oluştur'}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      </PressableScale>

      <Text style={styles.section}>Uygulama</Text>
      <Text style={styles.rowTitle}>{APP_NAME} · sürüm 0.1.0</Text>
      <Text style={styles.sub}>Tema: {ACTIVE_PALETTE} (src/constants/appTheme.ts)</Text>

      {__DEV__ && premium ? (
        <PressableScale style={styles.reset} onPress={cancelPremiumForTest} accessibilityLabel="Premium'u kapat (test)">
          <Text style={styles.resetText}>Premium’u kapat (yalnızca geliştirme)</Text>
        </PressableScale>
      ) : null}
      <PressableScale
        style={[styles.reset, confirm && styles.resetOn]}
        onPress={() => {
          if (confirm) resetAll();
          else setConfirm(true);
        }}
        accessibilityLabel="Verileri sıfırla">
        <Text style={[styles.resetText, confirm && { color: colors.onAccent }]}>
          {confirm ? 'Emin misin? Tüm ilerleme silinir. Tekrar dokun.' : 'Tüm verileri sıfırla'}
        </Text>
      </PressableScale>
    </Screen>
  );
}

function Chip({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  return (
    <PressableScale style={[styles.chip, on && styles.chipOn]} onPress={onPress} accessibilityLabel={label}>
      <Text style={[styles.chipText, on && { color: colors.accent }]}>{label}</Text>
    </PressableScale>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  me: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  avatar: { width: 60, height: 60, borderRadius: radius.pill, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 24, fontWeight: '800', color: colors.accent },
  name: { fontSize: 19, fontWeight: '800', color: colors.ink, paddingVertical: 2 },
  sub: { fontSize: 13, color: colors.muted },
  upsell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.accentSoft,
  },
  upsellTitle: { fontSize: 15, fontWeight: '800', color: colors.ink },
  premiumOn: { flexDirection: 'row', alignItems: 'center', gap: space.md, padding: space.lg, borderRadius: radius.lg, backgroundColor: colors.accent },
  premiumOnTitle: { fontSize: 15, fontWeight: '800', color: colors.onAccent },
  premiumOnSub: { fontSize: 13, color: colors.onAccent, opacity: 0.9 },
  stats: { flexDirection: 'row', gap: space.sm },
  stat: { flex: 1, alignItems: 'center', paddingVertical: space.md, borderRadius: radius.lg, backgroundColor: colors.surface },
  statValue: { fontSize: 19, fontWeight: '800', color: colors.ink },
  statLabel: { fontSize: 12, color: colors.muted, fontWeight: '600' },
  section: { fontSize: 12, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: space.sm },
  tiles: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  chip: { height: 40, paddingHorizontal: space.lg, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.lineStrong, alignItems: 'center', justifyContent: 'center' },
  chipOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  chipText: { fontSize: 14, fontWeight: '700', color: colors.ink },
  result: { flexDirection: 'row', alignItems: 'center', padding: space.md, borderRadius: radius.md, borderWidth: 1, borderColor: colors.line },
  resultTitle: { fontSize: 14, fontWeight: '700', color: colors.ink },
  score: { fontSize: 18, fontWeight: '800' },
  row: { flexDirection: 'row', alignItems: 'center', gap: space.md, padding: space.md, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.line },
  rowTitle: { fontSize: 14, fontWeight: '700', color: colors.ink },
  reset: { height: 48, borderRadius: radius.md, borderWidth: 1, borderColor: colors.danger, alignItems: 'center', justifyContent: 'center', marginTop: space.sm },
  resetOn: { backgroundColor: colors.danger },
  resetText: { fontSize: 13, fontWeight: '800', color: colors.danger, textAlign: 'center' },
});
