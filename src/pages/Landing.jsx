import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CountUp from "react-countup";
import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import LandingAppBar from "../Components/LandingAppBar";
import "../styles/styles.css";
import ReactVisibilitySensor from "react-visibility-sensor";
import Logo from "../img/logo.svg";
import lists from "./constants/lists";
import Investments from "./Profile/Investments";
import { NavLink } from "react-router-dom";
import InvestmentPlans from "../Components/InvestmentPlans";
// import InvestmentPlans from "../Components/InvestmentPlans";

const Hero = () => {
  return (
    <Container align="center">
      {/* <Particles options={options} init={initialize} /> */}
      <Typography variant="h3">
        Crypto Currency Investment At Its Best
      </Typography>
      <Typography variant="body1">
        A reliable and professional company where you can invest your money and
        we will utilize it and offer you the best returns of your investment.
      </Typography>
      <Button color="primary" variant="contained">
        SIGN UP
      </Button>
    </Container>
  );
};

const Features = () => {
  const features = [
    {
      title: "Reliable",
      body: "A huge number of people trust us. We constantly work on improving our system and level of our security to minimize any potential risks.",
    },
    {
      title: "Comodo SSL",
      body: "Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate.",
    },
    {
      title: "Registered Company",
      body: "We are a certified company which conducts absolutely legal activities in the legal field. We are certified and safe.",
    },
    {
      title: "Quick Withdrawal",
      body: "Our all retreats are treated spontaneously once requested. Our withdrawal has high maximum limits",
    },
    {
      title: "Strong Protection",
      body: "Customer security is a big priority for us. We constantly work on improving our system and level of our security to minimize any potential risks.",
    },
    {
      title: "Protected Website",
      body: "We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.",
    },
  ];

  const FeatureItem = ({ title, body }) => {
    return (
      <Grid item xs={12} md={6} lg={3} textAlign="left">
        <Box>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Typography>{body}</Typography>
      </Grid>
    );
  };
  return (
    <Container align="center">
      <Box>
        <Typography variant="h4">Our Features</Typography>
        <Typography variant="body1">
          We will utilize your money providing a source of high income while
          minimizing the any possibility of risk in a very secure way.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {features.map(({ title, body }, index) => (
          <FeatureItem title={title} body={body} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

const Statistics = () => {
  const statistics = [
    {
      amount: 1_000_000,
      title: "Total Deposited",
    },
    {
      amount: 56_000_000,
      title: "Total Withdrawn",
    },
    {
      amount: 340_443,
      title: "Total Users",
    },
  ];

  const StatisticsItem = ({ amount, title }) => {
    return (
      <Grid item xs={12} md={6} lg={3}>
        <Box>
          <Typography>{amount}</Typography>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Container>
      <Typography variant="h5">Our Statistics</Typography>
      <Typography variant="body1">
        Take a look at our user statistics
      </Typography>
      {statistics.map(({ amount, title }, index) => (
        <StatisticsItem amount={amount} title={title} key={index} />
      ))}
    </Container>
  );
};

const Profit = () => {
  const paths = [
    {
      title: "Make Plan",
      body: " Make a decision of the plan you like and think is the most profitable. ",
    },
    {
      title: "Create Account",
      body: " Create a user profile for yourself using the register option. ",
    },
    {
      title: "Choose Plan",
      body: " Select the plan from our list of your liking and get started. ",
    },
    {
      title: "Get Profit",
      body: " Wait for us to utilize the money and return you a good profit. ",
    },
  ];

  const ProfitItem = ({ title, body }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Container align="center">
      <Typography variant="h4">How To Get Profit</Typography>
      <Typography variant="subtitle1">
        We utilize your money and provide a source of high income.
      </Typography>
      <Grid container spacing={2}>
        {paths.map(({ title, body }, index) => (
          <ProfitItem title={title} body={body} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

const ProfitCalculator = () => {
  return (
    <Container align="center">
      <Typography variant="h4">Profit Calculator</Typography>
      <Typography variant="body1">
        You must know the calculation before investing in any plan, so you never
        make mistakes. Check the calculation and you will get as our calculator
        says.
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth label="Plan" />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth label="Invest Amount" />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth label="Profit" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

const Reasons = () => {
  const reasons = [
    {
      title: "Global",
      body: " We are an international company having client from different countries around the world. ",
    },
    {
      title: "Crypto",
      body: " Our platform supports all types of cryptocurrency having an easy investment system. ",
    },
    {
      title: "Reliable",
      body: " We are very reliable as a huge number of people trust us. We conduct safe and secure services. ",
    },
    {
      title: "Certified",
      body: " We are a certified company doing legal business in the legal field. We operate international business. ",
    },
    {
      title: "Secure",
      body: " We constantly work on improving our system and level of our security to minimize any potential risks. ",
    },
    {
      title: "Profitable",
      body: " Our professional traders will utilize your money making sure to get a good profit for you. ",
    },
  ];

  const ReasonItem = ({ title, body }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <Container align="center">
      <Typography variant="h4">Reason To Choose Us</Typography>
      <Typography variant="body1">
        Our goal is to utilize our investors money and provide a source of high
        income for them while minimizing the any possibility of risk.
      </Typography>

      <Grid container spacing={2}>
        {reasons.map(({ title, body }, index) => (
          <ReasonItem title={title} body={body} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

const Footer = () => {
  const links = [{ name: "Home" }, { name: "Privacy" }, { name: "Rules" }];
  return (
    <>
      <Container align="center" maxWidth={"md"}>
        <Grid container spacing={2}>
          {links.map(({ name }, index) => (
            <Grid item xs={12} md={4} key={index}>
              {name}
            </Grid>
          ))}
        </Grid>

        <Typography variant="caption">
          Join the team of our holding company and take part in investment
          construction
        </Typography>
      </Container>
      <Typography variant="caption">
        © 2022 Sky Crypto Trades. Powered by Moon Trades Limited C86883 - All
        rights reserved
      </Typography>
    </>
  );
};

const Landing = () => {
  return (
    <>
      <LandingAppBar pages={lists.homePages} />
      <Container>
        <Hero />
        <Features />
        <Statistics />
        <Profit />
        <ProfitCalculator />
        <InvestmentPlans>
          <Typography variant="h4">Best Investment Plans</Typography>
          <Typography variant="body1">
            Take a look at our best investment plans where you will get the best
            profits.
          </Typography>
        </InvestmentPlans>
        <Reasons />
        {/* Join Us */}
        <Container align="center">
          <Typography variant="h4">Join With Us</Typography>
          <Typography variant="body1">
            Want to be a part of our community? Join us today.
          </Typography>
          <Button variant="contained">SIGN UP</Button>
        </Container>
        {/* End Join Us */}
        <Footer />
      </Container>
    </>
  );
};

export default Landing;
