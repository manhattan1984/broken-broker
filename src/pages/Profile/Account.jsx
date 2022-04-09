import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Account = () => {
  const { currentUser, changePassword } = useAuth();
  const [error, setError] = useState("");
  const passwordRef = useRef();

  const handleChangePassword = () => {
    const password = passwordRef.current.value;
    changePassword(password);
  };

  return (
    <>
      <TextField label="password" inputRef={passwordRef} />
      <Button onClick={handleChangePassword}>Change Password</Button>
    </>
  );
};

export default Account;
