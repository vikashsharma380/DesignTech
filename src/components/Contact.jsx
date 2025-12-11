import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ theme = "dark" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDark = theme === "dark";

  // THEME TOKENS
  const T = {
    pageOverlay: isDark ? "bg-black/60" : "bg-white/60",
    textMain: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-gray-300" : "text-gray-700",
    cardBg: isDark ? "bg-[rgba(20,20,20,0.9)]" : "bg-white/90",
    inputBg: isDark ? "bg-[rgba(40,40,40,0.8)]" : "bg-white/95",
    border: isDark
      ? "border-[rgba(212,175,55,0.2)]"
      : "border-[rgba(212,175,55,0.35)]",
  };

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Interior Design",
    "Architectural Design",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen py-24 px-10 flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        alt="Construction Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${T.pageOverlay}`}></div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 py-4 px-8 rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl uppercase tracking-[1.5px] text-sm bg-white/5 text-white">
              <span className="text-[#d4af37] text-lg">●</span>
              GET IN TOUCH
            </div>

            {/* Title */}
            <h1
              className={`text-5xl font-extrabold font-['Playfair_Display'] leading-tight ${T.textMain}`}
            >
              Make Your Dream
              <span className="text-[#d4af37] block">Home a Reality</span>
            </h1>

            <p
              className={`text-lg leading-relaxed max-w-md ${T.textSecondary}`}
            >
              Find inspiration, expertise and premium craftsmanship to transform
              your architectural vision into reality — all in one place.
            </p>

            {/* Highlight Box */}
            <div
              className={`flex gap-4 p-6 rounded-md border-l-4 border-[#d4af37] ${
                isDark ? "bg-yellow-600/10" : "bg-yellow-600/20"
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#d4af37"
                  strokeWidth="2"
                />
                <path d="M9 12L11 14L15 10" stroke="#d4af37" strokeWidth="2" />
              </svg>
              <p className={`text-sm leading-relaxed ${T.textSecondary}`}>
                Award-winning architects • On-time delivery • 10-year warranty
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div
              className={`w-full max-w-lg p-10 rounded-xl shadow-2xl border ${T.cardBg} ${T.border}`}
            >
              <h3
                className={`text-2xl font-['Playfair_Display'] font-bold mb-1 ${T.textMain}`}
              >
                Send Us a Message
              </h3>
              <p className={`text-sm mb-6 ${T.textSecondary}`}>
                Our team will respond within 24 hours
              </p>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-md border border-green-400/40 bg-green-400/10 text-green-400 mb-4 text-sm font-medium"
                >
                  <svg width="20" height="20">
                    <path
                      d="M17 6L8 15L3 10"
                      stroke="#4ade80"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Thank you! We'll contact you shortly.
                </motion.div>
              )}

              {/* Form */}
              <div className="flex flex-col gap-4">
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-3 rounded-md outline-none ${T.inputBg} ${T.textMain} ${T.border}`}
                />

                <input
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 rounded-md outline-none ${T.inputBg} ${T.textMain} ${T.border}`}
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`p-3 rounded-md outline-none ${T.inputBg} ${T.textMain} ${T.border}`}
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`p-3 rounded-md outline-none ${T.inputBg} ${T.textMain} ${T.border}`}
                  >
                    <option value="">Select Service *</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`p-3 rounded-md outline-none resize-none ${T.inputBg} ${T.textMain} ${T.border}`}
                />

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="py-3 px-6 rounded-md bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] font-bold text-black uppercase tracking-wide mt-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isLoading ? "Processing..." : "Get Started →"}
                </motion.button>
              </div>

              <p className={`text-xs mt-4 text-center ${T.textSecondary}`}>
                We respect your privacy. Information used for consultation only.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
