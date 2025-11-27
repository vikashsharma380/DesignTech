import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX - window.innerWidth / 2) * 0.02,
      y: (e.clientY - window.innerHeight / 2) * 0.02,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
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
        background: "#0a0a0a",
      }}
    >
      {/* MAIN PARALLAX BACKGROUND VIDEO */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: `translateY(${offsetY * 0.4}px) translateX(${
            mousePos.x
          }px) translateY(${mousePos.y * 0.5}px) scale(1.1)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <video
          src="./bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        ></video>
      </motion.div>

      {/* SECOND PARALLAX BLURRED VIDEO */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          transform: `translateY(${offsetY * 0.25}px) translateX(${
            mousePos.x * 0.5
          }px) scale(1.05)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <video
          src="./bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.08,
            filter: "blur(20px)",
          }}
        ></video>
      </motion.div>

      {/* GRADIENT OVERLAY 1 */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: "transform 0.08s linear",
          background:
            "linear-gradient(180deg, rgba(4, 4, 4, 0.57) 0%, rgba(0, 0, 0, 0.19) 60%, rgba(0, 0, 0, 0.58) 100%)",
        }}
      />

      {/* GRADIENT OVERLAY 2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
          transform: `translateY(${offsetY * 0.05}px)`,
          transition: "transform 0.08s linear",
        }}
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1 }}
          style={{
            fontSize: "7rem",
            lineHeight: "1.05",
            margin: "0 0 1.5rem",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-2px",
            textShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          Build the Future
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.3",
            margin: "0 0 2.5rem",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            background:
              "linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Where Vision Meets Innovation
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          style={{
            height: "1.5px",
            width: "80px",
            background:
              "linear-gradient(90deg, transparent, #d4af37, transparent)",
            margin: "2.5rem auto",
            boxShadow: "0 0 15px rgba(212,175,55,0.5)",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.9",
            color: "#d0d0d0",
            maxWidth: "700px",
            margin: "0 auto 3.5rem",
            fontWeight: 300,
            letterSpacing: "0.8px",
          }}
        >
          Transform your design and construction vision into reality with
          cutting-edge technology and timeless elegance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(212,175,55,0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: "1.3rem 3.5rem",
              background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
              borderRadius: "8px",
              border: "none",
              fontWeight: 600,
              color: "#000",
              fontSize: "1rem",
              cursor: "pointer",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              boxShadow: "0 15px 40px rgba(212,175,55,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Start Building
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              background: "rgba(255,255,255,0.1)",
              boxShadow: "0 20px 50px rgba(212,175,55,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: "1.3rem 3.5rem",
              background: "rgba(255,255,255,0.05)",
              border: "1.5px solid rgba(212,175,55,0.5)",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#d4af37",
              cursor: "pointer",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              backdropFilter: "blur(20px)",
              transition: "all 0.3s ease",
            }}
          >
            Explore Portfolio
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "1.5px solid rgba(212,175,55,0.4)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "8px 0",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "8px",
              background: "#d4af37",
              borderRadius: "2px",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
