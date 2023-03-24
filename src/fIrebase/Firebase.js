import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4DuUWL3ipmf6qrDS0rvHrCIWqwH4VjNM",
  authDomain: "write-ai-c37f9.firebaseapp.com",
  projectId: "write-ai-c37f9",
  storageBucket: "write-ai-c37f9.appspot.com",
  messagingSenderId: "466487938050",
  appId: "1:466487938050:web:3cbe663b467772ec94eb1b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

