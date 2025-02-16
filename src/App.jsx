import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Support from "./pages/Support.";
import Footer from "./layouts/Footer";
import LegalFooter from "./layouts/LegalFooter";
import Register from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import History from "./pages/History";
import Profile from "./pages/Profile";
import SupportPage from "./pages/SupportPage";
import FundingComponent from "./layouts/FundingComponent";
import Verify from "./pages/Verify";

function App() {
  const location = useLocation(); // Get the current location/route

  // Check if the current route starts with /dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {/* Conditionally render Nav if not on a dashboard route */}
      {!isDashboardRoute && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}
        <Route path="/dashboard/deposit" element={<Deposit />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/support" element={<SupportPage />} />
        <Route path="/dashboard/deposit/fund" element={<FundingComponent />} />
        <Route path="/dashboard/profile/verify" element={<Verify />} />

        {/* Catch-all route for non-existent paths */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>404 - Page Not Found</h1>
              <p>This page does not exist. Please go back.</p>
              <button onClick={() => window.history.back()}>Go Back</button>
            </div>
          }
        />
      </Routes>

      {/* Conditionally render Footer and LegalFooter if not on a dashboard route */}
      {!isDashboardRoute && (
        <>
          <Footer />
          <LegalFooter />
        </>
      )}
    </div>
  );
}

export default App;
