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

  const T = {
    overlay: isDark ? "bg-black/60" : "bg-white/60",
    text: isDark ? "text-white" : "text-black",
    sub: isDark ? "text-gray-300" : "text-gray-700",
    card: isDark ? "bg-[rgba(20,20,20,0.9)]" : "bg-white/90",
    input: isDark ? "bg-[rgba(40,40,40,0.8)]" : "bg-white",
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <section
      id="contact"
      className="relative flex items-start min-h-screen px-4 py-20 overflow-hidden sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        alt="Construction Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${T.overlay}`} />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 py-3 px-6 rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl uppercase tracking-[1.5px] text-xs sm:text-sm bg-white/10 text-white">
              <span className="text-[#d4af37] text-lg">●</span>
              GET IN TOUCH
            </div>

            {/* Title */}
            <h1
              className={`font-['Playfair_Display'] font-extrabold leading-tight ${T.text}
              text-3xl sm:text-4xl md:text-5xl`}
            >
              Make Your Dream{" "}
              <span className="text-[#d4af37]">Home a Reality</span>
            </h1>

            <p className={`text-base sm:text-lg max-w-md ${T.sub}`}>
              Find inspiration, expertise, and premium craftsmanship to
              transform your architectural vision into reality — all in one
              place.
            </p>

            {/* Highlight Box */}
            <div
              className={`flex gap-4 p-4 sm:p-6 rounded-md border-l-4 border-[#d4af37] ${
                isDark ? "bg-yellow-600/10" : "bg-yellow-600/20"
              }`}
            >
              <svg width="24" height="24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#d4af37"
                  strokeWidth="2"
                />
                <path d="M9 12L11 14L15 10" stroke="#d4af37" strokeWidth="2" />
              </svg>

              <p className={`text-sm sm:text-base leading-relaxed ${T.sub}`}>
                Award-winning architects • On-time delivery • 10-year warranty
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <div
              className={`w-full max-w-md sm:max-w-lg p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border ${T.card} ${T.border}`}
            >
              <h3
                className={`font-['Playfair_Display'] font-bold text-xl sm:text-2xl mb-1 ${T.text}`}
              >
                Send Us a Message
              </h3>

              <p className={`text-sm mb-6 ${T.sub}`}>
                Our team will respond within 24 hours
              </p>

              {/* SUCCESS MESSAGE */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 mb-4 text-sm font-medium text-green-400 border rounded-md border-green-400/40 bg-green-400/10"
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

              {/* FORM */}
              <div className="flex flex-col gap-4">
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-3 rounded-md outline-none ${T.input} ${T.text} ${T.border}`}
                />

                <input
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 rounded-md outline-none ${T.input} ${T.text} ${T.border}`}
                />

                {/* PHONE + SERVICE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`p-3 rounded-md outline-none ${T.input} ${T.text} ${T.border}`}
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`p-3 rounded-md outline-none ${T.input} ${T.text} ${T.border}`}
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
                  className={`p-3 rounded-md outline-none resize-none ${T.input} ${T.text} ${T.border}`}
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

              <p className={`text-xs mt-4 text-center ${T.sub}`}>
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
