import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ConstructionEstimate from "./components/ConstructionEstimate";
import jcbCursor from "./assets/jcb1.png";

// Google Fonts
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; scroll-behavior: smooth; }
  body { margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
`;

const PremiumConstruction = () => {
  const [showEstimate, setShowEstimate] = useState(false);
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleEstimateClick = () => {
    setShowEstimate(true);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => setShowEstimate(false);

  // 🔥 NEW: Navigation that works from BOTH pages
  const scrollToFromNavbar = (id) => {
    if (showEstimate) {
      setShowEstimate(false); // exit estimate screen
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
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
        onNavClick={scrollToFromNavbar} // 🔥 pass function here
      />

      {/* CONDITIONAL PAGE SWITCH */}
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
        </>
      )}

      <Footer theme={theme} />
    </div>
  );
};

export default PremiumConstruction;
