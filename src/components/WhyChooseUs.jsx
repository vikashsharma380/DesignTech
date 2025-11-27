import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 2L30 8L38 4L40 12L48 14L40 20L42 28L34 24L26 32L28 24L20 20L28 18L26 10L34 12L30 8L24 2Z"
            stroke="#d4af37"
            strokeWidth="1.5"
            fill="none"
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
            fill="none"
          />
          <path
            d="M16 28L20 32L32 20"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          <path
            d="M32 18L20 30L16 26"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            strokeLinecap="round"
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
            fill="none"
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
            OUR PROMISE
          </div>

          <h2 style={styles.title}>Why Choose Design Tech</h2>

          <div style={styles.divider} />

          <p style={styles.subtitle}>
            We set the benchmark for premium construction with unmatched
            quality, innovation, and reliability
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={styles.card}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Card Glow */}
              <div
                style={{
                  ...styles.cardGlow,
                  opacity: hoveredIndex === idx ? 1 : 0,
                }}
              />

              {/* Icon */}
              <motion.div
                style={styles.iconWrapper}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 style={styles.cardTitle}>{feature.title}</h3>

              {/* Description */}
              <p style={styles.cardDescription}>{feature.description}</p>

              {/* Bottom Accent Line */}
              <motion.div
                style={{
                  ...styles.accentLine,
                  scaleX: hoveredIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "2.5rem",
  },

  card: {
    position: "relative",
    padding: "2.5rem",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.1)",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    transition: "all 0.3s ease",
  },

  cardGlow: {
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
    borderRadius: "14px",
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  },

  iconWrapper: {
    width: "70px",
    height: "70px",
    borderRadius: "12px",
    background: "rgba(212, 175, 55, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.8rem",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    cursor: "pointer",
  },

  cardTitle: {
    fontSize: "1.35rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 1rem",
    letterSpacing: "-0.3px",
  },

  cardDescription: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "#b5b5b5",
    margin: "0",
    fontWeight: "300",
  },

  accentLine: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    height: "2px",
    background: "linear-gradient(90deg, #d4af37, transparent)",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    transformOrigin: "left",
  },
};

export default WhyChooseUs;
