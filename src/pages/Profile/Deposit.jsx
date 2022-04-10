import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LandingAppBar from "../../Components/LandingAppBar";
import lists from "../constants/lists";

const Deposit = () => {
  const AddressItem = ({ name, address }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h4" color="primary">
              {name}
            </Typography>
            <Typography variant="body1">{address}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <LandingAppBar pages={lists.profilePages} />
      <Container align="center">
        <Typography variant="h3">Deposit</Typography>
        <Typography variant="body1">
          Transfer USD Worth Any Of These Cryptocurrencies, Then Contact
          Customer Support
        </Typography>
        <Grid container spacing={2}>
          {lists.addresses.map(({ name, address }, index) => (
            <AddressItem name={name} address={address} key={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Deposit;
