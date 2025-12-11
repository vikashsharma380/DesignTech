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
      className={`relative px-4 sm:px-8 lg:px-20 py-20 md:py-28 overflow-hidden ${
        isLight ? "bg-white" : "bg-[#0a0a0a]"
      }`}
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          className={`w-full h-full object-cover ${
            isLight ? "opacity-10" : "opacity-20"
          }`}
          alt="background"
        />
      </div>

      {/* GOLD OVERLAY */}
      <div
        className={`absolute inset-0 -z-10 ${
          isLight
            ? "bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(244,229,195,0.15)]"
            : "bg-gradient-to-br from-[rgba(212,175,55,0.9)] to-[rgba(244,229,195,0.9)]"
        }`}
      />

      {/* CONTENT */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* TOP DIVIDER */}
        <motion.div
          variants={itemVariants}
          className="h-[2px] w-16 sm:w-20 mx-auto mb-8 bg-gradient-to-r from-transparent via-black/30 to-transparent"
        />

        {/* HEADING */}
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-3xl font-extrabold text-black sm:text-4xl md:text-5xl font-playfair"
        >
          Ready to Start Your Dream Project?
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg md:text-xl leading-relaxed font-light mb-10 ${
            isLight ? "text-[#333]" : "text-black/70"
          }`}
        >
          Get a free consultation and detailed estimate from our expert team
          today.
        </motion.p>

        {/* BOTTOM DIVIDER */}
        <motion.div
          variants={itemVariants}
          className="h-[2px] w-16 sm:w-20 mx-auto mb-12 bg-gradient-to-r from-transparent via-black/30 to-transparent"
        />

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center gap-4 mb-12 sm:flex-row sm:gap-6"
        >
          {/* PRIMARY CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`px-8 py-4 rounded-lg font-bold uppercase tracking-wide flex items-center justify-center gap-2 sm:min-w-[240px]
              text-[#d4af37] transition-all ${
                isHoveredPrimary ? "bg-white shadow-xl" : "bg-white shadow-md"
              }`}
          >
            <svg width="20" height="20" fill="#d4af37">
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
            Calculate Cost Now
          </motion.button>

          {/* SECONDARY CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`px-8 py-4 rounded-lg font-bold uppercase tracking-wide flex items-center justify-center gap-2 border sm:min-w-[240px] transition-all
              ${
                isHoveredSecondary
                  ? "text-white border-white shadow-lg"
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
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {["Free Consultation", "No Obligations", "24-Hour Response"].map(
            (txt, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-black">✓</span>
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      isLight ? "text-[#444]" : "text-black/70"
                    }`}
                  >
                    {txt}
                  </span>
                </div>

                {i < 2 && (
                  <div className="hidden sm:block h-5 w-[1px] bg-black/20" />
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
