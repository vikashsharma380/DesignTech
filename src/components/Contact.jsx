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

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Interior Design",
    "Architectural Design",
  ];

  return (
    <section style={styles.section}>
      {/* Background Image with Overlay */}
      <div style={styles.backgroundOverlay} />
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        alt="Construction Background"
        style={styles.backgroundImage}
      />

      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          {/* Left Side - Text Content */}
          <motion.div
            style={styles.leftContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={styles.badge}>
                <span style={styles.badgeDot}>●</span>
                GET IN TOUCH
              </div>

              <h1 style={styles.mainTitle}>
                Make Your Dream
                <span style={styles.highlight}> Home a Reality</span>
              </h1>

              <p style={styles.mainSubtitle}>
                Find inspiration, expertise and premium craftsmanship to
                transform your architectural vision into reality — all in one
                place
              </p>

              <div style={styles.highlightBox}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={styles.highlightIcon}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#d4af37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p style={styles.highlightText}>
                  Award-winning architects • On-time delivery • 10-year warranty
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            style={styles.rightContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={styles.formCard}>
              <h3 style={styles.formTitle}>Send Us a Message</h3>
              <p style={styles.formSubtitle}>
                Our team will respond within 24 hours
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

              <div style={styles.form}>
                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.2)")
                    }
                  />
                </div>

                <div style={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.2)")
                    }
                  />
                </div>

                <div style={styles.formRow}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.2)")
                    }
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.2)")
                    }
                  >
                    <option value="">Select Service *</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    style={styles.textarea}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(212, 175, 55, 0.2)")
                    }
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Get Started</span>
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
                We respect your privacy. Information used for consultation only.
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
    padding: "6rem 5rem",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.65)",
    zIndex: 1,
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
    position: "relative",
    zIndex: 2,
  },

  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "flex-start",
  },

  leftContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
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
    marginBottom: "1rem",
    width: "fit-content",
  },

  badgeDot: {
    color: "#d4af37",
    fontSize: "1.2rem",
  },

  mainTitle: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    color: "#fff",
    margin: 0,
    letterSpacing: "-1px",
  },

  highlight: {
    color: "#d4af37",
    display: "block",
  },

  mainSubtitle: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: "#d0d0d0",
    margin: "1.5rem 0 0",
    fontWeight: "300",
    letterSpacing: "0.8px",
    maxWidth: "500px",
  },

  highlightBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.2rem",
    padding: "1.8rem",
    background: "rgba(212, 175, 55, 0.1)",
    borderLeft: "3px solid #d4af37",
    borderRadius: "8px",
    marginTop: "2rem",
    backdropFilter: "blur(10px)",
  },

  highlightIcon: {
    flexShrink: 0,
    marginTop: "0.2rem",
  },

  highlightText: {
    fontSize: "0.95rem",
    color: "#e0e0e0",
    margin: 0,
    fontWeight: "500",
    lineHeight: "1.6",
  },

  rightContent: {
    display: "flex",
    justifyContent: "center",
  },

  formCard: {
    padding: "2.8rem",
    background: "rgba(20, 20, 20, 0.9)",
    borderRadius: "12px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    maxWidth: "580px",
    width: "100%",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    backdropFilter: "blur(10px)",
  },

  formTitle: {
    fontSize: "1.8rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 0.5rem",
    letterSpacing: "-0.5px",
  },

  formSubtitle: {
    fontSize: "0.95rem",
    color: "#b0b0b0",
    margin: "0 0 1.8rem",
    fontWeight: "400",
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
    fontWeight: "500",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  input: {
    padding: "0.95rem 1rem",
    background: "rgba(40, 40, 40, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    outline: "none",
  },

  textarea: {
    padding: "0.95rem 1rem",
    background: "rgba(40, 40, 40, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    resize: "none",
    transition: "all 0.3s ease",
    outline: "none",
  },

  submitButton: {
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
    border: "none",
    borderRadius: "6px",
    color: "#000",
    fontWeight: "700",
    fontSize: "0.95rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    transition: "all 0.3s ease",
    letterSpacing: "0.5px",
    marginTop: "0.5rem",
  },

  buttonArrow: {
    transition: "transform 0.3s ease",
  },

  disclaimer: {
    fontSize: "0.8rem",
    color: "#666",
    textAlign: "center",
    margin: "1.2rem 0 0",
    fontWeight: "400",
  },
};

export default Contact;
