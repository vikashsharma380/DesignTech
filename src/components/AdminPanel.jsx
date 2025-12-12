import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AdminPanel() {
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

  const toggleBook = (id) => {
    setSlots((prev) =>
      prev.map((slot) =>
        slot.id === id ? { ...slot, booked: !slot.booked } : slot
      )
    );
  };

  const totalBooked = slots.filter((s) => s.booked).length;

  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col">
      {/* NAVBAR */}
      <Navbar theme="light" onThemeToggle={() => {}} />

      {/* PAGE CONTENT */}
      <div className="flex-1 max-w-5xl px-6 mx-auto mb-20 mt-36">
        <h1 className="mb-3 text-4xl font-extrabold text-center">
          Admin Control Panel
        </h1>

        <p className="mb-10 text-center text-gray-600">
          Manage booking slots, monitor status, update availability.
        </p>

        {/* STATS CARD */}
        <div className="p-6 mb-10 bg-white shadow-md rounded-xl">
          <h2 className="mb-3 text-xl font-semibold">Dashboard Summary</h2>
          <p className="text-lg text-gray-700">
            <strong>Total Slots:</strong> {slots.length}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Booked Slots:</strong> {totalBooked}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Available Slots:</strong> {slots.length - totalBooked}
          </p>
        </div>

        {/* SLOT MANAGER */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h2 className="mb-6 text-xl font-semibold">Manage Slots</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {slots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => toggleBook(slot.id)}
                className={`p-4 rounded-lg font-semibold transition shadow-md 
                  ${
                    slot.booked
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
              >
                {slot.label}
                <div className="mt-1 text-xs">
                  {slot.booked ? "Booked" : "Available"}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
