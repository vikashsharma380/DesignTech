import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = ({ onStartBuilding }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  // DARK MODE COLORS — fixed
  const T = {
    mainHeading: "#ffffffef",
    subHeading:
      "linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)",
    paragraph: "#d0d0d0",
    bg: "#0a0a0a",
    buttonOutline: "1.5px solid rgba(212,175,55,0.5)",
    glass: "rgba(255,255,255,0.05)",
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
      className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden sm:px-8 md:px-16"
      style={{ background: T.bg }}
    >
      {/* BACKGROUND VIDEO */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.4}px) translateX(${
            mousePos.x
          }px) scale(1.1)`,
        }}
      >
        <video
          src="./bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ opacity: 0.4 }}
        />
      </motion.div>

      {/* BLUR OVERLAY */}
      <motion.div
        className="absolute inset-0 z-1"
        style={{
          transform: `translateY(${offsetY * 0.2}px) translateX(${
            mousePos.x * 0.5
          }px) scale(1.05)`,
        }}
      >
        <video
          src="./bgv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ opacity: 0.08, filter: "blur(22px)" }}
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.22), rgba(0,0,0,0.55))",
        }}
      />

      {/* GOLD GLOW */}
      <div
        className="absolute inset-0 pointer-events-none z-3"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15), transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-[900px] px-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* ONE LINE HEADING */}
        <h1
          className="font-playfair font-extrabold leading-[1.08]
          whitespace-nowrap
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] mb-6"
          style={{ color: T.mainHeading }}
        >
          Design. Build. Innovate.
        </h1>

        {/* SUBTITLE */}
        <h2
          className="mb-8 text-xl font-semibold font-playfair sm:text-2xl md:text-3xl lg:text-4xl"
          style={{
            background: T.subHeading,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Crafting Modern Spaces With Precision & Excellence
        </h2>

        {/* DESCRIPTION */}
        <p
          className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: T.paragraph }}
        >
          From concept to completion, we transform architectural visions into
          extraordinary realities through innovation and engineering mastery.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button
            onClick={onStartBuilding}
            className="py-3.5 px-8 sm:px-10 rounded-lg font-bold text-black
            bg-gradient-to-br from-yellow-600 to-yellow-300 text-sm sm:text-base"
          >
            Start Building
          </button>

          <button
            onClick={() => navigate("/portfolio")}
            className="py-3.5 px-8 sm:px-10 rounded-lg font-bold backdrop-blur-xl
  text-yellow-500 text-sm sm:text-base"
            style={{
              background: T.glass,
              border: T.buttonOutline,
            }}
          >
            Explore Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
