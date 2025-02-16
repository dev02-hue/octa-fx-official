import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ Import storage

const firebaseConfig = {
  apiKey: "AIzaSyDXEOoSGZmmlpWjaSx_WDsnHaEovHsAaK8",
  authDomain: "octafx-c1e94.firebaseapp.com",
  projectId: "octafx-c1e94",
  storageBucket: "octafx-c1e94.firebasestorage.app",
  messagingSenderId: "444124396440",
  appId: "1:444124396440:web:4bf278c8e8d0ce801089ed",
  measurementId: "G-XDNT8XBL16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Social providers
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default app;
