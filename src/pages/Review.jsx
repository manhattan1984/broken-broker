import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import LandingAppBar from "../Components/LandingAppBar";
import lists from "./constants/lists";

const Review = () => {
  return (
    <>
    <LandingAppBar pages={lists.profilePages}/>
      <Container maxWidth="md" align="center">
        <Card>
          <CardContent>
            <Box>
              <Typography variant="h5">
                {" "}
                Your Account Is Under Review.
              </Typography>
              <Typography variant="body1">
                Please Contact Support To Complete The Sign Up Process
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Review;
