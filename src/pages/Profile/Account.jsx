import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingAppBar from "../../Components/LandingAppBar";
import { useAuth } from "../../context/AuthContext";
import lists from "../constants/lists";

const Account = () => {
  const { currentUser, changePassword } = useAuth();
  const [error, setError] = useState("");
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChangePassword = () => {
    const password = passwordRef.current.value;
    changePassword(password);
  };

  return (
    <>
      <LandingAppBar pages={lists.profilePages} />
      <Container align="center" maxWidth={"xs"}>
        <Card>
          <CardContent>
            <Typography variant="h4" color="primary">
              My Account
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" inputRef={passwordRef} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  inputRef={confirmPasswordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleChangePassword}>Change Password</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Account;
