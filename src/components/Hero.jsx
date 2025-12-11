import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ theme = "dark" }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const isDark = theme === "dark";

  // -------- THEME TOKENS --------
  const T = {
    bg: isDark ? "#0a0a0a" : "rgba(255,255,255,0.10)", // EXACT 10% white
    mainHeading: isDark ? "#ffffffef" : "#1a1a1a",
    subHeading: isDark
      ? "linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)"
      : "linear-gradient(135deg, #d4af37 0%, #a48826 50%, #d4af37 100%)",
    paragraph: isDark ? "#d0d0d0" : "#3a3a3a",
    transparentWhite: isDark
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.10)", // also softened to match 10%
    outlineBorder: isDark
      ? "1.5px solid rgba(212,175,55,0.5)"
      : "1.5px solid rgba(212,175,55,0.35)",
  };

  useEffect(() => {
    const scrollHandler = () => setOffsetY(window.scrollY);
    const mouseHandler = (e) =>
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5rem",
        overflow: "hidden",
        background: T.bg,
      }}
    >
      {/* BACKGROUND VIDEO 1 */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: `translateY(${offsetY * 0.4}px) translateX(${
            mousePos.x
          }px) translateY(${mousePos.y * 0.5}px) scale(1.1)`,
        }}
      >
        <video
          src="/DesignTech/bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isDark ? 0.4 : 0.22, // perfect visibility
          }}
        ></video>
      </motion.div>

      {/* BACKGROUND VIDEO 2 (blur layer) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          transform: `translateY(${offsetY * 0.25}px) translateX(${
            mousePos.x * 0.5
          }px) scale(1.05)`,
        }}
      >
        <video
          src="/DesignTech/bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isDark ? 0.08 : 0.06,
            filter: "blur(20px)",
          }}
        ></video>
      </motion.div>

      {/* DARK MODE OVERLAY (light mode = fully transparent) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: isDark
            ? "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.55) 100%)"
            : "transparent",
        }}
      />

      {/* GOLD / WHITE radiance */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background: isDark
            ? "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "7rem",
            lineHeight: "1.05",
            margin: "0 0 1.5rem",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            color: T.mainHeading,
          }}
        >
          Build the Future
        </motion.h1>

        {/* SUBHEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "2.5rem",
            margin: "0 0 2.5rem",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            background: T.subHeading,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Where Vision Meets Innovation
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.9",
            color: T.paragraph,
            maxWidth: "700px",
            margin: "0 auto 3.5rem",
            fontWeight: 300,
          }}
        >
          Transform your design and construction vision into reality with
          cutting-edge technology and timeless elegance.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Primary CTA */}
          <button
            style={{
              padding: "1.3rem 3.5rem",
              background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
              borderRadius: "8px",
              border: "none",
              fontWeight: 700,
              color: "#000",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Start Building
          </button>

          {/* Secondary CTA */}
          <button
            style={{
              padding: "1.3rem 3.5rem",
              background: T.transparentWhite,
              border: T.outlineBorder,
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#d4af37",
              cursor: "pointer",
              backdropFilter: "blur(20px)",
            }}
          >
            Explore Portfolio
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
