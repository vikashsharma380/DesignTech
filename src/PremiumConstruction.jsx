import React, { useState } from "react";

// Import All Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ConstructionEstimate from "./components/ConstructionEstimate";
import jcbCursor from "./assets/jcb1.png";

// Import Google Fonts
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: #0a0a0a;
    font-family: 'Inter', sans-serif;
  }
`;

const PremiumConstruction = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

  const handleEstimateClick = () => {
    setShowEstimate(true);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setShowEstimate(false);
  };

  return (
    <div
  style={{
    background: "#0a0a0a",
    color: "white",
    cursor: `url(${jcbCursor}) 5 5, auto`,
  }}
>

      {/* Inject Fonts + Global Styles */}
      <style>{globalStyles}</style>

      {/* Modal */}
      {/* <HouseModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}

      {/* Navbar with callbacks */}
      <Navbar
        openModal={() => setShowModal(true)}
        onEstimateClick={handleEstimateClick}
      />

      {/* Back Button - Only show when Estimate page is open */}
      {showEstimate && (
        <button
          onClick={handleBackClick}
          style={{
            position: "fixed",
            top: "90px",
            right: "2rem",
            zIndex: 1999,
            padding: "0.7rem 1.5rem",
            background: "rgba(212, 175, 55, 0.15)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            color: "#d4af37",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "0.9rem",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(212, 175, 55, 0.25)";
            e.target.style.boxShadow = "0 4px 12px rgba(212, 175, 55, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(212, 175, 55, 0.15)";
            e.target.style.boxShadow = "none";
          }}
        >
          ← Back to Home
        </button>
      )}

      {/* Conditional Rendering */}
      {showEstimate ? (
        <ConstructionEstimate />
      ) : (
        <>
          {/* Sections */}
          <Hero />
          <Services />
          <Projects />
          <Contact />
          <WhyChooseUs />
          <Testimonials />
          <CTA />
        </>
      )}

      {/* Footer - Always visible */}
      <Footer />
    </div>
  );
};

export default PremiumConstruction;
