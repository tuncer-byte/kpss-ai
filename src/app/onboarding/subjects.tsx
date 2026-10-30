import { ChoiceRow, OnboardingStep } from '@/components/onboarding-step';
import { subjectsForTrack } from '@/data/content';
import { track } from '@/lib/analytics';
import { go } from '@/lib/nav';
import { updateProfile, useUserState } from '@/lib/store';

// Adim 3: zorlandigin dersler (coklu, isteğe bagli). Plan bu derslerden baslar.
export default function SubjectsStep() {
  const { profile } = useUserState();
  const subjects = subjectsForTrack(profile.track);
  const weak = profile.weakSubjects;

  const toggle = (id: string) =>
    updateProfile({ weakSubjects: weak.includes(id) ? weak.filter((x) => x !== id) : [...weak, id] });

  return (
    <OnboardingStep
      step={3}
      title="Hangi derslerde zorlanıyorsun?"
      subtitle="İstediklerini seç. Plan bu derslerden başlar; boş bırakabilirsin."
      cta={weak.length ? 'Devam' : 'Hepsini eşit çalışayım'}
      onNext={() => {
        track('onboarding_step', { step: 'subjects', count: weak.length });
        go('/onboarding/plan');
      }}>
      {subjects.map((s) => (
        <ChoiceRow
          key={s.id}
          label={s.title}
          icon={s.icon}
          selected={weak.includes(s.id)}
          onPress={() => toggle(s.id)}
        />
      ))}
    </OnboardingStep>
  );
}
