import React, { useState } from "react";
import { motion } from "framer-motion";

const CTA = ({ theme }) => {
  const isLight = theme === "light";

  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="cta"
      className={`relative px-6 md:px-20 py-24 md:py-28 overflow-hidden ${
        isLight ? "bg-white" : "bg-[#0a0a0a]"
      }`}
    >
      {/* BG IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          className={`w-full h-full object-cover transition-opacity ${
            isLight ? "opacity-10" : "opacity-[0.15]"
          }`}
          alt="background"
        />
      </div>

      {/* GOLD / WHITE OVERLAY */}
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-gradient-to-br from-[rgba(212,175,55,0.2)] to-[rgba(244,229,195,0.2)]"
            : "bg-gradient-to-br from-[rgba(212,175,55,0.95)] to-[rgba(244,229,195,0.95)]"
        }`}
      ></div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* TOP LINE */}
        <motion.div
          variants={itemVariants}
          className={`h-[2px] w-20 mx-auto mb-8 ${
            isLight
              ? "bg-gradient-to-r from-transparent via-black/30 to-transparent"
              : "bg-gradient-to-r from-transparent via-black/30 to-transparent"
          }`}
        />

        {/* HEADING */}
        <motion.h2
          variants={itemVariants}
          className={`text-4xl md:text-5xl font-extrabold font-playfair mb-6 ${
            isLight ? "text-black" : "text-black"
          }`}
        >
          Ready to Start Your Dream Project?
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl leading-8 font-light mb-10 ${
            isLight ? "text-[#333]" : "text-black/70"
          }`}
        >
          Get a free consultation and detailed estimate from our expert team
          today
        </motion.p>

        {/* BOTTOM LINE */}
        <motion.div
          variants={itemVariants}
          className={`h-[2px] w-20 mx-auto mb-14 ${
            isLight
              ? "bg-gradient-to-r from-transparent via-black/30 to-transparent"
              : "bg-gradient-to-r from-transparent via-black/30 to-transparent"
          }`}
        />

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {/* PRIMARY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`px-10 py-4 rounded-lg font-bold uppercase tracking-wide flex items-center gap-2
              ${isLight ? "text-[#d4af37]" : "text-[#d4af37]"}
              shadow-lg transition-all
              ${
                isHoveredPrimary ? "bg-white shadow-2xl" : "bg-white shadow-lg"
              }`}
          >
            <svg width="20" height="20" fill="#d4af37">
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
            Calculate Cost Now
          </motion.button>

          {/* SECONDARY OUTLINE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`px-10 py-4 rounded-lg font-bold uppercase tracking-wide flex items-center gap-2
              border transition-all
              ${
                isHoveredSecondary
                  ? "text-white border-white shadow-xl"
                  : "text-white/90 border-white/60"
              }`}
          >
            <svg width="20" height="20" fill="currentColor">
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
            Schedule Consultation
          </motion.button>
        </motion.div>

        {/* TRUST INDICATORS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-5 md:gap-8"
        >
          {["Free Consultation", "No Obligations", "24-Hour Response"].map(
            (txt, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold text-lg ${
                      isLight ? "text-black" : "text-black"
                    }`}
                  >
                    ✓
                  </span>
                  <span
                    className={`text-sm md:text-base font-medium ${
                      isLight ? "text-[#444]" : "text-black/70"
                    }`}
                  >
                    {txt}
                  </span>
                </div>

                {i < 2 && (
                  <div
                    className={`h-5 w-[1px] ${
                      isLight ? "bg-black/30" : "bg-black/20"
                    }`}
                  />
                )}
              </React.Fragment>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
