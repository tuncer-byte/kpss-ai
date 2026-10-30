# KPSS AI

Dikey AI video dersleri, konu notu, tekrar (FSRS) ve konu/ders testleri odakli KPSS calisma uygulamasi.
Expo SDK 55 + expo-router. Ingilizce uygulamanin (langapp) tasarim dilini kullanir.

## Calistirma
    npm install --legacy-peer-deps
    npx expo start          # w = web onizleme
    node node_modules/typescript/bin/tsc --noEmit

## Yapi
- `src/constants/appTheme.ts`  TEK tema kaynagi. `ACTIVE_PALETTE` ile renk seti degisir (rose / indigo / emerald).
- `src/constants/brand.ts`     Uygulama adi ve slogan.
- `src/data/content/`          Ders icerigi (ders > konu > ders > sahne > soru). Simdilik yerel/mock.
- `src/lib/store.ts`           Kullanici verisi (profil, ilerleme, not, tekrar kartlari, sonuclar).
- `src/lib/storage.ts`         Depolama soyutlamasi (MMKV / localStorage). Firebase adapter buraya baglanir.
- `src/app/onboarding/`        Karsilama (4 adim, hepsi atlanabilir).
- `src/app/(tabs)/`            Kesfet (ders secici + dikey akis), Dersler (arama, plan), Notlarim, Tekrar. Karma deneme yok; testler Ders ekranindan.
- `src/app/watch/[id].tsx`     Dikey sinema player (sahne sahne, "Not al").

## Firebase'e gecis (sonra)
1. Icerik: `src/data/content/index.ts` yerine Firestore'dan okuyan servis.
2. Kullanici verisi: `store.ts` icindeki `commit()` sonrasinda Firestore'a senkron + giris (Auth).
3. Analitik: `src/lib/analytics.ts` icini Firebase Analytics'e bagla.
4. Video: derse `videoUrl` verildiginde `watch/[id].tsx` icinde expo-video ile oynat.


## Icerik kapsami (OSYM GY-GK dagilimi)

Turkce 30, Matematik 30 (Geometri dahil), Tarih 27, Cografya 18, Vatandaslik 9, Guncel 6 = 120 soru.
Ogretmenlik izi ek olarak Egitim Bilimleri icerir. Icerik `src/data/content/*.ts`; yazim kisayolu `src/data/build.ts`.
Sorular ozgundur (OSYM tarzinda yazildi), cikmis soru kopyasi degildir. Sik sirasi build.ts icinde tohumlu karistirilir
(sayisal/sirali sikli sorular ve "Hepsi" tipi sikli sorular haric).

Guncel Bilgiler yalnizca kalici bilgi icerir (kurumlar, onemli gunler, kuruluslar, bilim/kultur mirasi).
Anlik gelismeler icin Firebase uzerinden guncellenen bir "Bu ay" akisi eklenecek.
Alan bilgisi (OABT branslari) kapsam disidir.

## Uyelik ve paywall

Tek kural dosyasi: `src/lib/premium.ts` (ucretsiz kapsam, planlar, fiyatlar, satin alma). Fiyatlar yer tutucudur.
- Ucretsiz: her dersin ilk 2 videosu (konu notu + sorulariyla), tekrar kartlari, notlar.
- Premium: kalan tum videolar, konu ve ders testleri, plan.
- Paywall (`src/app/paywall.tsx`) her zaman kapatilabilir. Gosterildigi yerler: onboarding sonu, kilitli ders/test, Kesfet ustundeki "Premium", Profil.
- RevenueCat baglama: `purchase()`, `restorePurchases()` ve `isPremium()` icini SDK ile doldur; ekranlara dokunmak gerekmez.
- Hesap: `src/app/account.tsx` taslak. Firebase Auth baglaninca misafir (anonim) hesap Apple/Google/e-posta ile baglanir.


## Firebase (kurulu)

Proje: `kpss-ai-57b7c` (Spark / ücretsiz). Web uygulaması kayıtlı; anahtarlar `.env` içinde (git'e girmez, şablon: `.env.example`).

- **Auth:** Anonim (açılışta otomatik misafir) + E-posta/Şifre. Kaydol = misafir hesabı e-postaya bağlanır (ilerleme korunur).
- **Firestore:** konum `eur3`. `users/{uid}` = ilerleme yedeği (son yazan kazanır, premium hariç), `config/app` = uzaktan ayar
  (`freeLessonsPerSubject`, `yearlyPrice`, `monthlyPrice`; Console'dan değişir, güncelleme gerekmez). Kurallar: `firestore.rules`.
- **Analytics:** web'de çalışır (`lib/analytics.ts`). Native Analytics/Crashlytics/FCM için `@react-native-firebase` + dev build gerekir (Expo Go'da çalışmaz).
- Kurallar değişirse: `npx firebase-tools deploy --only firestore:rules` veya Console > Firestore > Rules.

### Henüz manuel (hesap/ücret gerektirir)

- **Apple ile giriş:** Apple Developer hesabı (99 $/yıl) + `expo-apple-authentication` + dev build + Firebase'de Apple sağlayıcısı.
- **Google ile giriş:** OAuth client ID'leri + `@react-native-google-signin/google-signin` + dev build + Firebase'de Google sağlayıcısı.
- **Gerçek satın alma:** RevenueCat (store ürünleri) → `lib/premium.ts` içindeki `purchase/restorePurchases/isPremium`.
- **iOS/Android Firebase uygulamaları:** native paket gerekince Console'da `com.tuncerbyte.kpssai` ile kaydedip `google-services.json` / `GoogleService-Info.plist` ekle.

## Çalıştırma

```
npm install --legacy-peer-deps
npx expo start -c
```
