// import React from "react";
// import { motion } from "framer-motion";
// import { fadeUp, zoomIn } from "../animations";

// const Testimonials = () => {
//   const sectionStyle = {
//     padding: "6rem 2rem",
//     background: "#0a0a0a",
//     color: "white",
//   };

//   const containerStyle = {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   };

//   const cardStyle = {
//     padding: "2.5rem",
//     background: "rgba(23,23,23,0.6)",
//     borderRadius: "20px",
//     border: "1px solid rgba(212,175,55,0.25)",
//     backdropFilter: "blur(10px)",
//     transition: "0.35s",
//   };

//   const testimonials = [
//     {
//       name: "Vikram Malhotra",
//       role: "CEO, Tech Ventures",
//       text: "The attention to detail and craftsmanship exceeded our expectations. Our corporate office is now a masterpiece.",
//       avatar: "VM",
//     },
//     {
//       name: "Ananya Kapoor",
//       role: "Luxury Homeowner",
//       text: "From concept to completion, the journey was seamless. They transformed our vision into a stunning reality.",
//       avatar: "AK",
//     },
//   ];

//   return (
//     <section style={sectionStyle}>
//       <div style={containerStyle}>
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           style={{ textAlign: "center", marginBottom: "4rem" }}
//         >
//           <span
//             style={{
//               color: "#d4af37",
//               fontWeight: 700,
//               letterSpacing: "2px",
//             }}
//           >
//             CLIENT STORIES
//           </span>

//           <h2
//             style={{
//               fontSize: "3.4rem",
//               fontWeight: 800,
//               fontFamily: "'Playfair Display', serif",
//               marginBottom: "1rem",
//             }}
//           >
//             What Our Clients Say
//           </h2>
//         </motion.div>

//         {/* Cards Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
//             gap: "2.5rem",
//           }}
//         >
//           {testimonials.map((t, idx) => (
//             <motion.div
//               key={idx}
//               variants={zoomIn}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               style={cardStyle}
//             >
//               {/* Stars */}
//               <div
//                 style={{ display: "flex", gap: "4px", marginBottom: "1.5rem" }}
//               >
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} style={{ color: "#d4af37", fontSize: "20px" }}>
//                     ★
//                   </span>
//                 ))}
//               </div>

//               {/* Text */}
//               <p
//                 style={{
//                   fontSize: "1.15rem",
//                   color: "#cfcfcf",
//                   lineHeight: "1.8",
//                   fontStyle: "italic",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 "{t.text}"
//               </p>

//               {/* Profile */}
//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
//               >
//                 <div
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     borderRadius: "50%",
//                     background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "1.35rem",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {t.avatar}
//                 </div>

//                 <div>
//                   <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>
//                     {t.name}
//                   </div>
//                   <div style={{ color: "#d4af37", fontSize: "0.9rem" }}>
//                     {t.role}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      transition: {
        staggerChildren: 0.15,
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
          CLIENT STORIES
        </div>

        <h2 style={styles.title}>What Our Clients Say</h2>

        <div style={styles.divider} />

        <p style={styles.subtitle}>
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
        {testimonials.map((testimonial, idx) => (
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

            {/* Rating */}
            <div style={styles.ratingContainer}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} style={styles.star}>
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p style={styles.testimonialText}>"{testimonial.text}"</p>

            {/* Divider */}
            <div style={styles.cardDivider} />

            {/* Profile Section */}
            <div style={styles.profileSection}>
              <div style={styles.avatarWrapper}>
                <div style={styles.avatar}>{testimonial.avatar}</div>
              </div>

              <div style={styles.profileInfo}>
                <h4 style={styles.profileName}>{testimonial.name}</h4>
                <p style={styles.profileRole}>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        style={styles.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p style={styles.ctaText}>
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
    background: "#0a0a0a",
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
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },

  cardGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
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
    color: "#d4af37",
    fontSize: "1.2rem",
    fontWeight: "700",
  },

  testimonialText: {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    color: "#d0d0d0",
    margin: "0 0 1.8rem",
    fontStyle: "italic",
    fontWeight: "300",
    letterSpacing: "0.3px",
  },

  cardDivider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
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
    background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
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
    color: "#fff",
    margin: 0,
  },

  profileRole: {
    fontSize: "0.85rem",
    color: "#888",
    margin: 0,
    fontWeight: "500",
  },

  ctaSection: {
    textAlign: "center",
    padding: "3rem",
    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  },

  ctaText: {
    fontSize: "1.2rem",
    color: "#d0d0d0",
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
