import React, { useState } from "react";
import { motion } from "framer-motion";

import interiorImg from "../assets/interior.jpeg";
import luxuryResidence from "../assets/bedroom.jpeg";
import architecture from "../assets/architecture.jpeg";
import turnkey from "../assets/turnkey.jpeg";

const Services = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    bg: isLight ? "bg-white" : "bg-[#0a0a0a]",
    text: isLight ? "text-black" : "text-white",
    subText: isLight ? "text-[#444]" : "text-[#d0d0d0]",
    cardBg: isLight ? "bg-white" : "bg-white/5",
    badgeBg: isLight ? "bg-black/5" : "bg-white/10",
    badgeText: isLight ? "text-black" : "text-white",
    overlay: isLight ? "bg-white/40" : "bg-black/50",
  };

  const services = [
    {
      image: architecture,
      title: "Architectural Design",
      desc: "Timeless architectural concepts crafted with precision and global aesthetics.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 5L55 15V45L30 55L5 45V15L30 5Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M30 5V55M30 15L5 25M30 15L55 25M5 25V45M55 25V45M5 45L30 55L55 45"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      ),
    },
    {
      image: luxuryResidence,
      title: "Luxury Residences",
      desc: "World-class homes designed with exceptional craftsmanship and detail.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
          <rect
            x="10"
            y="15"
            width="40"
            height="35"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M10 28H50M28 15V50M42 15V50"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <path d="M20 8L25 15M40 8L35 15" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      image: interiorImg,
      title: "Interior Excellence",
      desc: "Premium interior compositions blending luxury materials & modern sensibilities.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" stroke="#d4af37" strokeWidth="1.5" />
          <path
            d="M30 8V52M8 30H52M18 18L42 42M42 18L18 42"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="30"
            cy="30"
            r="8"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      ),
    },
    {
      image: turnkey,
      title: "Turnkey Execution",
      desc: "End-to-end management with absolute transparency and assured delivery.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
          <path d="M15 45L30 15L45 45H15Z" stroke="#d4af37" strokeWidth="1.5" />
          <line
            x1="30"
            y1="15"
            x2="30"
            y2="45"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="20"
            y1="35"
            x2="40"
            y2="35"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <rect
            x="25"
            y="45"
            width="10"
            height="8"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`relative py-24 sm:py-28 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 ${colors.bg}`}
    >
      {/* HEADER */}
      <motion.div
        className="text-center max-w-[800px] mx-auto mb-14 sm:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 py-3 px-6 sm:py-4 sm:px-8 rounded-full text-xs sm:text-sm font-medium tracking-[1.5px] uppercase mb-6 sm:mb-8 backdrop-blur-xl border ${colors.badgeBg} ${colors.badgeText}`}
          style={{ borderColor: "rgba(212,175,55,0.3)" }}
        >
          <span className="text-[#d4af37] text-base sm:text-lg">●</span>
          OUR EXPERTISE
        </div>

        <h2
          className={`font-['Playfair_Display'] font-extrabold leading-[1.2] mt-2 mb-4
            text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] ${colors.text}`}
        >
          What We Offer
        </h2>

        <div
          className="h-[1.5px] w-20 mx-auto my-6 sm:my-8 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        <p
          className={`text-base sm:text-lg leading-[1.8] font-light max-w-[700px] mx-auto ${colors.subText}`}
        >
          Premium Design & Build Services. Curated expertise tailored to elevate
          your residential, commercial, and luxury spaces with uncompromising
          quality.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1300px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((srv, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 backdrop-blur-lg border ${colors.cardBg}`}
            style={{
              borderColor: isLight
                ? "rgba(212,175,55,0.25)"
                : "rgba(212,175,55,0.1)",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Image */}
            <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
              <img
                src={srv.image}
                alt={srv.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-70"
                }`}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: hoveredIndex === i ? 0.35 : 0.65,
                  background: colors.overlay,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative flex flex-col flex-1 p-6 sm:p-8">
              <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="flex justify-center mb-4 sm:mb-6">{srv.icon}</div>

              <h3
                className={`font-['Playfair_Display'] font-bold mb-3 text-xl sm:text-2xl ${colors.text}`}
              >
                {srv.title}
              </h3>

              <p
                className={`text-sm sm:text-base leading-[1.7] font-light flex-1 ${colors.subText}`}
              >
                {srv.desc}
              </p>

              {/* Bottom gold line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(90deg, #d4af37, transparent)",
                }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
