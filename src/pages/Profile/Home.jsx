import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { currentUser, logOut, getBalances, usdBalance } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogOut() {
    setError("");

    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError("Failed to log out");
      console.log(error);
    }
  }

  useEffect(() => {
    getBalances();
  }, []);
  return (
    <>
      <Typography variant="h6">Welcome {currentUser.email}</Typography>
      <Typography>Your Current Balance is ${usdBalance}</Typography>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
};

export default Home;
