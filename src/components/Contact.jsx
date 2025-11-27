import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M4 8C4 5.79 5.79 4 8 4H12.27C12.9 4 13.46 4.37 13.71 4.97L15.84 9.4C16.04 9.82 16.03 10.31 15.8 10.72L13.5 14.67C14.65 16.94 16.94 19.35 19.33 20.5L23.28 18.2C23.69 17.97 24.18 17.96 24.6 18.16L29.03 20.29C29.63 20.54 30 21.1 30 21.73V28C30 30.21 28.21 32 26 32H24C13.51 32 4 22.49 4 12V8Z"
            fill="#d4af37"
          />
        </svg>
      ),
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            x="2"
            y="6"
            width="28"
            height="20"
            rx="2"
            stroke="#d4af37"
            strokeWidth="2"
          />
          <path
            d="M2 8L16 16L30 8"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Email",
      value: "info@luxebuild.com",
      href: "mailto:info@luxebuild.com",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2C9.37 2 4 7.37 4 14C4 23 16 30 16 30S28 23 28 14C28 7.37 22.63 2 16 2ZM16 18C13.24 18 11 15.76 11 13C11 10.24 13.24 8 16 8C18.76 8 21 10.24 21 13C21 15.76 18.76 18 16 18Z"
            fill="#d4af37"
          />
        </svg>
      ),
      label: "Location",
      value: "Sector 50, Gurgaon, India",
      href: "#",
    },
  ];

  const benefits = [
    "10-Year Structural Warranty",
    "On-Time Delivery Guarantee",
    "Transparent Pricing Model",
    "Premium Materials Only",
    "Award-Winning Architects",
    "24/7 Client Support",
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Interior Design",
    "Architectural Design",
  ];

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
            GET IN TOUCH
          </div>

          <h2 style={styles.title}>Let's Build Something Extraordinary</h2>

          <div style={styles.divider} />

          <p style={styles.subtitle}>
            Connect with our project experts and transform your architectural
            vision into reality
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={styles.contentGrid}>
          {/* Left Column - Contact Info */}
          <motion.div
            style={styles.leftColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div style={styles.contactCardsContainer}>
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  style={styles.contactCard}
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={styles.iconWrapper}>{info.icon}</div>
                  <div style={styles.cardContent}>
                    <span style={styles.cardLabel}>{info.label}</span>
                    <span style={styles.cardValue}>{info.value}</span>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={styles.arrowIcon}
                  >
                    <path
                      d="M7 10H13M13 10L10 7M13 10L10 13"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Benefits Box */}
            <motion.div
              style={styles.benefitsBox}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 style={styles.benefitsTitle}>Why Choose Us?</h3>
              <div style={styles.benefitsGrid}>
                {benefits.map((benefit, idx) => (
                  <div key={idx} style={styles.benefitItem}>
                    <div style={styles.checkmark}>✓</div>
                    <span style={styles.benefitText}>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            style={styles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={styles.formWrapper}>
              <h3 style={styles.formTitle}>Send Us a Message</h3>
              <p style={styles.formSubtitle}>
                Fill out the form below and our team will get back to you within
                24 hours
              </p>

              {isSubmitted && (
                <motion.div
                  style={styles.successMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17 6L8 15L3 10"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Thank you! We'll contact you shortly.
                </motion.div>
              )}

              <div style={styles.form} onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div style={styles.formRow}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                {/* Phone & Service */}
                <div style={styles.formRow}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{ ...styles.input, cursor: "pointer" }}
                  >
                    <option value="">Select Service *</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={styles.textarea}
                />

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span style={styles.loadingText}>Processing...</span>
                  ) : (
                    <>
                      <span>Send Request</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={styles.buttonArrow}
                      >
                        <path
                          d="M3 10H17M17 10L12 5M17 10L12 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>

              <p style={styles.disclaimer}>
                We respect your privacy. Your information will be used only for
                project consultation.
              </p>
            </div>
          </motion.div>
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

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "flex-start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  contactCardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "1.8rem",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
  },

  iconWrapper: {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(212, 175, 55, 0.1)",
    borderRadius: "12px",
    flexShrink: 0,
  },

  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },

  cardLabel: {
    fontSize: "0.85rem",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "500",
  },

  cardValue: {
    fontSize: "1.1rem",
    color: "#fff",
    fontWeight: "600",
  },

  arrowIcon: {
    opacity: 0.3,
    transition: "opacity 0.3s ease",
  },

  benefitsBox: {
    padding: "2.5rem",
    background: "rgba(212, 175, 55, 0.06)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "14px",
    backdropFilter: "blur(10px)",
  },

  benefitsTitle: {
    fontSize: "1.6rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#d4af37",
    margin: "0 0 1.5rem",
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  benefitItem: {
    display: "flex",
    gap: "0.8rem",
    alignItems: "flex-start",
  },

  checkmark: {
    color: "#d4af37",
    fontWeight: "700",
    fontSize: "1.2rem",
    flexShrink: 0,
  },

  benefitText: {
    color: "#c0c0c0",
    fontSize: "0.95rem",
    fontWeight: "500",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
  },

  formWrapper: {
    padding: "2.5rem",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  },

  formTitle: {
    fontSize: "1.8rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 0.5rem",
  },

  formSubtitle: {
    fontSize: "0.95rem",
    color: "#888",
    margin: "0 0 1.8rem",
  },

  successMessage: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "1rem 1.2rem",
    background: "rgba(74, 222, 128, 0.1)",
    border: "1px solid rgba(74, 222, 128, 0.3)",
    borderRadius: "8px",
    color: "#4ade80",
    marginBottom: "1.5rem",
    fontSize: "0.95rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  input: {
    padding: "1rem",
    background: "rgba(10, 10, 10, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    outline: "none",
  },

  textarea: {
    padding: "1rem",
    background: "rgba(10, 10, 10, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    resize: "none",
    transition: "all 0.3s ease",
    outline: "none",
    marginBottom: "0.5rem",
  },

  submitButton: {
    padding: "1.2rem",
    background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    transition: "all 0.3s ease",
    letterSpacing: "0.5px",
  },

  loadingText: {
    opacity: 0.8,
  },

  buttonArrow: {
    transition: "transform 0.3s ease",
  },

  disclaimer: {
    fontSize: "0.8rem",
    color: "#666",
    textAlign: "center",
    margin: "1.5rem 0 0",
  },
};

export default Contact;
