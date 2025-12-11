import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    bg: isLight ? "bg-white" : "bg-[#0a0a0a]",
    text: isLight ? "text-black" : "text-white",
    sub: isLight ? "text-[#444]" : "text-[#d0d0d0]",
    card: isLight ? "bg-white" : "bg-white/5",
    border: isLight
      ? "border-[rgba(212,175,55,0.25)]"
      : "border-[rgba(212,175,55,0.12)]",
    badgeBg: isLight ? "bg-black/5" : "bg-white/5",
    gold: "#d4af37",
  };

  const testimonials = [
    {
      name: "Vikram Malhotra",
      role: "CEO, Tech Ventures",
      text: "The attention to detail and craftsmanship exceeded our expectations. Our corporate office is now a masterpiece of modern design and functionality.",
      avatar: "VM",
      rating: 5,
    },
    {
      name: "Ananya Kapoor",
      role: "Luxury Homeowner",
      text: "From concept to completion, the journey was seamless. They transformed our vision into a stunning reality with exceptional quality.",
      avatar: "AK",
      rating: 5,
    },
    {
      name: "Rajesh Sharma",
      role: "Property Developer",
      text: "Working with DesignTech was a game-changer. Their innovative approach and professionalism set new standards in our industry.",
      avatar: "RS",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Architect Partner",
      text: "Their execution of complex designs was flawless. We've partnered with them for multiple projects and never been disappointed.",
      avatar: "PN",
      rating: 5,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
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
        className="text-center max-w-[800px] mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 py-3 px-6 sm:px-8 rounded-full uppercase tracking-[1.5px] text-xs sm:text-sm mb-6 backdrop-blur-xl border ${colors.badgeBg} ${colors.border}`}
        >
          <span className="text-[#d4af37] text-lg">●</span>
          CLIENT STORIES
        </div>

        <h2
          className={`font-['Playfair_Display'] font-extrabold tracking-[-1px] mb-6 text-3xl sm:text-4xl md:text-5xl ${colors.text}`}
        >
          What Our Clients Say
        </h2>

        <div className="h-[1.5px] w-20 mx-auto my-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

        <p
          className={`max-w-[700px] mx-auto text-sm sm:text-base md:text-lg leading-[1.8] ${colors.sub}`}
        >
          Hear from clients who turned their visions into masterpieces with
          DesignTech.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`relative rounded-xl p-6 sm:p-8 backdrop-blur-xl border ${colors.card} ${colors.border} flex flex-col transition-all`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -8 }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-xl"
              style={{
                background: `radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)`,
                opacity: hoveredIndex === i ? 1 : 0,
              }}
            />

            {/* Rating */}
            <div className="flex gap-1.5 mb-4">
              {[...Array(t.rating)].map((_, idx) => (
                <span
                  key={idx}
                  className="text-xl font-bold"
                  style={{ color: colors.gold }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p
              className={`italic leading-[1.8] text-sm sm:text-base mb-6 ${colors.sub}`}
            >
              "{t.text}"
            </p>

            <div className="h-[1px] my-4 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

            {/* PROFILE */}
            <div className="flex items-center gap-4 mt-auto">
              <div
                className="flex items-center justify-center text-lg font-bold text-black shadow-md w-14 h-14 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
                }}
              >
                {t.avatar}
              </div>

              <div className="flex flex-col">
                <h4 className={`font-semibold text-base ${colors.text}`}>
                  {t.name}
                </h4>
                <p className={`text-xs sm:text-sm ${colors.sub}`}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className={`mt-20 p-6 sm:p-10 text-center rounded-2xl backdrop-blur-xl border ${colors.border}`}
        style={{
          background: isLight
            ? "linear-gradient(135deg, rgba(212,175,55,0.15), transparent)"
            : "linear-gradient(135deg, rgba(212,175,55,0.1), transparent)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p
          className={`text-sm sm:text-base md:text-lg mb-6 leading-[1.7] ${colors.sub}`}
        >
          Join hundreds of satisfied clients who trusted DesignTech for their
          luxury spaces.
        </p>

        <motion.button
          className="px-8 py-3 text-sm font-bold text-black rounded-lg sm:text-base bg-gradient-to-br from-yellow-600 to-yellow-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project Today →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Testimonials;
