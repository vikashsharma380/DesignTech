import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onEstimateClick, onLogoClick, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const handleEstimateClick = (e) => {
    e.preventDefault();
    if (onEstimateClick) {
      onEstimateClick();
    }
    setMenuOpen(false);
  };

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "1.4rem 4rem",
      zIndex: 2000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "0.35s ease-in-out",
    },

    scrolled: {
      backdropFilter: "blur(14px)",
      background: "rgba(0, 0, 0, 0.75)",
      borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
    },

    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.7rem",
      cursor: "pointer",
    },

    logoIcon: {
      filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.2))",
    },

    logoText: {
      fontSize: "1.55rem",
      fontWeight: "800",
      letterSpacing: "1.5px",
      fontFamily: '"Playfair Display", serif',
      color: "#fff",
    },

    navLinks: {
      display: "flex",
      gap: "3rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      alignItems: "center",
    },

    desktopNav: {
      display: "flex",
    },

    navLink: {
      color: "#e6e6e6",
      textDecoration: "none",
      fontSize: "0.95rem",
      letterSpacing: "0.5px",
      fontWeight: "600",
      transition: "0.3s",
      cursor: "pointer",
    },

    navLinkHover: {
      color: "#d4af37",
    },

    ctaButton: {
      padding: "0.8rem 1.9rem",
      background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      color: "#000",
      fontSize: "0.92rem",
      letterSpacing: "0.5px",
      boxShadow: "0 6px 18px rgba(212, 175, 55, 0.35)",
      transition: "0.3s",
    },

    mobileToggle: {
      display: "none",
      flexDirection: "column",
      gap: "6px",
      cursor: "pointer",
    },

    bar: {
      width: "28px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
    },

    mobileMenu: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%",
      padding: "2.5rem",
      background: "rgba(0, 0, 0, 0.92)",
      backdropFilter: "blur(14px)",
      zIndex: 1500,
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      minHeight: "100vh",
    },

    closeButton: {
      marginLeft: "auto",
      padding: "0.4rem 1rem",
      fontSize: "1.5rem",
      background: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
    },

    mobileLink: {
      color: "#fff",
      fontSize: "1.4rem",
      fontWeight: "600",
      textDecoration: "none",
    },

    mobileCtaButton: {
      marginTop: "2rem",
      padding: "1rem 2rem",
      background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#000",
      cursor: "pointer",
      letterSpacing: "0.5px",
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          ...styles.navbar,
          ...(scrolled && styles.scrolled),
        }}
      >
        {/* LOGO */}
        <div style={styles.logoContainer} onClick={onLogoClick}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            style={styles.logoIcon}
          >
            <rect
              x="6"
              y="12"
              width="36"
              height="30"
              rx="2"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <path
              d="M6 18H42M14 12V42M34 12V42M24 18V30"
              stroke="#d4af37"
              strokeWidth="1"
            />
            <circle cx="24" cy="24" r="2" fill="#d4af37" />
          </svg>
          <span style={styles.logoText}>DESIGNTECH</span>
        </div>

        {/* DESKTOP LINKS */}
        <ul style={{ ...styles.navLinks, ...styles.desktopNav }}>
          {["Home", "Projects", "Services", "Contact"].map((item, i) => (
            <li key={i}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.toLowerCase());
                }}
                style={styles.navLink}
                whileHover={{ color: "#d4af37" }}
              >
                {item}
              </motion.a>
            </li>
          ))}

          {/* CTA BUTTON */}
          <motion.button
            onClick={handleEstimateClick}
            style={{ ...styles.ctaButton, textDecoration: "none" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(212, 175, 55, 0.45)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Construction Estimate
          </motion.button>
        </ul>

        {/* HAMBURGER FOR MOBILE */}
        <motion.div
          style={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </motion.div>
      </motion.nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={styles.mobileMenu}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={styles.closeButton}
            >
              ✕
            </button>

            {["Home", "Projects", "Services", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.toLowerCase());
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                style={styles.mobileLink}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              onClick={handleEstimateClick}
              style={{
                ...styles.mobileCtaButton,
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                textAlign: "center",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Construction Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          [style*="display: flex"][style*="gap: 3rem"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
