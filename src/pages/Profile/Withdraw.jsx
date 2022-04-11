import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LandingAppBar from "../../Components/LandingAppBar";
import { useAuth } from "../../context/AuthContext";
import lists from "../constants/lists";
import { ProfileListItem } from "./Investments";

const WithdrawalItem = ({ currency, date, amount, address, status }) => {
  return (
    <Box display="flex" justifyContent={"space-between"} alignItems="center">
      <Typography>{date}</Typography>
      <Typography>{currency}</Typography>
      <Typography>{amount}</Typography>
      <Typography>{address}</Typography>
      <Typography>{status}</Typography>
    </Box>
  );
};

const Withdraw = () => {
  const { withdrawals, getWithdrawals, addWithdrawal } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const currencyRef = useRef();
  const amountRef = useRef();
  const addressRef = useRef();

  const handleWithdrawal = () => {
    addWithdrawal(
      amountRef.current.value,
      currencyRef.current.value,
      addressRef.current.value
    );

    enqueueSnackbar("Withdraw Request Sent", { variant: "success" });
    navigate("/home");
  };

  useEffect(() => {
    getWithdrawals();
  }, []);
  return (
    <>
      <LandingAppBar pages={lists.profilePages} />
      <Container>
        <Typography variant="h3" color="primary">
          Withdraw
        </Typography>
        <Typography variant="body1">
          Enter The Amount And The Address To Withdraw To
        </Typography>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  select
                  label="Crypto"
                  helperText="Select Crypto"
                  inputRef={currencyRef}
                  // value={currencyRef.current.value}
                >
                  {lists.addresses.map(({ name }, index) => (
                    <MenuItem key={index} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  label="Amount"
                  helperText="Enter Amount"
                  inputRef={amountRef}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  fullWidth
                  inputRef={addressRef}
                  label="Wallet Address"
                  helperText="Enter Crypto Wallet Address"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" onClick={handleWithdrawal}>
                  Withdraw
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box textAlign={"center"}>
          <Typography variant="h4" color="primary">
            Withdrawal History
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {withdrawals.map(
            ({ currency, amount, date, address, status }, index) => (
              <ProfileListItem
                currency={currency}
                amount={amount}
                date={date}
                address={address}
                status={status}
                key={index}
              />
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Withdraw;
