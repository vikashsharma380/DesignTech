import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ theme }) => {
  const isLight = theme === "light";

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: "Riverside Luxury Villa",
      location: "Gurgaon",
      area: "12,500 sq ft",
      type: "Residential",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      details:
        "Contemporary luxury villa with panoramic river views and smart home integration",
    },
    {
      title: "Corporate Headquarters",
      location: "Mumbai",
      area: "85,000 sq ft",
      type: "Commercial",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      details:
        "State-of-the-art corporate complex with sustainable architecture and modern amenities",
    },
    {
      title: "Modern Penthouse",
      location: "Bangalore",
      area: "8,200 sq ft",
      type: "Residential",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      details:
        "Ultra-luxury penthouse featuring premium finishes and exclusive design elements",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 300 : -300,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -300 : 300,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent(
      (prev) => (prev + newDirection + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className={`py-24 sm:py-28 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 transition-colors duration-300 ${
        isLight ? "bg-white" : "bg-[#0a0a0a]"
      }`}
      aria-label="Signature Projects"
    >
      <div className="max-w-[1400px] mx-auto">
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
            className={`inline-flex items-center gap-3 py-3 px-6 sm:py-4 sm:px-8 rounded-full font-medium uppercase tracking-[1.5px] text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-xl border ${
              isLight
                ? "bg-black/5 text-black border-[#d4af37]/40"
                : "bg-white/5 text-white border-[#d4af37]/30"
            }`}
          >
            <span className="text-[#d4af37] text-base sm:text-lg">●</span>
            PORTFOLIO
          </div>

          <h2
            className={`font-['Playfair_Display'] font-extrabold tracking-[-1px] mb-6 ${
              isLight ? "text-black" : "text-white"
            } text-3xl sm:text-4xl md:text-5xl`}
          >
            Signature Projects
          </h2>

          <div className="h-[1.5px] w-20 mx-auto my-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

          <p
            className={`text-sm sm:text-base md:text-lg leading-[1.8] font-light tracking-wide ${
              isLight ? "text-[#333]" : "text-[#d0d0d0]"
            }`}
          >
            Showcasing our finest works across residential, commercial, and
            luxury developments.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-10 border backdrop-blur-xl ${
            isLight
              ? "bg-black/5 border-[#d4af37]/20"
              : "bg-white/5 border-[#d4af37]/10"
          } h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px]`}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isLight
                    ? "bg-gradient-to-t from-white/90 via-white/60 to-transparent"
                    : "bg-gradient-to-t from-black/90 via-black/60 to-transparent"
                }`}
              />

              {/* CONTENT */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 lg:p-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Type Tag */}
                <div className="inline-block px-5 py-2 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-full text-[#d4af37] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                  {projects[current].type}
                </div>

                {/* Title */}
                <h3
                  className={`font-['Playfair_Display'] font-extrabold tracking-tight mb-3 sm:mb-4 ${
                    isLight ? "text-black" : "text-white"
                  } text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem]`}
                >
                  {projects[current].title}
                </h3>

                {/* Details */}
                <p
                  className={`max-w-[600px] font-light leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm md:text-base ${
                    isLight ? "text-[#333]" : "text-gray-300"
                  }`}
                >
                  {projects[current].details}
                </p>

                {/* Meta Info */}
                <div
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 border-t pt-4 ${
                    isLight ? "border-[#d4af37]/30" : "border-[#d4af37]/20"
                  }`}
                >
                  {/* Location */}
                  <div>
                    <span
                      className={`text-[10px] sm:text-xs uppercase font-medium ${
                        isLight ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      Location
                    </span>
                    <p
                      className={`text-base sm:text-lg font-semibold ${
                        isLight ? "text-black" : "text-white"
                      }`}
                    >
                      {projects[current].location}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-8 bg-[#d4af37]/30" />

                  {/* Area */}
                  <div>
                    <span
                      className={`text-[10px] sm:text-xs uppercase font-medium ${
                        isLight ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      Area
                    </span>
                    <p
                      className={`text-base sm:text-lg font-semibold ${
                        isLight ? "text-black" : "text-white"
                      }`}
                    >
                      {projects[current].area}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT NAV */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-[#d4af37]/30 bg-white/40 dark:bg-black/40 hover:scale-105 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* RIGHT NAV */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-[#d4af37]/30 bg-white/40 dark:bg-black/40 hover:scale-105 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-3 mb-4 sm:mb-6">
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "bg-[#d4af37] w-8" : "bg-[#d4af37]/30 w-3"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* COUNTER */}
        <div className="text-center text-[#d4af37] font-['Playfair_Display'] font-semibold text-lg sm:text-xl">
          {String(current + 1).padStart(2, "0")} /
          {String(projects.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
};

export default Projects;
