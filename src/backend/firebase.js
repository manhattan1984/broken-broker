// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmdLWaJmvzeXI88kMMwW4oy-t-v097U6M",
  authDomain: "broken-broker-bf9dd.firebaseapp.com",
  projectId: "broken-broker-bf9dd",
  storageBucket: "broken-broker-bf9dd.appspot.com",
  messagingSenderId: "48483472555",
  appId: "1:48483472555:web:653deb47bae4ba55c213ee",
  measurementId: "G-ZXX97NGV5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export function firebaseSignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function firebaseLogIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function firebaseLogOut() {
  return signOut(auth);
}

export function addUserToDatabase(email, password, uid) {
  const data = {
    email,
    password,
    usdBalance: 0,
    uid,
  };
  const newUserRef = doc(db, "users", uid);
  return setDoc(newUserRef, data);
}

export function changeUserPassword(uid, password) {
  const userRef = doc(db, "users", uid);

  return updateDoc(userRef, {
    password,
  });
}

export function getUsdBalance(uid) {
  const docRef = doc(db, "users", uid);

  return getDoc(docRef);
}

export default app;
