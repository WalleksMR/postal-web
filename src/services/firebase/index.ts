import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: `${process.env.FIREBASE_APIKEY}`,
  authDomain: `${process.env.FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.FIREBASE_APPID}`,
});

const db = getFirestore();
export { db };
