import React from "react";
import turnkeyImg from "../assets/turnkey.jpeg";

const Turnkey = () => {
  return (
    <main className="text-black bg-white">
      {/* HERO */}
      <section className="relative flex items-center h-[70vh]">
        <img
          src={turnkeyImg}
          alt="Turnkey Execution"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-[#d4af37]">
              Turnkey Services
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Turnkey Execution From Concept to Completion
            </h1>

            <p className="max-w-2xl mt-6 text-lg leading-7 text-gray-200">
              We manage the entire project lifecycle — delivering seamless
              execution, cost transparency, and assured quality under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid max-w-6xl gap-20 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Complete Project Responsibility
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Our turnkey execution model ensures you don’t have to coordinate
              between multiple vendors. We take full responsibility — from
              planning and procurement to execution and final delivery.
            </p>
          </div>

          <div className="p-10 border border-gray-200 rounded-xl bg-gray-50">
            <p className="leading-7 text-gray-700">
              With clear timelines, defined budgets, and structured workflows,
              we deliver projects efficiently without compromising quality or
              design intent.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 bg-gray-50 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
            Our Turnkey Execution Process
          </h2>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              {
                title: "Project Planning",
                desc: "Detailed scope definition, budgeting, and timeline planning.",
              },
              {
                title: "Procurement",
                desc: "Material sourcing, vendor coordination, and logistics.",
              },
              {
                title: "On-Site Execution",
                desc: "Supervised construction with strict quality control.",
              },
              {
                title: "Handover & Delivery",
                desc: "Final inspections, finishing, and project handover.",
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
              Why Choose Our Turnkey Services
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Single-point responsibility for entire project</li>
              <li>✔ Transparent costing and timeline assurance</li>
              <li>✔ Strict quality checks at every stage</li>
              <li>✔ Stress-free execution with predictable outcomes</li>
            </ul>
          </div>

          <div className="p-12 text-white bg-black rounded-xl">
            <h3 className="mb-4 text-2xl font-bold">Execution You Can Trust</h3>
            <p className="leading-7 text-gray-300">
              Our turnkey solutions are built on accountability, process
              discipline, and execution clarity — ensuring your project is
              delivered exactly as promised.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gray-100">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Ready for Hassle-Free Project Execution?
        </h2>

        <p className="mb-8 text-gray-600">
          Let us handle everything — from planning to final delivery — with
          precision and care.
        </p>

        <button className="px-10 py-4 text-white transition bg-black rounded-lg hover:opacity-90">
          Get Started
        </button>
      </section>
    </main>
  );
};

export default Turnkey;
