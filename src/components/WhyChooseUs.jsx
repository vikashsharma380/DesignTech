import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const T = {
    text: isLight ? "text-black" : "text-white",
    textMuted: isLight ? "text-[#444]" : "text-[#d0d0d0]",
    sub: isLight ? "text-[#333]" : "text-[#b5b5b5]",
    bg: isLight ? "bg-[#f5f5f5]" : "bg-[#0a0a0a]",
    cardBg: isLight ? "bg-black/5" : "bg-white/5",
    border: isLight
      ? "border-[rgba(212,175,55,0.25)]"
      : "border-[rgba(212,175,55,0.1)]",
    iconBg: isLight ? "bg-yellow-600/10" : "bg-yellow-600/5",
    gold: "#d4af37",
  };

  const features = [
    {
      title: "10-Year Structural Warranty",
      description:
        "Every project is backed by a decade-long structural warranty ensuring complete peace of mind and protection.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 2L30 8L38 4L40 12L48 14L40 20L42 28L34 24L26 32L28 24L20 20L28 18L26 10L34 12L30 8L24 2Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "On-Time Delivery",
      description:
        "We guarantee timely completion with clear milestones and penalty-backed commitments for accountability.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#d4af37" strokeWidth="1.5" />
          <path
            d="M24 8V24L32 32"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges. 100% transparent and itemized pricing with detailed cost breakdown upfront.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path
            d="M8 12L24 4L40 12V28C40 36 24 44 24 44S8 36 8 28V12Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path d="M16 28L20 32L32 20" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "500+ Quality Checks",
      description:
        "Multi-level inspections ensure finest craftsmanship and unmatched construction quality standards.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path
            d="M4 24C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path d="M32 18L20 30L16 26" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Live Project Tracking",
      description:
        "Monitor daily progress, site photos, and project timelines through our intuitive dashboard.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect
            x="6"
            y="10"
            width="36"
            height="28"
            rx="2"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M6 18H42M14 10V38M34 10V38"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <circle cx="24" cy="24" r="3" fill="#d4af37" />
        </svg>
      ),
    },
    {
      title: "Award-Winning Team",
      description:
        "Top architects, engineers, and interior designers with extensive expertise and industry recognition.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 4L29.5 18H44L33 26L38.5 40L24 32L9.5 40L15 26L4 18H18.5L24 4Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      aria-label="Why Choose Us"
      className={`relative overflow-hidden py-24 sm:py-28 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 ${T.bg}`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-[800px] mx-auto mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 py-3 px-6 sm:px-8 rounded-full uppercase tracking-[1.5px] text-xs sm:text-sm mb-6 backdrop-blur-xl border ${T.border}`}
            style={{
              background: isLight
                ? "rgba(0,0,0,0.05)"
                : "rgba(255,255,255,0.05)",
            }}
          >
            <span className="text-[#d4af37] text-base sm:text-lg">●</span>
            OUR PROMISE
          </div>

          <h2
            className={`font-['Playfair_Display'] font-extrabold tracking-[-1px] mb-6 text-3xl sm:text-4xl md:text-5xl ${T.text}`}
          >
            Why Choose Design Tech
          </h2>

          <div className="h-[1.5px] w-20 mx-auto my-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

          <p
            className={`max-w-[700px] mx-auto text-sm sm:text-base md:text-lg leading-[1.8] ${T.textMuted}`}
          >
            We set the benchmark for premium construction with unmatched
            quality, innovation, and reliability.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={item}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              className={`relative p-6 sm:p-8 rounded-xl backdrop-blur-md border ${T.cardBg} ${T.border} text-center transition-all`}
            >
              <div
                className="absolute inset-0 transition-opacity opacity-0 pointer-events-none rounded-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)",
                  opacity: hoveredIndex === idx ? 1 : 0,
                }}
              />

              <motion.div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-6 sm:w-20 sm:h-20 rounded-xl"
                style={{
                  background: T.iconBg,
                  border: isLight
                    ? "1px solid rgba(212,175,55,0.3)"
                    : "1px solid rgba(212,175,55,0.2)",
                }}
                whileHover={{ scale: 1.1 }}
              >
                {f.icon}
              </motion.div>

              <h3
                className={`font-['Playfair_Display'] font-bold tracking-tight mb-3 text-lg sm:text-xl md:text-2xl ${T.text}`}
              >
                {f.title}
              </h3>

              <p className={`text-sm sm:text-base leading-[1.7] ${T.sub}`}>
                {f.description}
              </p>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(90deg,#d4af37,transparent)",
                }}
                animate={{ scaleX: hoveredIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
