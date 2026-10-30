// TEMA: uygulamanin TEK renk/olcu kaynagi. Renk degistirmek icin yalnizca
// ACTIVE_PALETTE'i degistir ya da `palettes` icine yeni palet ekle; ekranlar `colors`
// tokenlarini kullandigi icin hicbir ekrana dokunmak gerekmez.
// Kural: acik tema, yuvarlak koseler, golge yok (gerekirse elevation.card).

export type Palette = {
  bg: string; // ana zemin
  surface: string; // ikincil yuzey / hafif kart
  ink: string; // ana metin
  muted: string; // ikincil metin
  line: string; // ince ayrac
  lineStrong: string; // belirgin kenarlik
  accent: string; // tek guclu vurgu (CTA, ileri, secili)
  accentDark: string; // basili hali
  accentSoft: string; // vurgunun soluk zemini
  secondary: string; // ikincil vurgu (bilgi, konu notu)
  secondarySoft: string;
  success: string;
  warning: string;
  danger: string;
  onAccent: string; // vurgu uzerindeki metin
  // Video / sinema modu (dikey izleme ekranlari her zaman koyu zemin kullanir)
  cinema: string;
  cinemaInk: string;
  // Tekrar (FSRS) karar renkleri
  again: string;
  hard: string;
  good: string;
  easy: string;
};

const base = {
  bg: '#FFFFFF',
  surface: '#F7F7F7',
  ink: '#222222',
  muted: '#717171',
  line: '#EBEBEB',
  lineStrong: '#DDDDDD',
  success: '#008A05',
  warning: '#FFB400',
  danger: '#C13515',
  onAccent: '#FFFFFF',
  cinema: '#14121A',
  cinemaInk: '#FFFFFF',
  again: '#EF4444',
  hard: '#F59E0B',
  good: '#10B981',
} as const;

export const palettes = {
  // Ingilizce uygulamadaki kimlik: mercan + teal
  rose: {
    ...base,
    accent: '#FF385C',
    accentDark: '#E00B41',
    accentSoft: '#FFE8EC',
    secondary: '#008489',
    secondarySoft: '#E6F4F4',
    easy: '#008489',
  },
  // Sakin, "calisma" hissi veren lacivert/indigo
  indigo: {
    ...base,
    accent: '#4F46E5',
    accentDark: '#3730A3',
    accentSoft: '#EEF0FF',
    secondary: '#0E9F6E',
    secondarySoft: '#E5F6EF',
    easy: '#0E9F6E',
  },
  // Turkuaz/yesil
  emerald: {
    ...base,
    accent: '#059669',
    accentDark: '#047857',
    accentSoft: '#E3F6EE',
    secondary: '#F59E0B',
    secondarySoft: '#FEF3DC',
    easy: '#059669',
  },
} as const satisfies Record<string, Palette>;

export type PaletteName = keyof typeof palettes;

// >>> Rengi buradan degistir <<<
export const ACTIVE_PALETTE: PaletteName = 'rose';

export const colors: Palette = palettes[ACTIVE_PALETTE];

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 8, md: 12, lg: 16, xl: 24, pill: 9999 } as const;

export const type = {
  h1: { fontSize: 24, lineHeight: 29, fontWeight: '800', letterSpacing: -0.5 },
  h2: { fontSize: 19, lineHeight: 24, fontWeight: '800', letterSpacing: -0.3 },
  h3: { fontSize: 15, lineHeight: 19, fontWeight: '700' },
  body: { fontSize: 14, lineHeight: 21, fontWeight: '400' },
  small: { fontSize: 13, lineHeight: 18, fontWeight: '500' },
} as const;

export const elevation = {
  none: {},
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
} as const;
