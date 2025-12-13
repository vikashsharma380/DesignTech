import React, { useState } from "react";

export default function ExactSiteLayoutSVG() {
  const [selected, setSelected] = useState([]);

  const booked = [
    "A50",
    "A47",
    "A43",
    "A38",
    "A34",
    "A29",
    "A23",
    "A18",
    "A14",
    "A7",
    "A3",
  ];

  const toggle = (plot) => {
    if (booked.includes(plot)) return;
    setSelected((prev) =>
      prev.includes(plot) ? prev.filter((p) => p !== plot) : [...prev, plot]
    );
  };

  const plotFill = (id, type) => {
    if (booked.includes(id)) return "#9ca3af"; // booked
    if (selected.includes(id)) return "#1e3a8a"; // selected
    return type === "yellow" ? "#facc15" : "#bae6fd";
  };

  return (
    <div className="w-full py-10 overflow-auto bg-white">
      <svg
        width="1200"
        height="700"
        viewBox="0 0 1200 700"
        className="mx-auto border"
      >
        {/* ================= ROADS ================= */}
        {/* Right vertical 40 ft road */}
        <rect x="850" y="20" width="120" height="560" fill="#9ca3af" />
        <text
          x="910"
          y="120"
          fill="#fff"
          fontSize="12"
          textAnchor="middle"
          transform="rotate(-90 910 120)"
        >
          40'-0" WIDE ROAD
        </text>
        <text
          x="910"
          y="300"
          fill="#fff"
          fontSize="12"
          textAnchor="middle"
          transform="rotate(-90 910 300)"
        >
          40'-0" WIDE ROAD
        </text>

        {/* Bottom horizontal road */}
        <rect x="300" y="580" width="650" height="80" fill="#9ca3af" />
        <text x="625" y="625" fill="#fff" fontSize="12" textAnchor="middle">
          ROAD
        </text>

        {/* ================= INTERNAL ROADS ================= */}
        <rect x="80" y="120" width="750" height="35" fill="#6b7280" />
        <rect x="80" y="255" width="750" height="35" fill="#6b7280" />
        <rect x="80" y="390" width="750" height="35" fill="#6b7280" />

        <text x="455" y="142" fill="#fff" fontSize="11" textAnchor="middle">
          16'-0" WIDE ROAD
        </text>
        <text x="455" y="277" fill="#fff" fontSize="11" textAnchor="middle">
          16'-0" WIDE ROAD
        </text>
        <text x="455" y="412" fill="#fff" fontSize="11" textAnchor="middle">
          16'-0" WIDE ROAD
        </text>

        {/* ================= PLOTS ================= */}
        {/* Helper */}
        {[
          // Top row A50–A36 (yellow)
          ...Array.from({ length: 15 }).map((_, i) => ({
            id: `A${50 - i}`,
            x: 80 + i * 50,
            y: 50,
            type: "yellow",
          })),
          // Second row A35–A21 (yellow)
          ...Array.from({ length: 15 }).map((_, i) => ({
            id: `A${35 - i}`,
            x: 80 + i * 50,
            y: 170,
            type: "yellow",
          })),
          // Third row A20–A11 (blue)
          ...Array.from({ length: 10 }).map((_, i) => ({
            id: `A${20 - i}`,
            x: 80 + i * 60,
            y: 305,
            type: "blue",
          })),
          // Bottom row A10–A1 (blue)
          ...Array.from({ length: 10 }).map((_, i) => ({
            id: `A${10 - i}`,
            x: 80 + i * 60,
            y: 440,
            type: "blue",
          })),
        ].map((plot) => (
          <g
            key={plot.id}
            onClick={() => toggle(plot.id)}
            style={{
              cursor: booked.includes(plot.id) ? "not-allowed" : "pointer",
            }}
          >
            <rect
              x={plot.x}
              y={plot.y}
              width={plot.type === "yellow" ? 48 : 58}
              height="60"
              rx="4"
              fill={plotFill(plot.id, plot.type)}
              stroke="#1f2937"
            />
            <text
              x={plot.x + (plot.type === "yellow" ? 24 : 29)}
              y={plot.y + 35}
              fontSize="12"
              fill={
                selected.includes(plot.id) || booked.includes(plot.id)
                  ? "#fff"
                  : "#111"
              }
              textAnchor="middle"
              fontWeight="bold"
            >
              {plot.id}
            </text>
          </g>
        ))}
      </svg>

      {/* ACTION */}
      <div className="mt-8 text-center">
        <button
          onClick={() =>
            selected.length
              ? alert(`Booked plots: ${selected.join(", ")}`)
              : alert("Please select a plot")
          }
          className="px-10 py-4 text-lg font-semibold text-white rounded-lg bg-slate-900"
        >
          Confirm Plot Booking
        </button>
      </div>
    </div>
  );
}
