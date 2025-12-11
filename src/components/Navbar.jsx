import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({
  onEstimateClick,
  onLogoClick,
  onNavClick,
  theme,
  onThemeToggle,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isDark = theme === "dark";

  // responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
    e?.preventDefault?.();
    if (onEstimateClick) {
      onEstimateClick();
    } else {
      // fallback: scroll to contact section if exists
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e?.preventDefault?.();
    if (onLogoClick) {
      onLogoClick();
    } else {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleNav = (item) => {
    // item is like "home", "projects", etc.
    if (onNavClick) {
      onNavClick(item);
    } else {
      const el = document.getElementById(item);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else {
        // if no element, update hash for default browser behavior
        try {
          window.history.replaceState(null, "", `#${item}`);
        } catch {}
      }
    }
    setMenuOpen(false);
  };

  /* ---------------------- STYLES ---------------------- */

  const colors = {
    bg: isDark ? "#000" : "#ffffff",
    text: isDark ? "#fff" : "#000",
    link: isDark ? "#e6e6e6" : "#222",
    bar: isDark ? "#fff" : "#000",
    mobileBg: isDark ? "rgba(0,0,0,0.92)" : "rgba(255, 255, 255, 0.95)",
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
      background: "transparent",
      transition: "0.35s ease-in-out",
    },

    scrolled: {
      backdropFilter: "blur(14px)",
      background: isDark ? "rgba(0, 0, 0, 0.75)" : "rgba(255,255,255,0.75)",
      borderBottom: "1px solid rgba(212,175,55,0.25)",
    },

    logoText: {
      fontSize: "1.55rem",
      fontWeight: "800",
      fontFamily: '"Playfair Display", serif',
      color: colors.text,
    },

    navLink: {
      color: colors.link,
      textDecoration: "none",
      fontSize: "0.95rem",
      letterSpacing: "0.5px",
      fontWeight: "600",
      transition: "0.3s",
      cursor: "pointer",
    },

    bar: {
      width: "28px",
      height: "3px",
      background: colors.bar,
      borderRadius: "5px",
    },

    toggleBtn: {
      padding: "0.6rem 1.2rem",
      borderRadius: "8px",
      background: "rgba(212,175,55,0.15)",
      border: "1px solid rgba(212,175,55,0.4)",
      color: colors.text,
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  const navItems = ["Home", "Projects", "Services", "Contact"];

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
          paddingLeft: isMobile ? "1.2rem" : "4rem",
          paddingRight: isMobile ? "1.2rem" : "4rem",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={handleLogoClick}
          aria-label="Go to home"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
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

        {/* DESKTOP NAV (hidden on mobile) */}
        {!isMobile && (
          <ul
            style={{
              display: "flex",
              gap: "3rem",
              listStyle: "none",
              alignItems: "center",
              margin: 0,
            }}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.toLowerCase());
                  }}
                  style={styles.navLink}
                  whileHover={{}}
                >
                  {item}
                </motion.a>
              </li>
            ))}

            {/* THEME TOGGLE */}
            <motion.button
              onClick={() => {
                if (onThemeToggle) onThemeToggle();
                else {
                  // fallback: toggle a body data-theme attribute
                  const next = isDark ? "light" : "dark";
                  document.documentElement.setAttribute("data-theme", next);
                }
              }}
              style={styles.toggleBtn}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 15px rgba(212,175,55,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={handleEstimateClick}
              style={{
                padding: "0.8rem 1.9rem",
                background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
                color: "#000",
                fontSize: "0.92rem",
                letterSpacing: "0.5px",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Construction Estimate
            </motion.button>
          </ul>
        )}

        {/* MOBILE TOGGLE (visible only on mobile) */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setMenuOpen(true);
            }}
          >
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        )}
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              padding: "2.5rem",
              background: colors.mobileBg,
              minHeight: "100vh",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              zIndex: 1500,
            }}
          >
            {/* Close Btn */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.5rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: colors.text,
                marginLeft: "auto",
              }}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* MOBILE LINKS */}
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.toLowerCase());
                  setMenuOpen(false);
                }}
                style={{
                  color: colors.text,
                  fontSize: "1.4rem",
                  fontWeight: "600",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={() => {
                if (onThemeToggle) onThemeToggle();
                else {
                  const next = isDark ? "light" : "dark";
                  document.documentElement.setAttribute("data-theme", next);
                }
                setMenuOpen(false);
              }}
              style={{
                padding: "1rem 2rem",
                background: "rgba(212,175,55,0.2)",
                borderRadius: "8px",
                border: "1px solid rgba(212,175,55,0.4)",
                fontSize: "1.1rem",
                fontWeight: "700",
                color: colors.text,
                cursor: "pointer",
                width: "100%",
              }}
            >
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </motion.button>

            {/* Mobile CTA */}
            <motion.button
              onClick={() => {
                handleEstimateClick();
                setMenuOpen(false);
              }}
              style={{
                marginTop: "2rem",
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
                borderRadius: "8px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#000",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Get Construction Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
