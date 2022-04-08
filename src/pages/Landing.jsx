import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import LandingAppBar from "../Components/LandingAppBar";

const Landing = () => {
  return (
    <>
      <LandingAppBar />
      <TickerTape colorTheme="dark" />
    </>
  );
};

export default Landing;
