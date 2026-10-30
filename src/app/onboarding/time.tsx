import { StyleSheet, Text, View } from 'react-native';

import { ChoiceRow, OnboardingStep } from '@/components/onboarding-step';
import { PressableScale } from '@/components/pressable-scale';
import { colors, radius, space } from '@/constants/appTheme';
import { track } from '@/lib/analytics';
import { go } from '@/lib/nav';
import { HORIZONS, MINUTES } from '@/lib/plan';
import { updateProfile, useUserState } from '@/lib/store';

// Adim 2: sinava ne kadar var + gunluk sure. Ikisi de gevsek: varsayilan secili gelir.
export default function TimeStep() {
  const { profile } = useUserState();

  return (
    <OnboardingStep
      step={2}
      title="Ne kadar vaktin var?"
      subtitle="Planını buna göre kuracağız. Sonradan profilinden değiştirebilirsin."
      cta="Devam"
      onNext={() => {
        track('onboarding_step', { step: 'time', minutes: profile.dailyMinutes, horizon: profile.examHorizon });
        go('/onboarding/subjects');
      }}
      onSkip={() => go('/onboarding/subjects')}>
      <Text style={styles.section}>Günde kaç dakika?</Text>
      <View style={styles.tiles}>
        {MINUTES.map((m) => {
          const on = profile.dailyMinutes === m;
          return (
            <PressableScale
              key={m}
              style={[styles.tile, on && styles.tileOn]}
              accessibilityLabel={`Günde ${m} dakika`}
              onPress={() => updateProfile({ dailyMinutes: m })}>
              <Text style={[styles.num, on && styles.numOn]}>{m}</Text>
              <Text style={[styles.unit, on && styles.numOn]}>dk</Text>
            </PressableScale>
          );
        })}
      </View>
      <Text style={styles.section}>Sınava ne kadar var?</Text>
      {HORIZONS.map((h) => (
        <ChoiceRow
          key={h.id}
          label={h.label}
          selected={profile.examHorizon === h.id}
          onPress={() => updateProfile({ examHorizon: h.id })}
        />
      ))}
    </OnboardingStep>
  );
}

const styles = StyleSheet.create({
  section: { fontSize: 13, fontWeight: '800', color: colors.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: space.sm },
  tiles: { flexDirection: 'row', gap: space.sm },
  tile: {
    flex: 1,
    height: 84,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  num: { fontSize: 22, fontWeight: '800', color: colors.ink },
  numOn: { color: colors.accent },
  unit: { fontSize: 13, fontWeight: '700', color: colors.muted },
});
