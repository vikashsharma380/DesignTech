import React from "react";

const WhatsAppButton = ({
  phoneNumber = "916204203526",
  defaultMessage = "Hello! I want to discuss a construction project.",
  position = { right: 20, bottom: 25 },
}) => {
  const message = encodeURIComponent(defaultMessage);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: position.right,
        bottom: position.bottom,
        zIndex: 5000,
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "36px", height: "36px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
