import React, { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section style={styles.section}>
      {/* Background with overlay */}
      <div style={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="background"
          style={styles.backgroundImage}
        />
        <div style={styles.overlay} />
      </div>

      {/* Content */}
      <motion.div
        style={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Decorative Line Top */}
        <motion.div
          style={styles.decorativeLineTop}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        />

        {/* Heading */}
        <motion.h2 variants={itemVariants} style={styles.heading}>
          Ready to Start Your Dream Project?
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={itemVariants} style={styles.subtitle}>
          Get a free consultation and detailed estimate from our expert team
          today
        </motion.p>

        {/* Decorative Line Bottom */}
        <motion.div
          style={styles.decorativeLineBottom}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} style={styles.buttonsContainer}>
          {/* Primary Button */}
          <motion.button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            style={{
              ...styles.buttonPrimary,
              background: isHoveredPrimary
                ? "rgba(255, 255, 255, 0.95)"
                : "rgba(255, 255, 255, 1)",
              boxShadow: isHoveredPrimary
                ? "0 20px 50px rgba(0, 0, 0, 0.3)"
                : "0 10px 30px rgba(0, 0, 0, 0.2)",
              transform: isHoveredPrimary
                ? "translateY(-2px)"
                : "translateY(0)",
            }}
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ marginRight: "0.6rem" }}
            >
              <path
                d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.67 16 4 13.33 4 10C4 6.67 6.67 4 10 4C13.33 4 16 6.67 16 10C16 13.33 13.33 16 10 16ZM9 7H11V11H9V7ZM9 12H11V14H9V12Z"
                fill="#d4af37"
              />
            </svg>
            <span>Calculate Cost Now</span>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            style={{
              ...styles.buttonSecondary,
              borderColor: isHoveredSecondary
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0.6)",
              color: isHoveredSecondary
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0.9)",
              boxShadow: isHoveredSecondary
                ? "0 0 20px rgba(255, 255, 255, 0.1)"
                : "none",
              transform: isHoveredSecondary
                ? "translateY(-2px)"
                : "translateY(0)",
            }}
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ marginRight: "0.6rem" }}
            >
              <path
                d="M10 1C5.03 1 1 5.03 1 10C1 14.97 5.03 19 10 19C14.97 19 19 14.97 19 10C19 5.03 14.97 1 10 1ZM10 17C6.13 17 3 13.87 3 10C3 6.13 6.13 3 10 3C13.87 3 17 6.13 17 10C17 13.87 13.87 17 10 17ZM10.5 5H9V11L14.2 14.2L15 13.1L10.5 10.2V5Z"
                fill="currentColor"
              />
            </svg>
            <span>Schedule Consultation</span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} style={styles.trustIndicators}>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>✓</span>
            <span style={styles.trustText}>Free Consultation</span>
          </div>
          <div style={styles.trustDivider} />
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>✓</span>
            <span style={styles.trustText}>No Obligations</span>
          </div>
          <div style={styles.trustDivider} />
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>✓</span>
            <span style={styles.trustText}>24-Hour Response</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    padding: "6rem 5rem",
    overflow: "hidden",
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.15,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(244, 229, 195, 0.95) 100%)",
  },

  content: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },

  decorativeLineTop: {
    height: "2px",
    width: "60px",
    background:
      "linear-gradient(90deg, transparent, rgba(10, 10, 10, 0.3), transparent)",
    margin: "0 auto 2rem",
    transformOrigin: "center",
  },

  heading: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    color: "#0a0a0a",
    margin: "0 0 1.5rem",
    letterSpacing: "-1px",
  },

  subtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.8",
    color: "rgba(10, 10, 10, 0.75)",
    margin: "0 0 2rem",
    fontWeight: "300",
    letterSpacing: "0.5px",
  },

  decorativeLineBottom: {
    height: "2px",
    width: "60px",
    background:
      "linear-gradient(90deg, transparent, rgba(10, 10, 10, 0.3), transparent)",
    margin: "0 auto 3rem",
    transformOrigin: "center",
  },

  buttonsContainer: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "3rem",
  },

  buttonPrimary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.3rem 2.8rem",
    background: "rgba(255, 255, 255, 1)",
    color: "#d4af37",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1.05rem",
    cursor: "pointer",
    transition: "all 0.35s ease",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },

  buttonSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.3rem 2.8rem",
    background: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1.05rem",
    cursor: "pointer",
    transition: "all 0.35s ease",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },

  trustIndicators: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(10, 10, 10, 0.15)",
  },

  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    color: "rgba(10, 10, 10, 0.7)",
    fontSize: "0.95rem",
    fontWeight: "500",
  },

  trustIcon: {
    fontSize: "1.1rem",
    color: "#0a0a0a",
    fontWeight: "700",
  },

  trustText: {
    letterSpacing: "0.3px",
  },

  trustDivider: {
    width: "1px",
    height: "20px",
    background: "rgba(10, 10, 10, 0.2)",
  },
};

export default CTA;
