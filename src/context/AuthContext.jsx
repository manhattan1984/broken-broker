import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  addUserToDatabase,
  auth,
  changeUserPassword,
  firebaseLogIn,
  firebaseLogOut,
  firebaseSignUp,
  getUsdBalance,
} from "../backend/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  // const [first, setfirst] = useState(second)
  const [loading, setLoading] = useState(true);
  const [usdBalance, setUsdBalance] = useState(0);

  async function signUp(email, password) {
    try {
      const userCredential = await firebaseSignUp(email, password);
      setCurrentUser(userCredential.user);
      await addUserToDatabase(email, password, currentUser.uid);
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

  async function changePassword(newPassword) {
    try {
      await changeUserPassword(currentUser.uid, newPassword);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBalances() {
    try {
      const docSnap = await getUsdBalance(currentUser.uid);
      if (docSnap.exists()) {
        setUsdBalance(docSnap.data().usdBalance);
      } else {
        console.log("Doc Not Found");
      }
    } catch (error) {}
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
    getBalances,
    usdBalance,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
