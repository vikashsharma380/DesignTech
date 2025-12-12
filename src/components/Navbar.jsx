import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = ({
  theme,
  onThemeToggle,
  onEstimateClick,
  onNavClick,
  onBookingClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <motion.nav className="fixed top-0 w-full z-[2000] transition-all backdrop-blur-lg bg-white border-b border-yellow-600/20">
        <div className="flex items-center justify-between px-4 py-2 sm:px-8 lg:px-16">
          {/* LOGO */}
          {/* LOGO */}
          <div
            onClick={() => onNavClick("home")}
            className="flex items-center gap-2 pl-10 cursor-pointer select-none"
          >
            <img
              src={logo}
              alt="Logo"
              className="object-contain w-20 h-20 scale-125"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="items-center hidden gap-10 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="text-sm font-semibold text-black hover:text-yellow-500"
              >
                {item.label}
              </button>
            ))}

            {/* BOOKING */}
            <button
              onClick={onBookingClick}
              className={`text-sm font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              } hover:text-yellow-500`}
            >
              Booking
            </button>

            {/* ESTIMATE */}
            <button
              onClick={onEstimateClick}
              className="px-6 py-3 font-bold text-black rounded-lg shadow-md bg-gradient-to-r from-yellow-600 to-yellow-300"
            >
              Get Estimate
            </button>

            {/* THEME */}
            <button
              onClick={onThemeToggle}
              className="px-4 py-2 text-sm font-semibold text-yellow-200 border rounded-lg border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-600/20"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* MOBILE — HAMBURGER / X BUTTON */}
          <button
            className="flex items-center justify-center lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // X ICON
              <span
                className={`text-4xl font-bold ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                ✕
              </span>
            ) : (
              // HAMBURGER ICON
              <div className="flex flex-col gap-1.5">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`block w-7 h-[3px] ${
                      isDark ? "bg-white" : "bg-black"
                    }`}
                  />
                ))}
              </div>
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed top-0 left-0 w-full h-full z-[1500] ${
              isDark ? "bg-black/95" : "bg-white/95"
            }`}
            onClick={() => setMenuOpen(false)} // close when clicking outside
          >
            {/* MENU BOX */}
            <div
              onClick={(e) => e.stopPropagation()} // prevent closing when click inside
              className="w-full h-full p-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 mt-20">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMenuOpen(false);
                      onNavClick(item.id);
                    }}
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-black"
                    } hover:text-yellow-500`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* BOOKING */}
                <button
                  onClick={() => {
                    onBookingClick();
                    setMenuOpen(false);
                  }}
                  className="text-xl font-semibold hover:text-yellow-500"
                >
                  Booking
                </button>

                {/* ESTIMATE */}
                <button
                  onClick={() => {
                    onEstimateClick();
                    setMenuOpen(false);
                  }}
                  className="w-full py-3 font-bold text-black rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-300"
                >
                  Get Estimate
                </button>

                {/* THEME */}
                <button
                  onClick={() => {
                    onThemeToggle();
                    setMenuOpen(false);
                  }}
                  className="w-full py-3 font-bold text-yellow-200 border rounded-lg border-yellow-500/40 bg-yellow-500/20"
                >
                  {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
