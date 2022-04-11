import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import CountUp from "react-countup";
import React, { useRef, useState } from "react";
import LandingAppBar from "../Components/LandingAppBar";
import ReactVisibilitySensor from "react-visibility-sensor";
import lists from "./constants/lists";
import { NavLink } from "react-router-dom";
import InvestmentPlans from "../Components/InvestmentPlans";
import { Player } from "@lottiefiles/react-lottie-player";
import FeatureIcon from "../assets/lottie/features-icon.json";
import DownArrow from "../assets/lottie/down-arrow.json";
import PublicIcon from "@mui/icons-material/Public";
import {
  AttachMoney,
  CurrencyBitcoin,
  EnhancedEncryption,
  HandshakeRounded,
  VerifiedUser,
} from "@mui/icons-material";
import "../styles/styles.css";

const Hero = () => {
  return (
    <Container align="center">
      {/* <Particles options={options} init={initialize} /> */}
      <Typography variant="h3" gutterBottom color="primary">
        Crypto Currency Investment At Its Best
      </Typography>
      <Typography variant="body1">
        A reliable and professional company where you can invest your money and
        we will utilize it and offer you the best returns of your investment.
      </Typography>
      <Button
        color="secondary"
        variant="outlined"
        sx={{ my: 1 }}
        component={NavLink}
        to="/signup"
      >
        Get Started
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
        <Box display="flex">
          <Player
            autoplay
            loop
            src={FeatureIcon}
            style={{ height: "30px", width: "30px" }}
          />
          <Typography ml={1} variant="h5" color="text.secondary">
            {title}
          </Typography>
        </Box>
        <Typography>{body}</Typography>
      </Grid>
    );
  };
  return (
    <Container align="center">
      <Box>
        <Typography variant="h4" gutterBottom color="primary">
          Our Features
        </Typography>
        <Typography variant="body1">
          We will utilize your money providing a source of high income while
          minimizing the any possibility of risk in a very secure way.
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2}>
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
      amount: 10_000_000,
      title: "Total Deposited",
    },
    {
      amount: 56_000_000,
      title: "Total Withdrawn",
    },
    {
      amount: 340_443,
      title: "Total Users",
      isUsers: true,
    },
  ];

  const StatisticsItem = ({ amount, title, isUsers }) => {
    return (
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <CountUp
              end={amount}
              redraw={true}
              separator=","
              prefix={isUsers ? "" : "$"}
            >
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayCall>
                  <Typography
                    variant="h3"
                    ref={countUpRef}
                    color="text.secondary"
                  >
                    {amount}
                  </Typography>
                </ReactVisibilitySensor>
              )}
            </CountUp>

            <Typography variant="subtitle1" color="secondary">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Container sx={{ my: 2 }} align="center">
      <Typography variant="h4" gutterBottom color={"primary"}>
        Our Statistics
      </Typography>
      <Typography variant="body1">
        Take a look at our user statistics
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ my: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        {statistics.map(({ amount, title, isUsers }, index) => (
          <StatisticsItem
            amount={amount}
            title={title}
            isUsers={isUsers}
            key={index}
          />
        ))}
      </Grid>
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

  const ProfitItem = ({ title, body, showArrow }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" color="secondary">
              {title}
            </Typography>
            <Typography variant="body1">{body}</Typography>
          </CardContent>
        </Card>
        {showArrow ? (
          <Player src={DownArrow} style={{ height: "30px" }} autoplay loop />
        ) : null}
      </Grid>
    );
  };

  return (
    <Container align="center">
      <Typography variant="h4" color="primary">
        How To Get Profit
      </Typography>
      <Typography variant="subtitle1">
        We utilize your money and provide a source of high income.
      </Typography>
      <Grid container spacing={2}>
        {paths.map(({ title, body }, index) => (
          <ProfitItem
            title={title}
            body={body}
            key={index}
            showArrow={paths.length !== index + 1}
          />
        ))}
      </Grid>
    </Container>
  );
};

const ProfitCalculator = () => {
  const [profit, setProfit] = useState(0);
  const [percent, setPercent] = useState(0);

  const planRef = useRef();
  const amountRef = useRef();

  function calculateProfit() {
    const amount = +amountRef.current.value;
    setProfit(amount + (percent / 100) * amount);
  }
  return (
    <Container align="center" sx={{ mt: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Profit Calculator
      </Typography>
      <Typography variant="body1">
        You must know the calculation before investing in any plan, so you never
        make mistakes. Check the calculation and you will get as our calculator
        says.
      </Typography>
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                label="Plan"
                select
                color="secondary"
                inputRef={planRef}
                onChange={calculateProfit}
              >
                {lists.investmentPlans.map(({ title, percent }, index) => (
                  <MenuItem
                    onClick={() => {
                      setPercent(percent);
                    }}
                    key={index}
                    value={title}
                  >
                    {title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                label="Invest Amount"
                type={"number"}
                onChange={calculateProfit}
                inputRef={amountRef}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography>Your Profit:</Typography>
              <Typography variant="h3" color="secondary">
                {profit}
              </Typography>
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
      icon: PublicIcon,
    },
    {
      title: "Crypto",
      body: " Our platform supports all types of cryptocurrency having an easy investment system. ",
      icon: CurrencyBitcoin,
    },
    {
      title: "Reliable",
      body: " We are very reliable as a huge number of people trust us. We conduct safe and secure services. ",
      icon: HandshakeRounded,
    },
    {
      title: "Certified",
      body: " We are a certified company doing legal business in the legal field. We operate international business. ",
      icon: VerifiedUser,
    },
    {
      title: "Secure",
      body: " We constantly work on improving our system and level of our security to minimize any potential risks. ",
      icon: EnhancedEncryption,
    },
    {
      title: "Profitable",
      body: " Our professional traders will utilize your money making sure to get a good profit for you. ",
      icon: AttachMoney,
    },
  ];

  const ReasonItem = ({ title, body, icon }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <SvgIcon component={icon} fontSize="large" />
            <Typography variant="h6" color="secondary">
              {title}
            </Typography>
            <Typography variant="body1">{body}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <Container align="center" sx={{ my: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Why To Choose Us
      </Typography>
      <Typography variant="body1">
        Our goal is to utilize our investors money and provide a source of high
        income for them while minimizing the any possibility of risk.
      </Typography>

      <Grid container spacing={2} mt={1}>
        {reasons.map(({ title, body, icon }, index) => (
          <ReasonItem title={title} icon={icon} body={body} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

const Footer = () => {
  const links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Privacy Policy", link: "/" },
  ];
  return (
    <>
      <Container align="center" maxWidth={"md"}>
        {/* <Grid container spacing={2}>
          {links.map(({ name, link }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Button component={NavLink} to={link}>
                {name}
              </Button>
            </Grid>
          ))}
        </Grid> */}

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
          <Typography variant="h4" color="primary">
            Best Investment Plans
          </Typography>
          <Typography variant="body1">
            Take a look at our best investment plans where you will get the best
            profits.
          </Typography>
        </InvestmentPlans>
        <Reasons />
        {/* Join Us */}
        <Container align="center">
          <Typography variant="h4" gutterBottom>
            Join With Us
          </Typography>
          <Typography variant="body1">
            Want to be a part of our community? Join us today.
          </Typography>
          <Button
            sx={{ my: 2 }}
            variant="contained"
            to="/signup"
            component={NavLink}
          >
            Sign Up
          </Button>
        </Container>
        {/* End Join Us */}
        <Footer />
      </Container>
    </>
  );
};

export default Landing;
