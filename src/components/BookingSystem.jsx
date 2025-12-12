import React, { useState } from "react";

export default function BookingSystem({ theme = "light" }) {
  const isDark = theme === "dark";

  const [slots, setSlots] = useState([
    { id: 1, label: "A1", booked: false },
    { id: 2, label: "A2", booked: false },
    { id: 3, label: "A3", booked: true },
    { id: 4, label: "A4", booked: true },
    { id: 5, label: "A5", booked: false },
    { id: 6, label: "B1", booked: false },
    { id: 7, label: "B2", booked: false },
    { id: 8, label: "B3", booked: true },
    { id: 9, label: "B4", booked: false },
    { id: 10, label: "B5", booked: false },
  ]);

  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    const slot = slots.find((s) => s.id === id);
    if (slot.booked) return;

    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const confirmBooking = () => {
    if (selected.length === 0) {
      alert("Please select at least one slot.");
      return;
    }

    const updated = slots.map((s) =>
      selected.includes(s.id) ? { ...s, booked: true } : s
    );

    setSlots(updated);
    setSelected([]);
    alert("Booking confirmed ✔");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* LEGEND */}
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-400 rounded"></span> Booked
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 rounded"></span> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-600 rounded"></span> Selected
        </div>
      </div>

      {/* GRID */}
      <div className="grid max-w-lg grid-cols-5 gap-4">
        {slots.map((slot) => {
          const isSelected = selected.includes(slot.id);

          return (
            <button
              key={slot.id}
              onClick={() => toggleSelect(slot.id)}
              disabled={slot.booked}
              className={`
                px-4 py-3 rounded-lg text-center font-semibold transition
                ${
                  slot.booked
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-green-500 text-white hover:bg-green-600"
                }
              `}
            >
              {slot.label}
            </button>
          );
        })}
      </div>

      {/* CTA BUTTON */}
      <button
        onClick={confirmBooking}
        className="px-6 py-3 mt-4 text-white transition bg-black rounded-md shadow-md hover:opacity-80"
      >
        Confirm Booking
      </button>
    </div>
  );
}
