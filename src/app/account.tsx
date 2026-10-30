import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { Screen } from '@/components/screen';
import { colors, radius, space } from '@/constants/appTheme';
import { authError, registerEmail, resetPassword, signInEmail, signOut, useAuth } from '@/lib/auth';
import { back } from '@/lib/nav';
import { resetAll } from '@/lib/store';
import { syncNow, useSyncStatus } from '@/lib/sync';

// HESAP: acilista misafir (anonim) hesap var. E-posta ile "kaydol" misafir hesabini baglar (ilerleme korunur);
// "giris yap" baska cihazdaki hesaba girer ve bulut verisini indirir.
// Apple / Google: Apple Developer hesabi + dev build gerektirir (README > Hesap girisleri).
export default function AccountScreen() {
  const a = useAuth();
  const sync = useSyncStatus();
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const submit = async () => {
    setErr('');
    setMsg('');
    if (!email.includes('@')) return setErr('Geçerli bir e-posta yaz.');
    if (password.length < 6) return setErr('Şifre en az 6 karakter olmalı.');
    setBusy(true);
    try {
      if (mode === 'register') {
        await registerEmail(email, password);
        setMsg('Hesabın oluşturuldu. İlerlemen artık bulutta.');
        void syncNow();
      } else {
        await signInEmail(email, password);
        setMsg('Giriş yapıldı. Verilerin yükleniyor.');
      }
    } catch (e) {
      setErr(authError(e));
    } finally {
      setBusy(false);
    }
  };

  const forgot = async () => {
    setErr('');
    setMsg('');
    if (!email.includes('@')) return setErr('Önce e-posta adresini yaz.');
    try {
      await resetPassword(email);
      setMsg('Şifre sıfırlama bağlantısı e-postana gönderildi.');
    } catch (e) {
      setErr(authError(e));
    }
  };

  const logout = async () => {
    await signOut();
    resetAll(); // paylasilan cihazda onceki kullanicinin verisi kalmasin
    setMsg('Çıkış yapıldı.');
  };

  const syncLabel =
    sync.status === 'ok' ? 'Eşitlendi' : sync.status === 'syncing' ? 'Eşitleniyor…' : sync.status === 'error' ? 'Eşitlenemedi (çevrimdışı olabilir)' : 'Kapalı';

  return (
    <Screen>
      <Pressable onPress={back} hitSlop={12} style={styles.back} accessibilityLabel="Geri">
        <Ionicons name="chevron-back" size={26} color={colors.ink} />
      </Pressable>

      {!a.enabled ? (
        <>
          <Text style={styles.title}>Hesap</Text>
          <Text style={styles.sub}>Bulut bağlantısı yapılandırılmamış. Uygulama yerel modda çalışıyor; ilerlemen bu cihazda saklanır.</Text>
        </>
      ) : a.uid && !a.isAnonymous ? (
        <>
          <Text style={styles.title}>Hesabın</Text>
          <View style={styles.card}>
            <Ionicons name="person-circle-outline" size={30} color={colors.accent} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{a.email}</Text>
              <Text style={styles.sub}>Bulut yedeği: {syncLabel}</Text>
            </View>
          </View>
          <PressableScale style={styles.btn} onPress={() => void syncNow()} accessibilityLabel="Şimdi eşitle">
            <Ionicons name="sync-outline" size={20} color={colors.ink} />
            <Text style={styles.btnText}>Şimdi eşitle</Text>
          </PressableScale>
          <PressableScale style={styles.btn} onPress={logout} accessibilityLabel="Çıkış yap">
            <Ionicons name="log-out-outline" size={20} color={colors.ink} />
            <Text style={styles.btnText}>Çıkış yap</Text>
          </PressableScale>
        </>
      ) : (
        <>
          <Text style={styles.title}>{mode === 'register' ? 'Hesabını oluştur' : 'Giriş yap'}</Text>
          <Text style={styles.sub}>
            {mode === 'register'
              ? 'İlerlemeni, notlarını ve tekrar kartlarını bulutta yedekle; başka cihazdan devam et. İstersen misafir kalabilirsin.'
              : 'Başka cihazdaki hesabına gir; ilerlemen bu cihaza iner.'}
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E-posta"
            placeholderTextColor={colors.muted}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
            accessibilityLabel="E-posta"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Şifre (en az 6 karakter)"
            placeholderTextColor={colors.muted}
            secureTextEntry
            autoCapitalize="none"
            textContentType={mode === 'register' ? 'newPassword' : 'password'}
            style={styles.input}
            accessibilityLabel="Şifre"
            onSubmitEditing={submit}
          />
          <PressableScale style={[styles.cta, busy && { opacity: 0.6 }]} onPress={submit} disabled={busy} accessibilityLabel={mode === 'register' ? 'Kaydol' : 'Giriş yap'}>
            <Text style={styles.ctaText}>{busy ? 'Bekle…' : mode === 'register' ? 'Kaydol' : 'Giriş yap'}</Text>
          </PressableScale>
          {mode === 'login' ? (
            <Pressable onPress={forgot} hitSlop={8} accessibilityLabel="Şifremi unuttum">
              <Text style={styles.link}>Şifremi unuttum</Text>
            </Pressable>
          ) : null}
          <Pressable
            onPress={() => {
              setMode(mode === 'register' ? 'login' : 'register');
              setErr('');
              setMsg('');
            }}
            hitSlop={8}
            accessibilityLabel="Mod değiştir">
            <Text style={styles.link}>{mode === 'register' ? 'Zaten hesabım var · Giriş yap' : 'Hesabım yok · Kaydol'}</Text>
          </Pressable>

          <Text style={styles.soon}>Apple ve Google ile giriş mağaza sürümünde eklenecek.</Text>
        </>
      )}

      {err ? <Text style={styles.err}>{err}</Text> : null}
      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: { width: 32, height: 32, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: colors.ink, letterSpacing: -0.4 },
  sub: { fontSize: 14, lineHeight: 20, color: colors.muted },
  input: {
    height: 52,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    paddingHorizontal: space.lg,
    fontSize: 15,
    color: colors.ink,
  },
  cta: { height: 52, borderRadius: radius.lg, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  ctaText: { color: colors.onAccent, fontSize: 16, fontWeight: '800' },
  link: { fontSize: 14, fontWeight: '700', color: colors.accent, textAlign: 'center', paddingVertical: space.xs },
  btn: {
    height: 52,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
  },
  btnText: { fontSize: 15, fontWeight: '700', color: colors.ink },
  card: { flexDirection: 'row', alignItems: 'center', gap: space.md, padding: space.lg, borderRadius: radius.lg, backgroundColor: colors.accentSoft },
  cardTitle: { fontSize: 15, fontWeight: '800', color: colors.ink },
  soon: { fontSize: 12, color: colors.muted, textAlign: 'center' },
  err: { fontSize: 13, color: colors.danger },
  msg: { fontSize: 13, color: colors.muted },
});
