import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Architecture from "./pages/Architecture.jsx";
import Luxury from "./pages/Luxury.jsx";
import Interior from "./pages/Interior.jsx";
import Turnkey from "./pages/Turnkey.jsx";

const PremiumConstruction = lazy(() => import("./PremiumConstruction"));
const ConstructionEstimate = lazy(() =>
  import("./components/ConstructionEstimate")
);
const BookingPage = lazy(() => import("./components/BookingPage.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function AppLayout() {
  const navigate = useNavigate();

  // 🔥 SAME THEME STATE AS HOMEPAGE
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // 🔥 SAME NAVBAR HANDLERS
  const onNavClick = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const onBookingClick = () => navigate("/booking");
  const onEstimateClick = () => navigate("/estimate");

  return (
    <>
      {/* ✅ FULLY WORKING NAVBAR */}
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
        onNavClick={onNavClick}
        onBookingClick={onBookingClick}
        onEstimateClick={onEstimateClick}
      />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PremiumConstruction />} />
          <Route path="/estimate" element={<ConstructionEstimate />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* SERVICES */}
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/luxury" element={<Luxury />} />
          <Route path="/services/interior" element={<Interior />} />
          <Route path="/services/turnkey" element={<Turnkey />} />
        </Routes>
      </Suspense>

      {/* ✅ SAME FOOTER EVERYWHERE */}
      <Footer theme={theme} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
