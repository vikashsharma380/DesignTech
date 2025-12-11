import React, { useState } from "react";
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
    font-family: 'Inter', sans-serif;
  }
`;

const PremiumConstruction = () => {
  const [showEstimate, setShowEstimate] = useState(false);

  // 🌙 THEME SYSTEM
  const [theme, setTheme] = useState("dark"); // default dark
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
        background: isDark ? "#0a0a0a" : "#ffffff",
        color: isDark ? "white" : "black",
        cursor: `url(${jcbCursor}) 5 5, auto`,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <style>{globalStyles}</style>

      {/* NAVBAR */}
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
        onEstimateClick={handleEstimateClick}
      />

      {/* Back Button - Only for Estimate page */}
      {showEstimate && (
        <button
          onClick={handleBackClick}
          style={{
            position: "fixed",
            top: "90px",
            right: "2rem",
            zIndex: 1999,
            padding: "0.7rem 1.5rem",
            background: isDark
              ? "rgba(212, 175, 55, 0.15)"
              : "rgba(212, 175, 55, 0.25)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            color: "#d4af37",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "0.9rem",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease",
          }}
        >
          ← Back to Home
        </button>
      )}

      {/* CONDITIONAL PAGE */}
      {showEstimate ? (
        <ConstructionEstimate theme={theme} />
      ) : (
        <>
          <Hero theme={theme} />
          <Services theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
          <WhyChooseUs theme={theme} />
          <Testimonials theme={theme} />
          <CTA theme={theme} />
        </>
      )}

      <Footer theme={theme} />
    </div>
  );
};

export default PremiumConstruction;
