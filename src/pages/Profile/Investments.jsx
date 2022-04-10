import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import InvestmentPlans from "../../Components/InvestmentPlans";
import LandingAppBar from "../../Components/LandingAppBar";
import { useAuth } from "../../context/AuthContext";
import lists from "../constants/lists";

const Investments = () => {
  const { getInvestmentsHistory, investmentHistory } = useAuth();
  useEffect(() => {
    console.log("Hi");
    getInvestmentsHistory();
  }, []);
  return (
    <>
      <LandingAppBar pages={lists.profilePages} />
      <Container align="center">
        <InvestmentPlans>
          <Typography variant="h4">Invest Today</Typography>
          <Typography variant="body1">
            Let Us Help You Make More Profits. Choose An Investment Plan
          </Typography>
        </InvestmentPlans>
        <Typography variant="h4">Investments History</Typography>
        {investmentHistory.map(({ date, investmentPlan, status }, index) => (
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography>{date}</Typography>

            <Typography>{investmentPlan}</Typography>

            <Typography>{status}</Typography>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Investments;
