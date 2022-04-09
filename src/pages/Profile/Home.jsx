import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const BalanceItem = ({ currency, conversion }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card>
        <CardContent>
          <Typography>{currency}</Typography>
          <Typography color="primary" variant="h2">
            {conversion}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Home = () => {
  const { currentUser, logOut, getBalances, usdBalance, eth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const balances = [
    {
      currency: "USD",
      conversion: (usd) => {
        return usd * 1;
      },
    },
    {
      currency: "ETH",
      conversion: (usd) => {
        return usd * 0.1;
      },
    },
    {
      currency: "BTC",
      conversion: (usd) => {
        return usd * 0.01;
      },
    },
  ];

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
      <Box display={"flex"} justifyContent="space-between">
        <Typography variant="h6">Welcome {currentUser.email}</Typography>
        <Button onClick={handleLogOut}>Log Out</Button>
      </Box>
      <Grid container spacing={1}>
        {balances.map(({ currency, conversion }, index) => (
          <BalanceItem
            currency={currency}
            conversion={conversion(usdBalance)}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
