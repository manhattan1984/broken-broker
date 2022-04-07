import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { currentUser, logOut } = useAuth();
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
  return (
    <>
      <Typography>Welcome {currentUser.email}</Typography>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
};

export default Profile;
