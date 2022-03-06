import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpuX4bbeZERchZ6qtdSWa10lfmFJMgYyE",
  authDomain: "flashcard232.firebaseapp.com",
  projectId: "flashcard232",
  storageBucket: "flashcard232.appspot.com",
  messagingSenderId: "357527951701",
  appId: "1:357527951701:web:c06016e060f477c506f7dc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
