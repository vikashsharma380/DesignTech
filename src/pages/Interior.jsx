import React from "react";
import interiorImg from "../assets/interior.jpeg";

const Interior = () => {
  return (
    <main className="text-black bg-white">
      {/* HERO */}
      <section className="relative flex items-center h-[70vh]">
        <img
          src={interiorImg}
          alt="Interior Design"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-[#d4af37]">
              Interior Services
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Interior Design That Enhances Everyday Living
            </h1>

            <p className="max-w-2xl mt-6 text-lg leading-7 text-gray-200">
              We design interiors that balance comfort, functionality, and
              visual harmony — creating spaces that feel refined, practical, and
              timeless.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid max-w-6xl gap-20 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Interiors Designed With Intent
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Our interior design philosophy focuses on creating spaces that are
              both functional and aesthetically pleasing. Every element — from
              layout and lighting to materials and finishes — is thoughtfully
              selected to enhance daily living.
            </p>
          </div>

          <div className="p-10 border border-gray-200 rounded-xl bg-gray-50">
            <p className="leading-7 text-gray-700">
              Whether it’s a home, workspace, or commercial environment, our
              interiors are designed to feel balanced, comfortable, and
              long-lasting without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 bg-gray-50 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
            Our Interior Design Process
          </h2>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              {
                title: "Concept & Mood",
                desc: "Understanding lifestyle, preferences, and spatial needs.",
              },
              {
                title: "Space Planning",
                desc: "Optimized layouts that improve comfort and movement.",
              },
              {
                title: "Material & Lighting",
                desc: "Carefully curated finishes, textures, and lighting design.",
              },
              {
                title: "Execution Support",
                desc: "Design coordination for smooth and accurate implementation.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid max-w-6xl gap-20 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Why Choose Our Interior Services
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Human-centric and functional layouts</li>
              <li>✔ Balanced use of materials, textures, and colors</li>
              <li>✔ Strong focus on lighting and spatial harmony</li>
              <li>✔ Designs that age gracefully over time</li>
            </ul>
          </div>

          <div className="p-12 text-white bg-black rounded-xl">
            <h3 className="mb-4 text-2xl font-bold">
              Interiors That Feel Right
            </h3>
            <p className="leading-7 text-gray-300">
              Our interiors are not just visually appealing — they are designed
              to feel natural, comfortable, and functional throughout everyday
              use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Ready to Transform Your Space?
        </h2>

        <p className="mb-8 text-gray-600">
          Let’s design interiors that reflect comfort, clarity, and timeless
          elegance.
        </p>

        <button className="px-10 py-4 text-white transition bg-black rounded-lg hover:opacity-90">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Interior;
