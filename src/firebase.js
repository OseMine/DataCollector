import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Konfiguration aus Umgebungsvariablen holen
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);

// Exportiere die Firestore-Datenbankinstanz
const db = getFirestore(app);

export { db };
