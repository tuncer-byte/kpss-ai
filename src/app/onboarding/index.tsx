import { useEffect } from 'react';

import { ChoiceRow, OnboardingStep } from '@/components/onboarding-step';
import { TRACKS } from '@/data/content';
import { track } from '@/lib/analytics';
import { go } from '@/lib/nav';
import { completeOnboarding, updateProfile } from '@/lib/store';

// Adim 1: hangi sinav. Secim = sonraki adim. "Şimdilik geç" varsayilanlarla uygulamayi acar.
export default function TrackStep() {
  useEffect(() => {
    track('onboarding_step', { step: 'start' });
  }, []);

  return (
    <OnboardingStep
      step={1}
      title="Hangi sınava hazırlanıyorsun?"
      subtitle="Sana uygun dersleri ve videoları buna göre hazırlayacağız."
      onSkip={() => {
        track('onboarding_done', { via: 'skip' });
        completeOnboarding();
      }}>
      {TRACKS.map((t) => (
        <ChoiceRow
          key={t.id}
          label={t.label}
          hint={t.hint}
          icon={t.icon}
          onPress={() => {
            updateProfile({ track: t.id, weakSubjects: [] });
            track('onboarding_step', { step: 'track', value: t.id });
            go('/onboarding/time');
          }}
        />
      ))}
    </OnboardingStep>
  );
}
