import React from "react";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import photo7 from "../assets/photo7.jpeg";
import photo8 from "../assets/photo8.jpeg";

const projects = [
  {
    title: "Luxury Bathroom Renovation",
    subtitle: "Modern | Elegant | Premium",
    description:
      "This luxury bathroom is crafted using high-quality materials, soft lighting elements, and a clean, elegant aesthetic.",
    image: photo1,
    features: [
      "High-end tiles & marble finish",
      "Warm ambient lighting",
      "Modern fittings with premium textures",
    ],
  },
  {
    title: "Kitchen Remodeling",
    subtitle: "Functional | Stylish | Modular",
    description:
      "A fully redesigned modular kitchen that blends functionality with modern aesthetics for everyday efficiency.",
    image: photo2,
    features: [
      "Custom-built storage",
      "Premium modular fittings",
      "Heat & stain-resistant surfaces",
    ],
  },
  {
    title: "Modern Office Interior",
    subtitle: "Productive | Clean | Minimalist",
    description:
      "A professional workspace interior that enhances focus and productivity through balanced lighting and modern design.",
    image: photo3,
    features: [
      "Acoustic-friendly layout",
      "Premium desk setups",
      "Warm wood & glass combinations",
    ],
  },
  {
    title: "Living Room Transformation",
    subtitle: "Warm | Cozy | Contemporary",
    description:
      "A modern living room designed with warm tones, textures, and a premium comfort-first approach.",
    image: photo4,
    features: [
      "Soft earthy palette",
      "Premium wooden textures",
      "Comfort-focused interior planning",
    ],
  },
  {
    title: "Exterior Structure Development",
    subtitle: "Strong | Durable | Architectural",
    description:
      "A durable exterior structural project built with advanced engineering and weather-proof materials.",
    image: photo5,
    features: [
      "High-strength structure",
      "Weather-resistant materials",
      "Architectural elevation design",
    ],
  },
  {
    title: "Commercial Construction",
    subtitle: "Reliable | Scalable | Modern",
    description:
      "A commercial space engineered with long-lasting materials and modern design solutions.",
    image: photo6,
    features: [
      "Strong foundation engineering",
      "Design focused for business needs",
      "Optimized layout for usability",
    ],
  },
  {
    title: "Premium Washroom Setup",
    subtitle: "Minimal | Elegant | Textured",
    description:
      "A premium washroom setup featuring minimalist elements and elegant lighting combinations.",
    image: photo7,
    features: [
      "Frameless glass partitions",
      "Soft ambient lighting",
      "Premium stonework",
    ],
  },
  {
    title: "Luxury Interior Work",
    subtitle: "Balanced | Sophisticated | Modern",
    description:
      "A refined interior space designed with sophistication, balanced textures, and modern aesthetics.",
    image: photo8,
    features: [
      "Handpicked material selection",
      "Modern design approach",
      "Warm color palette",
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-28 pb-24 text-white">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold md:text-6xl font-playfair">
          Our Portfolio
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          Every project is crafted with precision, creativity, and a focus on
          long-term quality. Explore our premium construction & interior work.
        </p>
        <div className="w-24 h-[3px] bg-yellow-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* PROJECT SECTIONS */}
      <div className="px-6 mt-10 md:px-20 space-y-28">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-start gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* FULL IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-[55%] rounded-xl shadow-xl object-contain"
            />

            {/* CONTENT */}
            <div className="lg:w-[45%]">
              <h2 className="text-3xl font-bold text-yellow-400 md:text-4xl font-playfair">
                {project.title}
              </h2>

              <p className="mt-1 italic text-gray-400 text-md">
                {project.subtitle}
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* FEATURES */}
              <ul className="mt-5 space-y-2">
                {project.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="mt-1 text-yellow-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="h-20" />
    </div>
  );
};

export default Portfolio;
