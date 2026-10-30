import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, space } from '@/constants/appTheme';

// Tum sekmelerde ORTAK baslik. Sabit yukseklik + sabit font: sekme gecisinde
// header yapisi kaymaz. Uygulama adi burada GECMEZ; sadece bolum adi + alt metin.
// Profil artik sekme; baslikta profil simgesi yok (hideProfile=false ile acilabilir).
export function ScreenHeader({
  title,
  subtitle,
  icon,
  right,
  hideProfile = true,
}: {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  right?: ReactNode;
  hideProfile?: boolean;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {icon ? <Ionicons name={icon} size={26} color={colors.accent} style={styles.mark} /> : null}
        <View style={styles.titles}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.sub} numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {right || !hideProfile ? (
        <View style={styles.right}>
          {right}
          {!hideProfile ? (
            <Pressable onPress={() => router.push('/profil')} hitSlop={8} accessibilityLabel="Profil">
              <Ionicons name="person-circle-outline" size={26} color={colors.muted} />
            </Pressable>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  // Sabit yukseklik: ikon olsun olmasin, alt metin olsun olmasin her sekmede ayni.
  row: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: space.sm, flex: 1 },
  mark: {},
  titles: { flex: 1 },
  title: { fontSize: 19, fontWeight: '800', color: colors.ink, letterSpacing: -0.4 },
  sub: { fontSize: 12, color: colors.muted, marginTop: 2 },
  right: { flexDirection: 'row', alignItems: 'center', gap: space.md },
});
