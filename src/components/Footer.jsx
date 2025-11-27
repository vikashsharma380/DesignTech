// import React from "react";
// import { motion } from "framer-motion";
// import { fadeUp } from "../animations";

// const Footer = () => {
//   const footerStyle = {
//     backgroundColor: "#0a0a0a",
//     borderTop: "1px solid #262626",
//     padding: "4rem 2rem 2rem",
//     color: "white",
//   };

//   const containerStyle = {
//     maxWidth: "1400px",
//     margin: "0 auto",
//   };

//   const linkStyle = {
//     color: "#b5b5b5",
//     textDecoration: "none",
//     fontSize: "0.95rem",
//     transition: "0.3s",
//   };

//   const linkHover = {
//     color: "#d4af37",
//   };

//   return (
//     <footer style={footerStyle}>
//       <div style={containerStyle}>
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "3rem",
//             marginBottom: "3rem",
//           }}
//         >
//           {/* Brand */}
//           <div style={{ gridColumn: "span 2" }}>
//             <div
//               style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
//             >
//               <div
//                 style={{
//                   width: "48px",
//                   height: "48px",
//                   borderRadius: "12px",
//                   background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "24px",
//                 }}
//               >
//                 🏛️
//               </div>
//               <span
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: 800,
//                   fontFamily: "'Playfair Display', serif",
//                   letterSpacing: "2px",
//                 }}
//               >
//                 LUXE BUILD
//               </span>
//             </div>

//             <p
//               style={{
//                 color: "#737373",
//                 margin: "1.5rem 0",
//                 lineHeight: "1.7",
//                 maxWidth: "500px",
//               }}
//             >
//               India's premier luxury construction company delivering
//               architectural excellence, innovation, and world-class
//               craftsmanship.
//             </p>

//             {/* Social Icons */}
//             <div style={{ display: "flex", gap: "1rem" }}>
//               {["FB", "IN", "TW", "LI"].map((social) => (
//                 <button
//                   key={social}
//                   style={{
//                     width: "44px",
//                     height: "44px",
//                     borderRadius: "12px",
//                     background: "#171717",
//                     border: "1px solid #525252",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#b5b5b5",
//                     fontWeight: "700",
//                     fontSize: "0.8rem",
//                     cursor: "pointer",
//                     transition: "0.3s",
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
//                   onMouseLeave={(e) => (e.target.style.color = "#b5b5b5")}
//                 >
//                   {social}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4
//               style={{
//                 fontSize: "1.15rem",
//                 fontWeight: 700,
//                 marginBottom: "1.2rem",
//               }}
//             >
//               Quick Links
//             </h4>

//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {[
//                 "About Us",
//                 "Services",
//                 "Portfolio",
//                 "Testimonials",
//                 "Careers",
//                 "Blog",
//               ].map((item) => (
//                 <li key={item} style={{ marginBottom: "0.75rem" }}>
//                   <a
//                     href="#"
//                     style={linkStyle}
//                     onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
//                     onMouseLeave={(e) => (e.target.style.color = "#b5b5b5")}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4
//               style={{
//                 fontSize: "1.15rem",
//                 fontWeight: 700,
//                 marginBottom: "1.2rem",
//               }}
//             >
//               Services
//             </h4>

//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {[
//                 "Residential Design",
//                 "Commercial Projects",
//                 "Interior Design",
//                 "Architectural Planning",
//                 "Turnkey Solutions",
//                 "Consultation",
//               ].map((service) => (
//                 <li key={service} style={{ marginBottom: "0.75rem" }}>
//                   <a
//                     href="#"
//                     style={linkStyle}
//                     onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
//                     onMouseLeave={(e) => (e.target.style.color = "#b5b5b5")}
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Bottom Section */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           style={{
//             paddingTop: "2rem",
//             borderTop: "1px solid #262626",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "1.5rem",
//           }}
//         >
//           <p style={{ color: "#737373", fontSize: "0.9rem" }}>
//             © 2025 Luxe Build. All rights reserved.
//           </p>

//           <div style={{ display: "flex", gap: "2rem" }}>
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   style={linkStyle}
//                   onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
//                   onMouseLeave={(e) => (e.target.style.color = "#b5b5b5")}
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerLinks = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const services = [
    { name: "Residential Design", href: "#" },
    { name: "Commercial Projects", href: "#" },
    { name: "Interior Design", href: "#" },
    { name: "Architectural Planning", href: "#" },
    { name: "Turnkey Solutions", href: "#" },
    { name: "Consultation", href: "#" },
  ];

  const socialLinks = [
    { icon: "f", label: "Facebook", href: "#" },
    { icon: "in", label: "Instagram", href: "#" },
    { icon: "tw", label: "Twitter", href: "#" },
    { icon: "in", label: "LinkedIn", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Footer Content */}
        <motion.div
          style={styles.mainContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} style={styles.brandSection}>
            <div style={styles.logoWrapper}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                style={styles.logoIcon}
              >
                <rect
                  x="6"
                  y="12"
                  width="36"
                  height="30"
                  rx="2"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 18H42M14 12V42M34 12V42M24 18V30"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
                <circle cx="24" cy="24" r="2" fill="#d4af37" />
              </svg>
              <span style={styles.brandName}>DESIGNTECH</span>
            </div>

            <p style={styles.brandDescription}>
              India's premier design and construction company delivering
              architectural excellence, innovation, and world-class
              craftsmanship.
            </p>

            {/* Social Links */}
            <div style={styles.socialLinks}>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  title={social.label}
                  style={{
                    ...styles.socialIcon,
                    borderColor:
                      hoveredSocial === idx
                        ? "rgba(212, 175, 55, 0.4)"
                        : "rgba(212, 175, 55, 0.15)",
                    color: hoveredSocial === idx ? "#d4af37" : "#666",
                  }}
                  onMouseEnter={() => setHoveredSocial(idx)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h4 style={styles.columnTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              {footerLinks.map((link, idx) => (
                <li key={idx} style={styles.linkItem}>
                  <motion.a
                    href={link.href}
                    style={{
                      ...styles.link,
                      color:
                        hoveredLink === `footer-${idx}` ? "#d4af37" : "#888",
                    }}
                    onMouseEnter={() => setHoveredLink(`footer-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span style={styles.linkArrow}>→</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h4 style={styles.columnTitle}>Services</h4>
            <ul style={styles.linkList}>
              {services.map((service, idx) => (
                <li key={idx} style={styles.linkItem}>
                  <motion.a
                    href={service.href}
                    style={{
                      ...styles.link,
                      color:
                        hoveredLink === `service-${idx}` ? "#d4af37" : "#888",
                    }}
                    onMouseEnter={() => setHoveredLink(`service-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span style={styles.linkArrow}>→</span>
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h4 style={styles.columnTitle}>Contact</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Phone</span>
                <a
                  href="tel:+919876543210"
                  style={{
                    ...styles.contactValue,
                    color: hoveredLink === "phone" ? "#d4af37" : "#b5b5b5",
                  }}
                  onMouseEnter={() => setHoveredLink("phone")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  +91 98765 43210
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Email</span>
                <a
                  href="mailto:info@designtech.com"
                  style={{
                    ...styles.contactValue,
                    color: hoveredLink === "email" ? "#d4af37" : "#b5b5b5",
                  }}
                  onMouseEnter={() => setHoveredLink("email")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  info@designtech.com
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Location</span>
                <p style={styles.contactValue}>Sector 50, Gurgaon, India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          style={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          style={styles.bottomSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p style={styles.copyright}>
            © 2025 DesignTech. All rights reserved.
          </p>

          <div style={styles.legalLinks}>
            {legalLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                style={{
                  ...styles.legalLink,
                  color: hoveredLink === `legal-${idx}` ? "#d4af37" : "#666",
                }}
                onMouseEnter={() => setHoveredLink(`legal-${idx}`)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    position: "relative",
    background: "#0a0a0a",
    borderTop: "1px solid rgba(212, 175, 55, 0.1)",
    padding: "5rem 5rem 2rem",
    color: "#fff",
    overflow: "hidden",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },

  mainContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1.2fr 1.2fr 1.2fr",
    gap: "3rem",
    marginBottom: "3rem",
  },

  brandSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "0.5rem",
  },

  logoIcon: {
    filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.2))",
  },

  brandName: {
    fontSize: "1.6rem",
    fontWeight: "800",
    fontFamily: '"Playfair Display", serif',
    letterSpacing: "2px",
    color: "#fff",
  },

  brandDescription: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "#888",
    margin: "0",
    fontWeight: "300",
  },

  socialLinks: {
    display: "flex",
    gap: "0.8rem",
  },

  socialIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "0.8rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  columnTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#fff",
    margin: "0",
    letterSpacing: "0.5px",
  },

  linkList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },

  linkItem: {
    margin: "0",
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    color: "#888",
  },

  linkArrow: {
    opacity: 0.4,
    fontSize: "0.85rem",
  },

  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  contactItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  contactLabel: {
    fontSize: "0.8rem",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "600",
  },

  contactValue: {
    fontSize: "0.95rem",
    color: "#b5b5b5",
    transition: "color 0.3s ease",
    textDecoration: "none",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
    margin: "2rem 0",
    transformOrigin: "center",
  },

  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
    paddingTop: "1rem",
  },

  copyright: {
    fontSize: "0.9rem",
    color: "#666",
    margin: "0",
  },

  legalLinks: {
    display: "flex",
    gap: "2rem",
  },

  legalLink: {
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
    color: "#666",
  },
};

export default Footer;
