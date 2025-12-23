import React from "react";
import luxuryImg from "../assets/bedroom.jpeg";

const Luxury = () => {
  return (
    <main className="text-black bg-white">
      {/* HERO */}
      <section className="relative flex items-center h-[70vh]">
        <img
          src={luxuryImg}
          alt="Luxury Residences"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-[#d4af37]">
              Luxury Residences
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Luxury Homes Crafted for Timeless Living
            </h1>

            <p className="max-w-2xl mt-6 text-lg leading-7 text-gray-200">
              We design bespoke luxury residences that reflect elegance,
              craftsmanship, and refined living — tailored to your lifestyle and
              legacy.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid max-w-6xl gap-20 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Designed for Elevated Living
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Our luxury residences are designed with a deep understanding of
              comfort, aesthetics, and exclusivity. Every detail — from spatial
              planning to material selection — is curated to deliver a refined
              and enduring living experience.
            </p>
          </div>

          <div className="p-10 border border-gray-200 rounded-xl bg-gray-50">
            <p className="leading-7 text-gray-700">
              We focus on creating homes that feel expansive, private, and
              personal — combining modern luxury with timeless architectural
              principles.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 bg-gray-50 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
            Our Luxury Design Process
          </h2>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              {
                title: "Lifestyle Understanding",
                desc: "Understanding personal preferences, lifestyle, and vision.",
              },
              {
                title: "Spatial Planning",
                desc: "Grand layouts designed for comfort, flow, and privacy.",
              },
              {
                title: "Material & Detailing",
                desc: "Premium materials, finishes, and bespoke detailing.",
              },
              {
                title: "Execution Support",
                desc: "Design coordination ensuring flawless on-site execution.",
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
              Why Choose Our Luxury Residences
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Bespoke designs tailored to individual lifestyles</li>
              <li>✔ Premium materials and refined craftsmanship</li>
              <li>✔ Strong focus on privacy, comfort, and elegance</li>
              <li>✔ Homes that retain value and timeless appeal</li>
            </ul>
          </div>

          <div className="p-12 text-white bg-black rounded-xl">
            <h3 className="mb-4 text-2xl font-bold">
              Luxury That Feels Personal
            </h3>
            <p className="leading-7 text-gray-300">
              Our luxury residences are not just visually impressive — they are
              designed to feel deeply personal, comfortable, and enduring for
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Ready to Build Your Dream Home?
        </h2>

        <p className="mb-8 text-gray-600">
          Let’s create a luxury residence that truly reflects your vision and
          lifestyle.
        </p>

        <button className="px-10 py-4 text-white transition bg-black rounded-lg hover:opacity-90">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Luxury;
