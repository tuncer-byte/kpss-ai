import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PressableScale } from '@/components/pressable-scale';
import { colors, radius, space } from '@/constants/appTheme';
import type { PlanId } from '@/data/types';
import { track } from '@/lib/analytics';
import { back, replace } from '@/lib/nav';
import { BENEFITS, TRIAL_DAYS, getPlans, purchase, restorePurchases } from '@/lib/premium';
import { useRemoteConfig } from '@/lib/remoteConfig';

// PAYWALL (yumusak): her zaman kapatilabilir. Kaynaklar (src): onboarding | lesson | quiz | discover | profile.
// next: kapatinca / satin alinca gidilecek rota (ör. onboarding sonu ilk ders).
export default function PaywallScreen() {
  const { src = 'profile', next } = useLocalSearchParams<{ src?: string; next?: string }>();
  const [plan, setPlan] = useState<PlanId>('yearly');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  useRemoteConfig(); // fiyat guncellenince yeniden ciz
  const PLANS = getPlans();

  useEffect(() => {
    track('paywall_view', { src });
  }, [src]);

  const leave = () => (next ? replace(next) : back());

  const start = async () => {
    setBusy(true);
    track('paywall_cta', { src, plan });
    const r = await purchase(plan);
    setBusy(false);
    if (r.ok) {
      track('purchase_success', { src, plan });
      leave();
    }
  };

  const restore = async () => {
    const r = await restorePurchases();
    setMsg(r.restored ? 'Satın alımların geri yüklendi.' : 'Geri yüklenecek bir satın alım bulunamadı.');
  };

  const selected = PLANS.find((p) => p.id === plan)!;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.top}>
        <Pressable
          onPress={() => {
            track('paywall_close', { src });
            leave();
          }}
          hitSlop={12}
          accessibilityLabel="Kapat">
          <Ionicons name="close" size={26} color={colors.ink} />
        </Pressable>
        <Pressable onPress={restore} hitSlop={10}>
          <Text style={styles.restore}>Geri yükle</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.crown}>
          <Ionicons name="ribbon" size={26} color={colors.onAccent} />
        </View>
        <Text style={styles.title}>KPSS’ye tam erişim</Text>
        <Text style={styles.sub}>Tüm konular, testler ve kişisel planın. İlk {TRIAL_DAYS} gün ücretsiz.</Text>

        <View style={styles.benefits}>
          {BENEFITS.map((b) => (
            <View key={b.title} style={styles.benefit}>
              <View style={styles.bIcon}>
                <Ionicons name={b.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.accent} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.bTitle}>{b.title}</Text>
                <Text style={styles.bText}>{b.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.plans}>
          {PLANS.map((p) => {
            const on = p.id === plan;
            return (
              <Pressable key={p.id} onPress={() => setPlan(p.id)} style={[styles.plan, on && styles.planOn]} accessibilityLabel={p.title}>
                <Ionicons name={on ? 'radio-button-on' : 'radio-button-off'} size={22} color={on ? colors.accent : colors.lineStrong} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.pTitle}>{p.title}</Text>
                  <Text style={styles.pNote}>{p.note}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.pPrice}>{p.price}</Text>
                  <Text style={styles.pNote}>{p.perMonth}</Text>
                </View>
                {p.badge ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{p.badge}</Text>
                  </View>
                ) : null}
              </Pressable>
            );
          })}
        </View>
        {msg ? <Text style={styles.msg}>{msg}</Text> : null}
      </ScrollView>

      <View style={styles.footer}>
        <PressableScale style={[styles.cta, busy && { opacity: 0.6 }]} onPress={start} disabled={busy} accessibilityLabel="Ücretsiz dene">
          <Text style={styles.ctaText}>{TRIAL_DAYS} gün ücretsiz dene</Text>
        </PressableScale>
        <Text style={styles.fine}>
          Deneme sonrası {selected.price}. İstediğin zaman mağaza ayarlarından iptal edebilirsin.
        </Text>
        <Pressable onPress={leave} hitSlop={8} accessibilityLabel="Şimdilik devam et">
          <Text style={styles.later}>Şimdilik ücretsiz devam et</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: space.lg, paddingTop: space.sm },
  restore: { fontSize: 13, fontWeight: '700', color: colors.muted },
  content: { padding: space.xl, gap: space.md },
  crown: { width: 52, height: 52, borderRadius: radius.pill, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, lineHeight: 30, fontWeight: '800', color: colors.ink, letterSpacing: -0.4 },
  sub: { fontSize: 14, lineHeight: 20, color: colors.muted },
  benefits: { gap: space.md, marginTop: space.sm },
  benefit: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  bIcon: { width: 38, height: 38, borderRadius: radius.md, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center' },
  bTitle: { fontSize: 14, fontWeight: '700', color: colors.ink },
  bText: { fontSize: 12, lineHeight: 17, color: colors.muted },
  plans: { gap: space.sm, marginTop: space.md },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.lg,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.lineStrong,
  },
  planOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  pTitle: { fontSize: 15, fontWeight: '700', color: colors.ink },
  pPrice: { fontSize: 15, fontWeight: '800', color: colors.ink },
  pNote: { fontSize: 12, color: colors.muted },
  badge: { position: 'absolute', top: -10, right: 14, backgroundColor: colors.accent, borderRadius: radius.pill, paddingHorizontal: space.sm, paddingVertical: 2 },
  badgeText: { fontSize: 11, fontWeight: '800', color: colors.onAccent },
  msg: { fontSize: 13, color: colors.muted },
  footer: { padding: space.xl, paddingTop: space.sm, gap: space.sm, alignItems: 'stretch' },
  cta: { height: 52, borderRadius: radius.lg, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  ctaText: { color: colors.onAccent, fontSize: 16, fontWeight: '800' },
  fine: { fontSize: 11, lineHeight: 15, color: colors.muted, textAlign: 'center' },
  later: { fontSize: 14, fontWeight: '700', color: colors.muted, textAlign: 'center', paddingVertical: space.xs },
});
