import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
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
      x: dir > 0 ? 1000 : -1000,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -1000 : 1000,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent(
      (prev) => (prev + newDirection + projects.length) % projects.length
    );
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={styles.badge}>
            <span style={styles.badgeDot}>●</span>
            PORTFOLIO
          </div>

          <h2 style={styles.title}>Signature Projects</h2>

          <div style={styles.divider} />

          <p style={styles.subtitle}>
            Showcasing our finest works across residential, commercial, and
            luxury developments
          </p>
        </motion.div>

        {/* Slider */}
        <div style={styles.sliderWrapper}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={styles.slide}
            >
              <img
                src={projects[current].image}
                alt={projects[current].title}
                style={styles.image}
              />

              {/* Overlay */}
              <div style={styles.overlay} />

              {/* Content */}
              <motion.div
                style={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div style={styles.typeTag}>{projects[current].type}</div>

                <h3 style={styles.projectTitle}>{projects[current].title}</h3>

                <p style={styles.projectDetails}>{projects[current].details}</p>

                <div style={styles.projectMeta}>
                  <div style={styles.metaItem}>
                    <span style={styles.metaLabel}>Location</span>
                    <span style={styles.metaValue}>
                      {projects[current].location}
                    </span>
                  </div>
                  <div style={styles.metaDivider} />
                  <div style={styles.metaItem}>
                    <span style={styles.metaLabel}>Area</span>
                    <span style={styles.metaValue}>
                      {projects[current].area}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            style={{ ...styles.navButton, ...styles.navPrev }}
            onClick={() => paginate(-1)}
            aria-label="Previous project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            style={{ ...styles.navButton, ...styles.navNext }}
            onClick={() => paginate(1)}
            aria-label="Next project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div style={styles.indicators}>
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              style={{
                ...styles.indicator,
                background:
                  current === idx ? "#d4af37" : "rgba(212, 175, 55, 0.2)",
                width: current === idx ? "32px" : "10px",
              }}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div style={styles.counter}>
          <span style={styles.currentCount}>
            {String(current + 1).padStart(2, "0")}
          </span>
          <span style={styles.separator}>/</span>
          <span style={styles.totalCount}>
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    padding: "8rem 5rem",
    background: "#0a0a0a",
    overflow: "hidden",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 5rem",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "1rem 2.2rem",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    borderRadius: "60px",
    fontSize: "0.85rem",
    color: "#fff",
    letterSpacing: "1.5px",
    fontWeight: "500",
    backdropFilter: "blur(20px)",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },

  badgeDot: {
    color: "#d4af37",
    fontSize: "1.2rem",
  },

  title: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    margin: "0 0 2rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    color: "#fff",
    letterSpacing: "-1px",
  },

  divider: {
    height: "1.5px",
    width: "80px",
    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
    margin: "2rem auto",
    boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)",
  },

  subtitle: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: "#d0d0d0",
    margin: "0",
    fontWeight: "300",
    letterSpacing: "0.8px",
  },

  sliderWrapper: {
    position: "relative",
    height: "600px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.1)",
    marginBottom: "3rem",
  },

  slide: {
    position: "absolute",
    inset: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
  },

  content: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "4rem 3rem",
    background:
      "linear-gradient(to top, rgba(10,10,10,0.98), rgba(10,10,10,0.7), transparent)",
  },

  typeTag: {
    display: "inline-block",
    padding: "0.7rem 1.5rem",
    background: "rgba(212, 175, 55, 0.15)",
    border: "1px solid rgba(212, 175, 55, 0.4)",
    borderRadius: "50px",
    color: "#d4af37",
    fontSize: "0.85rem",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
  },

  projectTitle: {
    fontSize: "2.8rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 1rem",
    letterSpacing: "-0.5px",
  },

  projectDetails: {
    fontSize: "1.1rem",
    color: "#c0c0c0",
    margin: "0 0 2rem",
    fontWeight: "300",
    lineHeight: "1.6",
    maxWidth: "600px",
  },

  projectMeta: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid rgba(212, 175, 55, 0.2)",
  },

  metaItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  metaLabel: {
    fontSize: "0.85rem",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "500",
  },

  metaValue: {
    fontSize: "1.15rem",
    color: "#fff",
    fontWeight: "600",
  },

  metaDivider: {
    width: "1px",
    height: "30px",
    background: "rgba(212, 175, 55, 0.2)",
  },

  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    background: "rgba(10, 10, 10, 0.7)",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },

  navPrev: {
    left: "2rem",
  },

  navNext: {
    right: "2rem",
  },

  indicators: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },

  indicator: {
    height: "10px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    background: "rgba(212, 175, 55, 0.2)",
  },

  counter: {
    textAlign: "center",
    fontSize: "2rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#d4af37",
    letterSpacing: "-0.5px",
  },

  currentCount: {
    color: "#d4af37",
  },

  separator: {
    margin: "0 0.5rem",
    opacity: 0.5,
  },

  totalCount: {
    opacity: 0.6,
  },
};

export default Projects;
