import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { colors, radius, space } from '@/constants/appTheme';
import { TRACKS, getSubject } from '@/data/content';
import { track } from '@/lib/analytics';
import { go } from '@/lib/nav';
import { HORIZONS, lessonsPerDay, nextLessons } from '@/lib/plan';
import { completeOnboarding, useUserState } from '@/lib/store';

// Adim 4: kisisel plan ozeti. Bitince uygulama acilir, ilk ders dogrudan baslar.
export default function PlanStep() {
  const state = useUserState();
  const { profile } = state;
  const trackLabel = TRACKS.find((t) => t.id === (profile.track ?? 'lisans'))?.label ?? 'Lisans';
  const horizon = HORIZONS.find((h) => h.id === profile.examHorizon)?.label ?? '';
  const focus = profile.weakSubjects.map((id) => getSubject(id)?.title).filter(Boolean) as string[];
  const first = nextLessons(state, 1)[0];
  const perDay = lessonsPerDay(profile.dailyMinutes);

  return (
    <OnboardingStep
      step={4}
      title="Planın hazır"
      subtitle="İstediğin zaman profilinden değiştirebilirsin."
      cta="Devam et"
      onNext={() => {
        track('onboarding_done', { via: 'plan', track: profile.track ?? 'lisans', minutes: profile.dailyMinutes });
        completeOnboarding();
        // Sekmeler acildiktan sonra yumusak paywall; kapatinca / alinca ilk ders acilir
        const next = first ? `/watch/${first.id}` : '/';
        setTimeout(() => go(`/paywall?src=onboarding&next=${encodeURIComponent(next)}`), 0);
      }}>
      <View style={styles.card}>
        <Row icon="school-outline" label="Sınav" value={trackLabel} />
        <Row icon="time-outline" label="Günlük süre" value={`${profile.dailyMinutes} dakika · günde ~${perDay} ders`} />
        {horizon ? <Row icon="calendar-outline" label="Sınava kalan" value={horizon} /> : null}
        <Row icon="flag-outline" label="Önce çalışılacak" value={focus.length ? focus.join(', ') : 'Tüm dersler eşit'} />
      </View>
      {first ? (
        <View style={styles.first}>
          <Text style={styles.firstLabel}>İLK DERSİN</Text>
          <Text style={styles.firstTitle}>{first.title}</Text>
          <Text style={styles.firstSub}>
            {getSubject(first.subjectId)?.title} · {Math.round(first.durationSec / 60)} dk video, konu notu ve sorular
          </Text>
        </View>
      ) : null}
    </OnboardingStep>
  );
}

function Row({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.accent} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: space.lg, gap: space.lg },
  row: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: { fontSize: 12, color: colors.muted, fontWeight: '700' },
  rowValue: { fontSize: 15, color: colors.ink, fontWeight: '700' },
  first: { backgroundColor: colors.accentSoft, borderRadius: radius.lg, padding: space.lg, gap: space.xs },
  firstLabel: { fontSize: 12, fontWeight: '800', color: colors.accent, letterSpacing: 1 },
  firstTitle: { fontSize: 18, fontWeight: '800', color: colors.ink },
  firstSub: { fontSize: 14, color: colors.muted },
});
