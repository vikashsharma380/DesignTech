import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PremiumConstruction = lazy(() => import("./PremiumConstruction"));
const ConstructionEstimate = lazy(() =>
  import("./components/ConstructionEstimate")
);
const BookingPage = lazy(() => import("./components/BookingPage.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio")); // ⭐ added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremiumConstruction />} />
        <Route path="/estimate" element={<ConstructionEstimate />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/portfolio" element={<Portfolio />} /> {/* ⭐ added */}
      </Routes>
    </Router>
  );
}

export default App;
