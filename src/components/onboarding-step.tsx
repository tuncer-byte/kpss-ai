import { Ionicons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PressableScale } from '@/components/pressable-scale';
import { colors, radius, space } from '@/constants/appTheme';
import { back } from '@/lib/nav';

export const ONBOARDING_STEPS = 4;

// Karsilama adimlarinin ortak iskeleti. Gevsek tutuldu: her adimda geri ve "Şimdilik geç" var.
export function OnboardingStep({
  step,
  title,
  subtitle,
  children,
  cta,
  onNext,
  nextDisabled,
  onSkip,
  skipLabel = 'Şimdilik geç',
}: {
  step: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  cta?: string;
  onNext?: () => void;
  nextDisabled?: boolean;
  onSkip?: () => void;
  skipLabel?: string;
}) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.top}>
        {step > 1 ? (
          <Pressable onPress={back} hitSlop={12} accessibilityLabel="Geri" style={styles.back}>
            <Ionicons name="chevron-back" size={26} color={colors.ink} />
          </Pressable>
        ) : (
          <View style={styles.back} />
        )}
        <View style={styles.bar}>
          {Array.from({ length: ONBOARDING_STEPS }, (_, i) => (
            <View key={i} style={[styles.seg, i < step && styles.segOn]} />
          ))}
        </View>
        {onSkip ? (
          <Pressable onPress={onSkip} hitSlop={12}>
            <Text style={styles.skip}>{skipLabel}</Text>
          </Pressable>
        ) : (
          <View style={styles.back} />
        )}
      </View>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.list}>{children}</View>
      </ScrollView>
      {cta ? (
        <View style={styles.footer}>
          <PressableScale
            style={[styles.cta, nextDisabled && styles.ctaOff]}
            onPress={onNext}
            disabled={nextDisabled}
            accessibilityLabel={cta}>
            <Text style={styles.ctaText}>{cta}</Text>
          </PressableScale>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

// Tam genislik secenek satiri. selected: secili vurgu; check: coklu secim isareti.
export function ChoiceRow({
  label,
  hint,
  icon,
  selected,
  onPress,
}: {
  label: string;
  hint?: string;
  icon?: string;
  selected?: boolean;
  onPress: () => void;
}) {
  return (
    <PressableScale
      style={[styles.row, selected && styles.rowOn]}
      onPress={onPress}
      accessibilityLabel={label}>
      {icon ? (
        <View style={[styles.icon, selected && styles.iconOn]}>
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={22}
            color={selected ? colors.onAccent : colors.accent}
          />
        </View>
      ) : null}
      <View style={styles.rowText}>
        <Text style={styles.label}>{label}</Text>
        {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      </View>
      {selected !== undefined ? (
        <Ionicons
          name={selected ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={selected ? colors.accent : colors.lineStrong}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      )}
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  top: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: space.lg, paddingTop: space.sm, gap: space.md },
  back: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  bar: { flex: 1, flexDirection: 'row', gap: space.xs },
  seg: { flex: 1, height: 6, borderRadius: radius.pill, backgroundColor: colors.line },
  segOn: { backgroundColor: colors.accent },
  skip: { fontSize: 14, fontWeight: '700', color: colors.muted },
  content: { padding: space.xl, paddingTop: space.xxl, gap: space.md },
  title: { fontSize: 24, lineHeight: 29, fontWeight: '800', color: colors.ink, letterSpacing: -0.5 },
  subtitle: { fontSize: 14, lineHeight: 21, color: colors.muted },
  list: { gap: space.md, marginTop: space.md },
  footer: { padding: space.xl, paddingTop: space.md },
  cta: {
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaOff: { opacity: 0.4 },
  ctaText: { color: colors.onAccent, fontSize: 15, fontWeight: '800' },
  row: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.lg,
    paddingHorizontal: space.lg,
    paddingVertical: space.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    backgroundColor: colors.bg,
  },
  rowOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  icon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOn: { backgroundColor: colors.accent },
  rowText: { flex: 1, gap: 2 },
  label: { fontSize: 15, fontWeight: '700', color: colors.ink },
  hint: { fontSize: 13, color: colors.muted },
});
