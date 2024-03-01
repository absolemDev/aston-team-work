import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUXbKMdGsTyAl2bHKGaweBdGuZsXE0u7s",
  authDomain: "aston-team-work.firebaseapp.com",
  projectId: "aston-team-work",
  storageBucket: "aston-team-work.appspot.com",
  messagingSenderId: "741383940639",
  appId: "1:741383940639:web:8e83e5b4b056c96dc5032a",
};

const app = initializeApp(firebaseConfig);

export const signUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
