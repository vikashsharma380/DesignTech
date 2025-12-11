import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const T = {
    bg: isLight ? "#f5f5f5" : "#0a0a0a",
    textMain: isLight ? "#000" : "#fff",
    textSecondary: isLight ? "#444" : "#d0d0d0",
    textMuted: isLight ? "#333" : "#b5b5b5",
    cardBg: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.02)",
    cardBorder: isLight
      ? "1px solid rgba(212,175,55,0.25)"
      : "1px solid rgba(212,175,55,0.1)",
    iconBg: isLight ? "rgba(212,175,55,0.12)" : "rgba(212,175,55,0.08)",
    iconBorder: isLight
      ? "1px solid rgba(212,175,55,0.3)"
      : "1px solid rgba(212,175,55,0.15)",
  };

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 2L30 8L38 4L40 12L48 14L40 20L42 28L34 24L26 32L28 24L20 20L28 18L26 10L34 12L30 8L24 2Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "10-Year Structural Warranty",
      description:
        "Every project is backed by a decade-long structural warranty ensuring complete peace of mind and protection.",
    },

    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#d4af37" strokeWidth="1.5" />
          <path
            d="M24 8V24L32 32"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "On-Time Delivery",
      description:
        "We guarantee timely completion with clear milestones and penalty-backed commitments for accountability.",
    },

    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M8 12L24 4L40 12V28C40 36 24 44 24 44S8 36 8 28V12Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path d="M16 28L20 32L32 20" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
      title: "Transparent Pricing",
      description:
        "No hidden charges. 100% transparent and itemized pricing with detailed cost breakdown upfront.",
    },

    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M4 24C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path d="M32 18L20 30L16 26" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
      title: "500+ Quality Checks",
      description:
        "Multi-level inspections ensure finest craftsmanship and unmatched construction quality standards.",
    },

    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
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
      title: "Live Project Tracking",
      description:
        "Monitor daily progress, site photos, and project timelines through our intuitive dashboard.",
    },

    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 4L29.5 18H44L33 26L38.5 40L24 32L9.5 40L15 26L4 18H18.5L24 4Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Award-Winning Team",
      description:
        "Top architects, engineers, and interior designers with extensive expertise and industry recognition.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      aria-label="Why Choose Design Tech"
      className="relative py-[8rem] px-[5rem] overflow-hidden"
      style={{ background: T.bg }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.header
          className="text-center max-w-[800px] mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 py-4 px-9 rounded-full font-medium uppercase tracking-[1.5px] text-[0.85rem] mb-8 backdrop-blur-xl"
            style={{
              background: isLight
                ? "rgba(0,0,0,0.05)"
                : "rgba(255,255,255,0.05)",
              color: T.textMain,
              border: isLight
                ? "1px solid rgba(212,175,55,0.4)"
                : "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <span className="text-[#d4af37] text-lg">●</span>
            OUR PROMISE
          </div>

          {/* Title */}
          <h2
            className="text-[3.5rem] leading-[1.2] font-extrabold font-['Playfair_Display'] tracking-[-1px] mb-8"
            style={{ color: T.textMain }}
          >
            Why Choose Design Tech
          </h2>

          {/* Divider */}
          <div
            className="h-[1.5px] w-20 mx-auto my-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, #d4af37, transparent)",
              boxShadow: "0 0 15px rgba(212,175,55,0.5)",
            }}
          />

          {/* Subtitle */}
          <p
            className="text-[1.15rem] leading-[1.8] font-light tracking-wide"
            style={{ color: T.textSecondary }}
          >
            We set the benchmark for premium construction with unmatched
            quality, innovation, and reliability.
          </p>
        </motion.header>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="relative p-10 rounded-[14px] backdrop-blur-md text-center transition-all duration-300"
              style={{
                background: T.cardBg,
                border: T.cardBorder,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[14px] transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 70%)",
                  opacity: hoveredIndex === idx ? 1 : 0,
                }}
              />

              {/* Icon */}
              <motion.div
                className="w-[70px] h-[70px] mx-auto mb-7 rounded-xl flex items-center justify-center cursor-pointer"
                style={{
                  background: T.iconBg,
                  border: T.iconBorder,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-[1.35rem] font-['Playfair_Display'] font-bold tracking-[-0.3px] mb-4"
                style={{ color: T.textMain }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-[0.95rem] leading-[1.7] font-light"
                style={{ color: T.textMuted }}
              >
                {feature.description}
              </p>

              {/* Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(90deg,#d4af37,transparent)",
                  scaleX: hoveredIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
