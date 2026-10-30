// Firebase baslatma (JS SDK: Expo Go + web'de calisir). Anahtarlar .env icinde (EXPO_PUBLIC_*).
// Not: Firebase web API anahtari gizli degildir; guvenlik firestore.rules ile saglanir.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, initializeAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { Platform } from 'react-native';

const config = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// .env yoksa uygulama yine calisir (yerel mod): bulut ozellikleri sessizce kapanir.
export const firebaseEnabled = Boolean(config.apiKey && config.projectId && config.appId);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (firebaseEnabled) {
  try {
    app = getApps().length ? getApp() : initializeApp(config);
    if (Platform.OS === 'web') {
      auth = getAuth(app);
    } else {
      // getReactNativePersistence yalnizca RN paketinde var; tipler tarayici surumunu gosterir.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { getReactNativePersistence } = require('firebase/auth') as { getReactNativePersistence: (s: unknown) => never };
      try {
        auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
      } catch {
        auth = getAuth(app); // hot reload: zaten baslatilmis
      }
    }
    db = getFirestore(app);
  } catch (e) {
    console.warn('[firebase] baslatilamadi', e);
    app = null;
    auth = null;
    db = null;
  }
}

export { app, auth, db };
