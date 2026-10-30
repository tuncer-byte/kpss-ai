import { Stack } from 'expo-router';

// Karsilama: sinav turu -> sure ve hedef -> zayif dersler -> plan. Hepsi atlanabilir.
export default function OnboardingLayout() {
  return <Stack screenOptions={{ headerShown: false, gestureEnabled: true }} />;
}
