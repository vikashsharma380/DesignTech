import React from "react";
import heroImg from "../assets/architecture.jpeg";

const Architecture = () => {
  return (
    <main className="text-black bg-white">
      {/* HERO */}
      <section className="relative flex items-center h-[70vh]">
        <img
          src={heroImg}
          alt="Architectural Design"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-[#d4af37]">
              Architecture Services
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Architectural Design That Feels Timeless
            </h1>

            <p className="max-w-2xl mt-6 text-lg leading-7 text-gray-200">
              We design architectural spaces that balance functionality,
              structural clarity, and long-term value — without unnecessary
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid max-w-6xl gap-20 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Designing Spaces With Purpose
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Our architectural philosophy is rooted in clarity and usability.
              Every design responds thoughtfully to lifestyle needs, climate
              conditions, and structural integrity — focusing on solutions that
              remain relevant for years.
            </p>
          </div>

          <div className="p-10 border border-gray-200 rounded-xl bg-gray-50">
            <p className="leading-7 text-gray-700">
              From residential homes to commercial developments, we deliver
              architecture that is practical, efficient, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 bg-gray-50 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
            Our Architectural Process
          </h2>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              {
                title: "Concept Planning",
                desc: "Understanding requirements, site conditions, and project goals.",
              },
              {
                title: "Space Planning",
                desc: "Efficient layouts focused on comfort, flow, and usability.",
              },
              {
                title: "Design Detailing",
                desc: "Accurate detailing aligned with materials and structure.",
              },
              {
                title: "Execution Support",
                desc: "Design coordination to ensure smooth on-site execution.",
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
              Why Choose Our Architecture Services
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Climate-responsive and practical designs</li>
              <li>✔ Strong focus on structure and longevity</li>
              <li>✔ Clear planning with transparent coordination</li>
              <li>✔ Balanced aesthetics with real usability</li>
            </ul>
          </div>

          <div className="p-12 text-white bg-black rounded-xl">
            <h3 className="mb-4 text-2xl font-bold">Built With Precision</h3>
            <p className="leading-7 text-gray-300">
              Our architectural designs combine creativity with technical
              discipline — delivering spaces that are strong, reliable, and
              timeless.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Ready to Start Your Project?
        </h2>

        <p className="mb-8 text-gray-600">
          Let’s create architecture that is functional, strong, and timeless.
        </p>

        <button className="px-10 py-4 text-white transition bg-black rounded-lg hover:opacity-90">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Architecture;
