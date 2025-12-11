import React from "react";
import BookingSystem from "./BookingSystem";

export default function BookingPage({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: isDark ? "#0a0a0a" : "#f8f8f8",
        color: isDark ? "white" : "black",
        paddingTop: "120px",
      }}
    >
      <div className="flex-1 w-full max-w-5xl px-6 pb-20 mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold text-center font-playfair">
          Construction Slot Booking
        </h1>

        <p
          className="mb-12 text-lg text-center"
          style={{ color: isDark ? "#cccccc" : "#555" }}
        >
          Select your preferred available slot for material delivery, site
          visit, or contractor scheduling.
        </p>

        <div className="flex justify-center">
          <BookingSystem theme={theme} />
        </div>
      </div>
    </div>
  );
}
