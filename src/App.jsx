import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PremiumConstruction = lazy(() => import("./PremiumConstruction"));
const ConstructionEstimate = lazy(() =>
  import("./components/ConstructionEstimate")
);
const BookingPage = lazy(() => import("./components/BookingPage.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PremiumConstruction />} />
          <Route path="/estimate" element={<ConstructionEstimate />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
