import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Profile/Account";
import About from "./pages/About";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import Deposit from "./pages/Profile/Deposit";
import Landing from "./pages/Landing";
import Home from "./pages/Profile/Home";
import Withdraw from "./pages/Profile/Withdraw";
import Investments from "./pages/Profile/Investments";

import { useEffect } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import Review from "./pages/Review";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./styles/styles";
import { CssBaseline } from "@mui/material";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function App() {
  useScript("//code.tidio.co/zjedkxp16go8bymhrxcj6o1szjidkffp.js");
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
        <AuthProvider>
          <BrowserRouter>
            <TickerTape colorTheme="dark"/>

            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />

              <Route path="about" element={<About />} />
              <Route element={<ProtectedRoute />}>
                <Route path="account" element={<Account />} />
                <Route path="home" element={<Home />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="investments" element={<Investments />} />
              </Route>
              <Route path="review" element={<Review />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
