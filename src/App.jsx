import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import ProfileDrawer from "./Components/ProfileDrawer";
import Deposit from "./pages/Profile/Deposit";
import Landing from "./pages/Landing";
import Home from "./pages/Profile/Home";
import Withdraw from "./pages/Profile/Withdraw";
import Investments from "./pages/Profile/Investments";
import Reinvest from "./pages/Profile/Reinvest";
import InvestmentsHistory from "./pages/Profile/InvestmentsHistory";
import TradeCenter from "./pages/Profile/TradeCenter";
import TradeHistory from "./pages/Profile/TradeHistory";

const routes = [
  { path: "home", element: <Home /> },
  { path: "deposit", element: <Deposit /> },
  { path: "withdraw", element: <Withdraw /> },
  { path: "investments", element: <Investments /> },
  { path: "reinvest", element: <Reinvest /> },
  { path: "investments-history", element: <InvestmentsHistory /> },
  { path: "trade-center", element: <TradeCenter /> },
  { path: "trade-history", element: <TradeHistory /> },
];

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ProfileDrawer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />

            <Route path="about" element={<About />} />
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<Home />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="investments" element={<Investments />} />
              <Route path="reinvest" element={<Reinvest />} />
              <Route
                path="investments-history"
                element={<InvestmentsHistory />}
              />
              <Route path="trade-center" element={<TradeCenter />} />
              <Route path="trade-history" element={<TradeHistory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
