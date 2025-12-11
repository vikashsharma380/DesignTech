import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    bg: isLight ? "#ffffff" : "#0a0a0a",
    cardBg: isLight ? "#ffffff" : "rgba(255,255,255,0.02)",
    text: isLight ? "#000" : "#fff",
    subText: isLight ? "#444" : "#d0d0d0",
    border: isLight ? "rgba(212, 175, 55, 0.25)" : "rgba(212, 175, 55, 0.12)",
    divider: isLight ? "rgba(212,175,55,0.35)" : "rgba(212,175,55,0.2)",
    badgeBg: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
    badgeText: isLight ? "#000" : "#fff",
    overlayGlow: isLight ? "rgba(212,175,55,0.15)" : "rgba(212,175,55,0.12)",
    ctaBg: isLight
      ? "linear-gradient(135deg, rgba(212,175,55,0.15), transparent)"
      : "linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)",
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
      style={{
        ...styles.section,
        background: colors.bg,
      }}
    >
      {/* Header */}
      <motion.div
        style={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            ...styles.badge,
            background: colors.badgeBg,
            color: colors.badgeText,
            border: `1px solid ${colors.border}`,
          }}
        >
          <span style={{ ...styles.badgeDot, color: colors.gold }}>●</span>
          CLIENT STORIES
        </div>

        <h2 style={{ ...styles.title, color: colors.text }}>
          What Our Clients Say
        </h2>

        <div
          style={{
            ...styles.divider,
            background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
          }}
        />

        <p style={{ ...styles.subtitle, color: colors.subText }}>
          Hear from the satisfied clients who have transformed their visions
          into architectural masterpieces with DesignTech
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        style={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            style={{
              ...styles.card,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Glow */}
            <div
              style={{
                ...styles.cardGlow,
                background: `radial-gradient(circle at center, ${colors.overlayGlow} 0%, transparent 70%)`,
                opacity: hoveredIndex === idx ? 1 : 0,
              }}
            />

            {/* Rating */}
            <div style={styles.ratingContainer}>
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} style={{ ...styles.star, color: colors.gold }}>
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p style={{ ...styles.testimonialText, color: colors.subText }}>
              "{t.text}"
            </p>

            <div
              style={{
                ...styles.cardDivider,
                background: `linear-gradient(90deg, transparent, ${colors.divider}, transparent)`,
              }}
            />

            {/* Profile */}
            <div style={styles.profileSection}>
              <div style={styles.avatarWrapper}>
                <div
                  style={{
                    ...styles.avatar,
                    background: `linear-gradient(135deg, ${colors.gold}, #f4e5c3)`,
                  }}
                >
                  {t.avatar}
                </div>
              </div>

              <div style={styles.profileInfo}>
                <h4 style={{ ...styles.profileName, color: colors.text }}>
                  {t.name}
                </h4>
                <p style={{ ...styles.profileRole, color: colors.subText }}>
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        style={{
          ...styles.ctaSection,
          background: colors.ctaBg,
          border: `1px solid ${colors.border}`,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p style={{ ...styles.ctaText, color: colors.subText }}>
          Join hundreds of satisfied clients who have realized their
          architectural dreams with DesignTech
        </p>

        <motion.button
          style={styles.ctaButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Project Today →
        </motion.button>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    padding: "8rem 5rem",
    overflow: "hidden",
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
    borderRadius: "60px",
    fontSize: "0.85rem",
    letterSpacing: "1.5px",
    fontWeight: "500",
    backdropFilter: "blur(20px)",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },

  badgeDot: {
    fontSize: "1.2rem",
  },

  title: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    margin: "0 0 2rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    letterSpacing: "-1px",
  },

  divider: {
    height: "1.5px",
    width: "80px",
    margin: "2rem auto",
    boxShadow: "0 0 15px rgba(212,175,55,0.5)",
  },

  subtitle: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    margin: 0,
    fontWeight: "300",
    letterSpacing: "0.8px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2.5rem",
    marginBottom: "4rem",
  },

  card: {
    position: "relative",
    padding: "2.5rem",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },

  cardGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: "14px",
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  },

  ratingContainer: {
    display: "flex",
    gap: "0.4rem",
    marginBottom: "1.5rem",
  },

  star: {
    fontSize: "1.2rem",
    fontWeight: "700",
  },

  testimonialText: {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    margin: "0 0 1.8rem",
    fontStyle: "italic",
    fontWeight: "300",
    letterSpacing: "0.3px",
  },

  cardDivider: {
    height: "1px",
    margin: "1.8rem 0",
  },

  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    marginTop: "auto",
  },

  avatarWrapper: {
    flexShrink: 0,
  },

  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#000",
    boxShadow: "0 4px 12px rgba(212, 175, 55, 0.2)",
  },

  profileInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },

  profileName: {
    fontSize: "1.05rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    margin: 0,
  },

  profileRole: {
    fontSize: "0.85rem",
    margin: 0,
    fontWeight: "500",
  },

  ctaSection: {
    textAlign: "center",
    padding: "3rem",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  },

  ctaText: {
    fontSize: "1.2rem",
    margin: "0 0 2rem",
    fontWeight: "300",
    lineHeight: "1.7",
  },

  ctaButton: {
    padding: "1.1rem 2.5rem",
    background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "700",
    fontSize: "0.95rem",
    cursor: "pointer",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },
};

export default Testimonials;
