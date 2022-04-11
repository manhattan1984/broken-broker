import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import InvestmentPlans from "../../Components/InvestmentPlans";
import LandingAppBar from "../../Components/LandingAppBar";
import { useAuth } from "../../context/AuthContext";
import lists from "../constants/lists";

export const ProfileListItem = ({ date, plan, status, amount, currency }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography variant="body2">{date}</Typography>
            <Typography variant="body2">{plan || currency}</Typography>
            {amount ? <Typography variant="body2">{amount}</Typography> : null}

            <Typography
              variant="body2"
              color={status === "Pending" ? "warning.main" : "success.main"}
            >
              {status}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

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
          <Typography variant="h4" color="primary" gutterBottom>
            Invest Today
          </Typography>
          <Typography variant="body1">
            Let Us Help You Make More Profits. Choose An Investment Plan
          </Typography>
        </InvestmentPlans>
        <Typography variant="h4" color="primary">
          Investments History
        </Typography>

        <Grid container spacing={2}>
          {investmentHistory.map(({ date, investmentPlan, status }, index) => (
            <ProfileListItem
              date={date}
              plan={investmentPlan}
              status={status}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Investments;
