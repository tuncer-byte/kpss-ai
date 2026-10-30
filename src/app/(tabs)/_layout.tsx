import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { colors } from '@/constants/appTheme';

// 5 sekme: Kesfet (dikey video akisi) / Dersler / Notlarim / Tekrar / Profil. Karma deneme yok; testler ders ekranindan.
// Profil sekme degil; her basligin sagindaki simgeden acilir.
type IconName = keyof typeof Ionicons.glyphMap;

function tab(title: string, icon: IconName) {
  return {
    title,
    tabBarIcon: ({ color, size }: { color: string; size: number }) => <Ionicons name={icon} size={size} color={color} />,
  };
}

export default function TabsLayout() {
  return (
    <Tabs
      screenListeners={{
        tabPress: () => {
          if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.bg, borderTopColor: colors.line, borderTopWidth: 1 },
        tabBarLabelStyle: { fontSize: 11 },
      }}>
      <Tabs.Screen name="index" options={tab('Keşfet', 'play-circle-outline')} />
      <Tabs.Screen name="dersler" options={tab('Dersler', 'book-outline')} />
      <Tabs.Screen name="notlar" options={tab('Notlarım', 'bookmark-outline')} />
      <Tabs.Screen name="tekrar" options={tab('Tekrar', 'repeat-outline')} />
      <Tabs.Screen name="profil" options={tab('Profil', 'person-outline')} />
    </Tabs>
  );
}
