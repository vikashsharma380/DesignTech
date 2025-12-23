import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import interiorImg from "../assets/interior.jpeg";
import luxuryResidence from "../assets/bedroom.jpeg";
import architecture from "../assets/architecture.jpeg";
import turnkey from "../assets/turnkey.jpeg";

const Services = ({ theme }) => {
  const isLight = theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const colors = {
    bg: isLight ? "bg-white" : "bg-[#0a0a0a]",
    text: isLight ? "text-black" : "text-white",
    subText: isLight ? "text-[#444]" : "text-[#d0d0d0]",
    cardBg: isLight ? "bg-white" : "bg-white/5",
    badgeBg: isLight ? "bg-black/5" : "bg-white/10",
    badgeText: isLight ? "text-black" : "text-white",
    overlay: isLight ? "bg-white/40" : "bg-black/50",
  };

  const services = [
    {
      image: architecture,
      title: "Architectural Design",
      slug: "/services/architecture",
      desc: "Timeless architectural concepts crafted with precision and global aesthetics.",
    },
    {
      image: luxuryResidence,
      title: "Luxury Residences",
      slug: "/services/luxury",
      desc: "World-class homes designed with exceptional craftsmanship and detail.",
    },
    {
      image: interiorImg,
      title: "Interior Excellence",
      slug: "/services/interior",
      desc: "Premium interior compositions blending luxury materials & modern sensibilities.",
    },
    {
      image: turnkey,
      title: "Turnkey Execution",
      slug: "/services/turnkey",
      desc: "End-to-end management with absolute transparency and assured delivery.",
    },
  ];

  return (
    <section
      id="services"
      className={`relative py-28 px-6 md:px-20 ${colors.bg}`}
    >
      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-wider border border-[#d4af37]/40 text-[#d4af37]">
          ● Our Expertise
        </div>

        <h2
          className={`mt-6 text-4xl md:text-5xl font-extrabold ${colors.text}`}
        >
          What We Offer
        </h2>

        <p
          className={`mt-6 text-lg leading-8 max-w-2xl mx-auto ${colors.subText}`}
        >
          Premium design & build services curated to elevate luxury residential
          and commercial spaces with uncompromising quality.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(srv.slug)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
            className={`cursor-pointer rounded-xl overflow-hidden border backdrop-blur-lg ${colors.cardBg}`}
            style={{
              borderColor: isLight
                ? "rgba(212,175,55,0.25)"
                : "rgba(212,175,55,0.12)",
            }}
          >
            <div className="relative h-56">
              <img
                src={srv.image}
                alt={srv.title}
                className="object-cover w-full h-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: colors.overlay,
                  opacity: hoveredIndex === i ? 0.35 : 0.6,
                }}
              />
            </div>

            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>
                {srv.title}
              </h3>

              <p className={`text-sm leading-7 ${colors.subText}`}>
                {srv.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
