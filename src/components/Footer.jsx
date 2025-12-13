import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = ({ theme = "dark" }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const isDark = theme === "dark";

  const T = {
    bg: isDark ? "bg-[#0a0a0a]" : "bg-white",
    borderColor: isDark ? "rgba(212,175,55,0.1)" : "rgba(212,175,55,0.25)",
    textMain: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-[#888]" : "text-[#444]",
    textMuted: isDark ? "text-[#666]" : "text-[#777]",
    cardText: isDark ? "text-[#b5b5b5]" : "text-[#444]",
    socialIcon: isDark ? "#b5b5b5" : "#333",
    gold: "#d4af37",
  };

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

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.25C6.21 22.25 1.75 17.79 1.75 12S6.21 1.75 12 1.75 22.25 6.21 22.25 12 17.79 22.25 12 22.25zm5.387-11.285c-.095-2.01-1.19-3.78-2.906-4.406a4.673 4.673 0 00-2.996 0c-1.715.626-2.811 2.396-2.906 4.406 0 2.01 1.19 3.78 2.906 4.406.995.356 2.001.356 2.996 0 1.715-.626 2.811-2.396 2.906-4.406zm-5.387 3.406c-1.716 0-3.11-1.394-3.11-3.11s1.394-3.11 3.11-3.11 3.11 1.394 3.11 3.11-1.394 3.11-3.11 3.11z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 102.856 10.54 9.958 9.958 0 00-2.856-10.54zM8.875 18.633c.712-1.095 1.823-1.957 3.157-2.39 1.334-.432 2.783-.432 4.116 0 1.334.433 2.445 1.295 3.157 2.39.712 1.095 1.068 2.419 1.068 3.789 0 1.37-.356 2.694-1.068 3.789a10 10 0 11-11.5-7.588z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.083 0-1.724.722-2.048 1.422-.105.257-.132.615-.132.974v5.409h-3.554s.044-8.789 0-9.714h3.554v1.375c.428-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.576zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.19 0 1.912.753 1.938 1.708 0 .949-.748 1.707-1.986 1.707zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`${T.bg} border-t`}
      style={{ borderColor: T.borderColor }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Grid: brand + 3 columns (collapses on small screens) */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4 md:gap-12">
          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-start gap-4">
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                className="flex-shrink-0"
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

              <div>
                <div
                  className={`font-extrabold tracking-[2px] text-[1.15rem] ${T.textMain}`}
                >
                  DESIGNTECH
                </div>

                <p
                  className={`mt-3 text-sm leading-relaxed ${T.textSecondary}`}
                >
                  India's premier design and construction company delivering
                  architectural excellence, innovation, and world-class
                  craftsmanship.
                </p>

                <div className="flex gap-3 mt-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      title={social.label}
                      onMouseEnter={() => setHoveredSocial(idx)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className="flex items-center justify-center w-10 h-10 transition-all border rounded-lg"
                      style={{
                        borderColor:
                          hoveredSocial === idx
                            ? "rgba(212,175,55,0.45)"
                            : T.borderColor,
                        color: hoveredSocial === idx ? T.gold : T.socialIcon,
                      }}
                      whileHover={{ scale: 1.06, y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-1">
            <h4 className={`text-sm font-semibold mb-4 ${T.textMain}`}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={link.href}
                    className={`flex items-center gap-2 text-sm ${T.textSecondary}`}
                    onMouseEnter={() => setHoveredLink(`footer-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ x: 6 }}
                    style={{
                      color:
                        hoveredLink === `footer-${idx}` ? T.gold : undefined,
                    }}
                  >
                    <span className="opacity-40 text-[0.85rem]">→</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-1">
            <h4 className={`text-sm font-semibold mb-4 ${T.textMain}`}>
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <motion.a
                    href={service.href}
                    className={`flex items-center gap-2 text-sm ${T.textSecondary}`}
                    onMouseEnter={() => setHoveredLink(`service-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ x: 6 }}
                    style={{
                      color:
                        hoveredLink === `service-${idx}` ? T.gold : undefined,
                    }}
                  >
                    <span className="opacity-40 text-[0.85rem]">→</span>
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-1">
            <h4 className={`text-sm font-semibold mb-4 ${T.textMain}`}>
              Contact
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <div
                  className="text-[0.75rem] uppercase tracking-wider font-semibold"
                  style={{ color: T.textMuted }}
                >
                  Phone
                </div>
                <a
                  href="tel:06204203526"
                  className="block mt-1"
                  onMouseEnter={() => setHoveredLink("phone")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: hoveredLink === "phone" ? T.gold : T.cardText,
                  }}
                >
                  062042 03526
                </a>
              </div>

              <div>
                <div
                  className="text-[0.75rem] uppercase tracking-wider font-semibold"
                  style={{ color: T.textMuted }}
                >
                  Email
                </div>
                <a
                  href="mailto:info@designtech.com"
                  className="block mt-1"
                  onMouseEnter={() => setHoveredLink("email")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: hoveredLink === "email" ? T.gold : T.cardText,
                  }}
                >
                  info@designtech.com
                </a>
              </div>

              <div>
                <div
                  className="text-[0.75rem] uppercase tracking-wider font-semibold"
                  style={{ color: T.textMuted }}
                >
                  Location
                </div>
                <p className="mt-1 text-sm" style={{ color: T.cardText }}>
                  Gandhi Complex, Station Road, Near BJP Office, Professor
                  Colony, Belbanwa, Motihari, Bihar 845401
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px my-6"
          style={{
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent)"
              : "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-sm" style={{ color: T.textMuted }}>
            © {new Date().getFullYear()} DesignTech. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                onMouseEnter={() => setHoveredLink(`legal-${idx}`)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ y: -3 }}
                style={{
                  color: hoveredLink === `legal-${idx}` ? T.gold : T.textMuted,
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
