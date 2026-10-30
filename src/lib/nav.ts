import { router, type Href } from 'expo-router';

// Dinamik rotalar icin tek giris noktasi (typedRoutes uretilmeden de derlenir).
export const go = (path: string) => router.push(path as Href);
export const replace = (path: string) => router.replace(path as Href);
export const back = () => (router.canGoBack() ? router.back() : router.replace('/' as Href));
