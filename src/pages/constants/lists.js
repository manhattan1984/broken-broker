const profilePages = [
  { page: "Home", link: "/home" },
  { page: "Deposit", link: "/deposit" },
  { page: "Withdraw", link: "/withdraw" },
  { page: "Investments", link: "/investments" },
  // { page: "Account", link: "/account" },
  // { page: "Log Out", link: "/" },
];

const homePages = [
  { page: "Sign Up", link: "/signup" },
  { page: "Sign In", link: "/signin" },
];

const addresses = [
  { name: "BTC", address: "some random text" },
  { name: "ETH", address: "some random text" },
  { name: "USDT", address: "some random text" },
];

const investmentPlans = [
  {
    title: "Expert ",
    percent: 40,
    time: "Monthly / 1 Time",
    min: "$100,000",
    max: "$500,000,000",
  },
  {
    title: "Pro ",
    percent: 25,
    time: "20 Days / 1 Time",
    min: "$10,000",
    max: "$100,000",
  },
  {
    title: "Advanced ",
    percent: 15,
    time: "10 Days / 1 Time",
    min: "$5,000",
    max: "$10,000",
  },
  {
    title: "Amateur ",
    percent: 10,
    time: "3 Days / 1 Time",
    min: "$1,000",
    max: "$5,000",
  },
  {
    title: "Beginner ",
    percent: 5,
    time: "Daily / 1 Time",
    min: "$100",
    max: "$1,000",
  },
];

export default {
  profilePages,
  addresses,
  homePages,
  investmentPlans,
};
