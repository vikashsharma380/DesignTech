// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     {
//       icon: (
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//           <path
//             d="M30 5L55 15V45L30 55L5 45V15L30 5Z"
//             stroke="#d4af37"
//             strokeWidth="1.5"
//           />
//           <path
//             d="M30 5V55M30 15L5 25M30 15L55 25M5 25V45M55 25V45M5 45L30 55L55 45"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.5"
//           />
//         </svg>
//       ),
//       title: "Architectural Design",
//       desc: "Timeless architectural concepts crafted with precision and global aesthetics.",
//       number: "01",
//     },
//     {
//       icon: (
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//           <rect
//             x="10"
//             y="15"
//             width="40"
//             height="35"
//             stroke="#d4af37"
//             strokeWidth="1.5"
//           />
//           <path
//             d="M10 28H50M28 15V50M42 15V50"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.5"
//           />
//           <path d="M20 8L25 15M40 8L35 15" stroke="#d4af37" strokeWidth="1.5" />
//         </svg>
//       ),
//       title: "Luxury Residences",
//       desc: "World-class homes designed with exceptional craftsmanship and detail.",
//       number: "02",
//     },
//     {
//       icon: (
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//           <circle cx="30" cy="30" r="22" stroke="#d4af37" strokeWidth="1.5" />
//           <path
//             d="M30 8V52M8 30H52M18 18L42 42M42 18L18 42"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.5"
//           />
//           <circle
//             cx="30"
//             cy="30"
//             r="8"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.3"
//           />
//         </svg>
//       ),
//       title: "Interior Excellence",
//       desc: "Premium interior compositions blending luxury materials & modern sensibilities.",
//       number: "03",
//     },
//     {
//       icon: (
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//           <path d="M15 45L30 15L45 45H15Z" stroke="#d4af37" strokeWidth="1.5" />
//           <line
//             x1="30"
//             y1="15"
//             x2="30"
//             y2="45"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.5"
//           />
//           <line
//             x1="20"
//             y1="35"
//             x2="40"
//             y2="35"
//             stroke="#d4af37"
//             strokeWidth="1"
//             opacity="0.5"
//           />
//           <rect
//             x="25"
//             y="45"
//             width="10"
//             height="8"
//             stroke="#d4af37"
//             strokeWidth="1.5"
//           />
//         </svg>
//       ),
//       title: "Turnkey Execution",
//       desc: "End-to-end management with absolute transparency and assured delivery.",
//       number: "04",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section style={styles.servicesSection}>
//       {/* Section Header */}
//       <motion.div
//         style={styles.headerContainer}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div style={styles.badge}>
//           <span style={styles.badgeDot}>●</span>
//           OUR EXPERTISE
//         </div>

//         <h2 style={styles.sectionTitle}>What We Offer</h2>

//         <div style={styles.divider} />

//         <p style={styles.sectionDescription}>
//           Premium Design & Build Services. Curated expertise tailored to elevate
//           your residential, commercial, and luxury spaces with uncompromising
//           quality.
//         </p>
//       </motion.div>

//       {/* Services Grid */}
//       <motion.div
//         style={styles.servicesGrid}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {services.map((srv, i) => (
//           <motion.div
//             key={i}
//             variants={itemVariants}
//             style={styles.serviceCard}
//             onMouseEnter={() => setHoveredIndex(i)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//           >
//             {/* Card Background Glow */}
//             <div
//               style={{
//                 ...styles.cardGlow,
//                 opacity: hoveredIndex === i ? 1 : 0,
//               }}
//             />

//             {/* Number Badge */}
//             <div style={styles.numberBadge}>{srv.number}</div>

//             {/* Icon */}
//             <div style={styles.iconContainer}>
//               <span style={styles.icon}>{srv.icon}</span>
//             </div>

//             {/* Title */}
//             <h3 style={styles.serviceTitle}>{srv.title}</h3>

//             {/* Description */}
//             <p style={styles.serviceDesc}>{srv.desc}</p>

//             {/* Hover Line */}
//             <motion.div
//               style={{
//                 ...styles.hoverLine,
//                 scaleX: hoveredIndex === i ? 1 : 0,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// const styles = {
//   servicesSection: {
//     position: "relative",
//     padding: "8rem 5rem",
//     background: "#0a0a0a",
//     overflow: "hidden",
//   },

//   headerContainer: {
//     textAlign: "center",
//     maxWidth: "800px",
//     margin: "0 auto 5rem",
//   },

//   badge: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "0.8rem",
//     padding: "1rem 2.2rem",
//     background: "rgba(255, 255, 255, 0.05)",
//     border: "1px solid rgba(212, 175, 55, 0.3)",
//     borderRadius: "60px",
//     fontSize: "0.85rem",
//     color: "#fff",
//     letterSpacing: "1.5px",
//     fontWeight: "500",
//     backdropFilter: "blur(20px)",
//     textTransform: "uppercase",
//     marginBottom: "2rem",
//   },

//   badgeDot: {
//     color: "#d4af37",
//     fontSize: "1.2rem",
//   },

//   sectionTitle: {
//     fontSize: "3.5rem",
//     lineHeight: "1.2",
//     margin: "0 0 2rem",
//     fontFamily: '"Playfair Display", serif',
//     fontWeight: "800",
//     color: "#fff",
//     letterSpacing: "-1px",
//   },

//   divider: {
//     height: "1.5px",
//     width: "80px",
//     background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
//     margin: "2rem auto",
//     boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)",
//   },

//   sectionDescription: {
//     fontSize: "1.15rem",
//     lineHeight: "1.8",
//     color: "#d0d0d0",
//     maxWidth: "700px",
//     margin: "0 auto",
//     fontWeight: "300",
//     letterSpacing: "0.8px",
//   },

//   servicesGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "2.5rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },

//   serviceCard: {
//     position: "relative",
//     padding: "2.5rem",
//     background: "rgba(255, 255, 255, 0.02)",
//     border: "1px solid rgba(212, 175, 55, 0.1)",
//     borderRadius: "12px",
//     backdropFilter: "blur(10px)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   },

//   cardGlow: {
//     position: "absolute",
//     inset: "0",
//     background:
//       "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
//     borderRadius: "12px",
//     pointerEvents: "none",
//     transition: "opacity 0.3s ease",
//   },

//   numberBadge: {
//     fontSize: "3rem",
//     fontFamily: '"Playfair Display", serif',
//     fontWeight: "700",
//     background: "linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     opacity: 0.3,
//     marginBottom: "1rem",
//     lineHeight: "1",
//   },

//   iconContainer: {
//     marginBottom: "1.5rem",
//   },

//   icon: {
//     fontSize: "3.5rem",
//     display: "inline-block",
//     filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))",
//   },

//   serviceTitle: {
//     fontSize: "1.5rem",
//     fontFamily: '"Playfair Display", serif',
//     fontWeight: "700",
//     color: "#fff",
//     margin: "0 0 1rem",
//     letterSpacing: "-0.5px",
//   },

//   serviceDesc: {
//     fontSize: "1rem",
//     lineHeight: "1.7",
//     color: "#b0b0b0",
//     margin: "0",
//     fontWeight: "300",
//     letterSpacing: "0.5px",
//   },

//   hoverLine: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     right: "0",
//     height: "2px",
//     background: "linear-gradient(90deg, #d4af37, transparent)",
//     transformOrigin: "left",
//   },
// };

// export default Services;
import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M30 5L55 15V45L30 55L5 45V15L30 5Z"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M30 5V55M30 15L5 25M30 15L55 25M5 25V45M55 25V45M5 45L30 55L55 45"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      ),
      title: "Architectural Design",
      desc: "Timeless architectural concepts crafted with precision and global aesthetics.",
      number: "01",
      image:
        "https://images.unsplash.com/photo-1541123603104-852fc5d33dff?w=600&h=400&fit=crop",
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect
            x="10"
            y="15"
            width="40"
            height="35"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M10 28H50M28 15V50M42 15V50"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <path d="M20 8L25 15M40 8L35 15" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      ),
      title: "Luxury Residences",
      desc: "World-class homes designed with exceptional craftsmanship and detail.",
      number: "02",
      image:
        "https://images.unsplash.com/photo-1512917774080-9b274b90bad0?w=600&h=400&fit=crop",
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" stroke="#d4af37" strokeWidth="1.5" />
          <path
            d="M30 8V52M8 30H52M18 18L42 42M42 18L18 42"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="30"
            cy="30"
            r="8"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      ),
      title: "Interior Excellence",
      desc: "Premium interior compositions blending luxury materials & modern sensibilities.",
      number: "03",
      image:
        "https://images.unsplash.com/photo-1565183938294-e3a7f3d66b12?w=600&h=400&fit=crop",
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M15 45L30 15L45 45H15Z" stroke="#d4af37" strokeWidth="1.5" />
          <line
            x1="30"
            y1="15"
            x2="30"
            y2="45"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="20"
            y1="35"
            x2="40"
            y2="35"
            stroke="#d4af37"
            strokeWidth="1"
            opacity="0.5"
          />
          <rect
            x="25"
            y="45"
            width="10"
            height="8"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Turnkey Execution",
      desc: "End-to-end management with absolute transparency and assured delivery.",
      number: "04",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
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
    <section style={styles.servicesSection}>
      {/* Section Header */}
      <motion.div
        style={styles.headerContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={styles.badge}>
          <span style={styles.badgeDot}>●</span>
          OUR EXPERTISE
        </div>

        <h2 style={styles.sectionTitle}>What We Offer</h2>

        <div style={styles.divider} />

        <p style={styles.sectionDescription}>
          Premium Design & Build Services. Curated expertise tailored to elevate
          your residential, commercial, and luxury spaces with uncompromising
          quality.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        style={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((srv, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={styles.serviceCard}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Image Container */}
            <div style={styles.imageContainer}>
              <img
                src={srv.image}
                alt={srv.title}
                style={{
                  ...styles.serviceImage,
                  opacity: hoveredIndex === i ? 1 : 0.6,
                }}
              />
              <div
                style={{
                  ...styles.imageOverlay,
                  opacity: hoveredIndex === i ? 0.4 : 0.7,
                }}
              />
            </div>

            {/* Card Content */}
            <div style={styles.cardContent}>
              {/* Card Background Glow */}
              <div
                style={{
                  ...styles.cardGlow,
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              />

              {/* Number Badge */}
              <div style={styles.numberBadge}>{srv.number}</div>

              {/* Icon */}
              <div style={styles.iconContainer}>
                <span style={styles.icon}>{srv.icon}</span>
              </div>

              {/* Title */}
              <h3 style={styles.serviceTitle}>{srv.title}</h3>

              {/* Description */}
              <p style={styles.serviceDesc}>{srv.desc}</p>

              {/* Hover Line */}
              <motion.div
                style={{
                  ...styles.hoverLine,
                  scaleX: hoveredIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  servicesSection: {
    position: "relative",
    padding: "8rem 5rem",
    background: "#0a0a0a",
    overflow: "hidden",
  },

  headerContainer: {
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

  sectionTitle: {
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

  sectionDescription: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: "#d0d0d0",
    maxWidth: "700px",
    margin: "0 auto",
    fontWeight: "300",
    letterSpacing: "0.8px",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  serviceCard: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.1)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: "220px",
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
  },

  serviceImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "opacity 0.3s ease",
    display: "block",
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(10, 10, 10, 0.5)",
    transition: "opacity 0.3s ease",
    zIndex: 1,
  },

  cardContent: {
    position: "relative",
    padding: "2.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  cardGlow: {
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
    borderRadius: "12px",
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  },

  numberBadge: {
    display: "none",
  },

  iconContainer: {
    display: "none",
  },

  icon: {
    fontSize: "3.5rem",
    display: "inline-block",
    filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))",
  },

  serviceTitle: {
    fontSize: "1.5rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 1rem",
    letterSpacing: "-0.5px",
  },

  serviceDesc: {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#b0b0b0",
    margin: "0",
    fontWeight: "300",
    letterSpacing: "0.5px",
    flex: 1,
  },

  hoverLine: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    height: "2px",
    background: "linear-gradient(90deg, #d4af37, transparent)",
    transformOrigin: "left",
  },
};

export default Services;
