import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  addInvesmentToDatabase,
  addUserToDatabase,
  auth,
  changeUserPassword,
  firebaseLogIn,
  firebaseLogOut,
  firebaseSignUp,
  getUsdBalance,
  getInvestmentsHistroyFromDatabase,
  getWithdrawalsFromDatabase,
  addWithdrawalToDatabase,
} from "../backend/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usdBalance, setUsdBalance] = useState(0);
  const [investmentHistory, setInvestmentHistory] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  async function signUp(email, password) {
    try {
      const userCredential = await firebaseSignUp(email, password);
      await addUserToDatabase(email, password, userCredential.user.uid);
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
      // setUsdBalance(1);

      if (docSnap.exists()) {
        setUsdBalance(docSnap.data().usdBalance);
      } else {
        console.log("Doc Not Found");
      }
    } catch (error) {}
  }

  async function getInvestmentsHistory() {
    try {
      const docSnap = await getInvestmentsHistroyFromDatabase(currentUser.uid);
      if (docSnap.exists()) {
        setInvestmentHistory(docSnap.data().investmentPlans);
      } else {
        console.log("Doc Not Found");
      }
      // log
    } catch (error) {
      console.log(error);
    }
  }

  async function addInvestment(investmentPlan) {
    try {
      await addInvesmentToDatabase(currentUser.uid, investmentPlan);
    } catch (error) {
      console.log(error);
    }
  }

  async function getWithdrawals() {
    try {
      const docSnap = await getWithdrawalsFromDatabase(currentUser.uid);
      if (docSnap.exists()) {
        setWithdrawals(docSnap.data().withdrawals);
      } else {
        console.log("Doc Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addWithdrawal(amount, currency, address) {
    try {
      await addWithdrawalToDatabase(currentUser.uid, amount, currency, address);
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
    addInvestment,
    getInvestmentsHistory,
    investmentHistory,
    withdrawals,
    getWithdrawals,
    addWithdrawal,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
