import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  auth,
  firebaseLogIn,
  firebaseLogOut,
  firebaseSignUp,
} from "../backend/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signUp(email, password) {
    try {
      const userCredential = await firebaseSignUp(email, password);
      setCurrentUser(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  }

  async function logIn(email, password) {
    try {
      const userCredential = await firebaseLogIn(email, password);
      setCurrentUser(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  }

  async function logOut() {
    try {
      await firebaseLogOut();
    } catch {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
