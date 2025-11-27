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
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      href: "#",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.25C6.21 22.25 1.75 17.79 1.75 12S6.21 1.75 12 1.75 22.25 6.21 22.25 12 17.79 22.25 12 22.25zm5.387-11.285c-.095-2.01-1.19-3.78-2.906-4.406a4.673 4.673 0 00-2.996 0c-1.715.626-2.811 2.396-2.906 4.406 0 2.01 1.19 3.78 2.906 4.406.995.356 2.001.356 2.996 0 1.715-.626 2.811-2.396 2.906-4.406zm-5.387 3.406c-1.716 0-3.11-1.394-3.11-3.11s1.394-3.11 3.11-3.11 3.11 1.394 3.11 3.11-1.394 3.11-3.11 3.11z" />
        </svg>
      ),
      label: "Instagram",
      href: "#",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 102.856 10.54 9.958 9.958 0 00-2.856-10.54zM8.875 18.633c.712-1.095 1.823-1.957 3.157-2.39 1.334-.432 2.783-.432 4.116 0 1.334.433 2.445 1.295 3.157 2.39.712 1.095 1.068 2.419 1.068 3.789 0 1.37-.356 2.694-1.068 3.789a10 10 0 11-11.5-7.588z" />
        </svg>
      ),
      label: "Twitter",
      href: "#",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.083 0-1.724.722-2.048 1.422-.105.257-.132.615-.132.974v5.409h-3.554s.044-8.789 0-9.714h3.554v1.375c.428-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.576zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.19 0 1.912.753 1.938 1.708 0 .949-.748 1.707-1.986 1.707zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "#",
    },
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
                  {social.icon}
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
                  href="tel:06204203526"
                  style={{
                    ...styles.contactValue,
                    color: hoveredLink === "phone" ? "#d4af37" : "#b5b5b5",
                  }}
                  onMouseEnter={() => setHoveredLink("phone")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  062042 03526
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
                <p style={styles.contactValue}>
                  Gandhi Complex, Station Rd, near BJP Office, Professor Colony,
                  Belbanwa, Motihari, Bihar 845401
                </p>
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
