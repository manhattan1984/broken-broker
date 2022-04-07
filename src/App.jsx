import HomeAppBar from "./Components/HomeAppBar";
import Home from "./pages/Home";
import { TickerTape } from "react-ts-tradingview-widgets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <HomeAppBar />
          <TickerTape colorTheme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
