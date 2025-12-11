import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingSystem from "./BookingSystem";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col">
      {/* NAVBAR */}
      <Navbar theme={"light"} onThemeToggle={() => {}} />

      {/* CONTENT */}
      <div className="flex-1 w-full max-w-5xl px-6 pb-20 mx-auto mt-40">
        <h1 className="mb-4 text-4xl font-extrabold text-center">
          Construction Slot Booking
        </h1>

        <p className="mb-12 text-lg text-center text-gray-600">
          Select your preferred available slot for material delivery, site
          visit, or contractor scheduling.
        </p>

        <div className="flex justify-center">
          <BookingSystem />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
