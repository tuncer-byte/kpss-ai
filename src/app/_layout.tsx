import { Stack } from 'expo-router';
import { Text, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/constants/appTheme';
import { track } from '@/lib/analytics';
import { loadRemoteConfig } from '@/lib/remoteConfig';
import { startSync } from '@/lib/sync';
import { useUserState } from '@/lib/store';

SplashScreen.preventAutoHideAsync().catch(() => {});

// Sistem yazi boyutu cok buyutulmus cihazlarda arayuz bozulmasin: olcegi sinirla.
const T = Text as unknown as { defaultProps?: Record<string, unknown> };
T.defaultProps = { ...T.defaultProps, maxFontSizeMultiplier: 1.15 };
const TI = TextInput as unknown as { defaultProps?: Record<string, unknown> };
TI.defaultProps = { ...TI.defaultProps, maxFontSizeMultiplier: 1.15 };

// Kok navigator: onboarding bitmeden yalniz "onboarding" grubu, bitince sekmeler acilir.
// Detay ekranlari (subject, lesson, watch, quiz, paywall, account) bu Stack'e push edilir.
export default function RootLayout() {
  const { profile } = useUserState();

  useEffect(() => {
    track('app_open');
    startSync();
    void loadRemoteConfig();
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.bg }}>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }}>
          <Stack.Protected guard={profile.onboarded}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="subject/[id]" />
            <Stack.Screen name="lesson/[id]" />
            <Stack.Screen name="quiz/[id]" options={{ gestureEnabled: false }} />
            <Stack.Screen name="account" />
            <Stack.Screen name="paywall" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
            <Stack.Screen name="watch/[id]" options={{ animation: 'slide_from_bottom', gestureEnabled: false }} />
          </Stack.Protected>
          <Stack.Protected guard={!profile.onboarded}>
            <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
          </Stack.Protected>
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
