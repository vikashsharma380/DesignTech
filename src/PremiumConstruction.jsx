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
import BookingPage from "./components/BookingPage";
import jcbCursor from "./assets/jcb1.png";

const PremiumConstruction = () => {
  const [showEstimate, setShowEstimate] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Smooth scroll + exit estimate or booking page
  const scrollToFromNavbar = (id) => {
    if (showEstimate || showBooking) {
      setShowEstimate(false);
      setShowBooking(false);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        background: isDark ? "#0a0a0a" : "#ffffff",
        color: isDark ? "white" : "black",
        cursor: `url(${jcbCursor}) 5 5, auto`,
        transition: "0.3s",
      }}
    >
      {/* NAVBAR */}
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
        onEstimateClick={() => setShowEstimate(true)}
        onBookingClick={() => setShowBooking(true)}
        onNavClick={scrollToFromNavbar}
      />

      {/* CONDITIONAL RENDERING */}
      {showBooking ? (
        <BookingPage theme={theme} />
      ) : showEstimate ? (
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

      {/* WHATSAPP FLOAT BUTTON - ONLY HOME PAGE */}
      {!showEstimate && !showBooking && (
        <a
          href="https://wa.me/916204203526"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-[3000] flex items-center justify-center w-16 h-16 transition-all bg-green-500 rounded-full shadow-2xl bottom-6 right-6 hover:scale-110"
          style={{
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
      )}

      <Footer theme={theme} />
    </div>
  );
};

export default PremiumConstruction;
