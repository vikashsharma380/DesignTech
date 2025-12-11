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
    cardBorder: isLight
      ? "border-[rgba(212,175,55,0.25)]"
      : "border-[rgba(212,175,55,0.1)]",
    badgeBg: isLight ? "bg-black/5" : "bg-white/10",
    badgeText: isLight ? "text-black" : "text-white",
    overlay: isLight ? "bg-white/40" : "bg-black/50",
    gold: "#d4af37",
  };

  const services = [
    {
      image: architecture,
      title: "Architectural Design",
      desc: "Timeless architectural concepts crafted with precision and global aesthetics.",
      number: "01",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
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
      number: "02",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
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
      number: "03",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
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
      number: "04",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
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
      className={`relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden ${colors.bg}`}
    >
      {/* Header */}
      <motion.div
        className="text-center max-w-[800px] mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 py-4 px-8 rounded-full text-[0.85rem] font-medium tracking-[1.5px] uppercase mb-8 backdrop-blur-xl border ${colors.badgeBg} ${colors.badgeText} border-[rgba(212,175,55,0.3)]`}
        >
          <span className="text-[#d4af37] text-lg">●</span>
          OUR EXPERTISE
        </div>

        <h2
          className={`text-[3.5rem] font-extrabold font-['Playfair_Display'] tracking-[-1px] mb-8 leading-[1.2] ${colors.text}`}
        >
          What We Offer
        </h2>

        <div
          className="h-[1.5px] w-20 mx-auto my-8 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        <p
          className={`text-[1.15rem] leading-[1.8] font-light tracking-wide max-w-[700px] mx-auto ${colors.subText}`}
        >
          Premium Design & Build Services. Curated expertise tailored to elevate
          your residential, commercial, and luxury spaces with uncompromising
          quality.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-[1200px] mx-auto"
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
            <div className="relative w-full h-[220px] overflow-hidden">
              <img
                src={srv.image}
                alt={srv.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-60"
                }`}
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${colors.overlay}`}
                style={{ opacity: hoveredIndex === i ? 0.4 : 0.7 }}
              />
            </div>

            {/* Content */}
            <div className="relative p-10 flex flex-col">
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="mb-6 flex justify-center">{srv.icon}</div>

              <h3
                className={`text-[1.5rem] font-['Playfair_Display'] font-bold mb-4 leading-tight ${colors.text}`}
              >
                {srv.title}
              </h3>

              <p
                className={`text-[1rem] leading-[1.7] font-light mb-4 flex-1 ${colors.subText}`}
              >
                {srv.desc}
              </p>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(90deg, #d4af37, transparent)",
                  scaleX: hoveredIndex === i ? 1 : 0,
                }}
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
