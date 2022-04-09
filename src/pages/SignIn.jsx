import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SignUpButton, SignUpTextField } from "../styles/styles";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch (error) {
      setError("Failed to sign in");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <Container>
      <Paper>
        <Box m>
          <Typography align="center" variant="h3">
            Sign In
          </Typography>
          {error && <Typography color="red">{error}</Typography>}
          <SignUpTextField label="E-Mail" inputRef={emailRef} />
          <SignUpTextField
            label="Password"
            type={"password"}
            inputRef={passwordRef}
          />

          <SignUpButton
            fullWidth
            disabled={loading}
            variant="contained"
            onClick={handleSubmit}
          >
            Sign In
          </SignUpButton>
          <SignUpButton fullWidth component={NavLink} to="/signup">
            Sign Up
          </SignUpButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
