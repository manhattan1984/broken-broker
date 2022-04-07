import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SignUpButton, SignUpTextField } from "../styles/styles";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/profile");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <Container>
      <Paper>
        <Box m>
          <Typography align="center" variant="h3">
            Sign Up
          </Typography>
          {error && <Typography color="red">{error}</Typography>}
          <SignUpTextField label="E-Mail" inputRef={emailRef} />
          <SignUpTextField
            label="Password"
            type={"password"}
            inputRef={passwordRef}
          />
          <SignUpTextField
            label="Confirm Password"
            type={"password"}
            inputRef={confirmPasswordRef}
          />
          <SignUpButton
            fullWidth
            disabled={loading}
            onClick={handleSubmit}
            variant="contained"
          >
            Sign Up
          </SignUpButton>
          <SignUpButton fullWidth component={NavLink} to="/signin">
            Sign In
          </SignUpButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
