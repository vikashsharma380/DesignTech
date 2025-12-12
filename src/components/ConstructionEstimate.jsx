// ConstructionEstimate.part1.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConstructionEstimate = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  const lightTheme = {
    pageBg: "#ffffff",
    textMain: "#000",
    textSecondary: "#555",
    cardBg: "rgba(255,255,255,0.85)",
    border: "rgba(212,175,55,0.25)",
    headerBg: "rgba(212,175,55,0.08)",
  };

  const darkTheme = {
    pageBg: "#0a0a0a",
    textMain: "#fff",
    textSecondary: "#d0d0d0",
    cardBg: "rgba(255,255,255,0.03)",
    border: "rgba(212,175,55,0.12)",
    headerBg: "linear-gradient(135deg, rgba(212,175,55,0.12), transparent)",
  };

  const T = isDark ? darkTheme : lightTheme;

  // ---------- MAIN STATES ----------
  const [formData, setFormData] = useState({
    city: "Gurgaon",
    plotArea: "3001-5000",
    floors: "2",
    constructionType: "Isolated",
  });

  const [selectedMaterials, setSelectedMaterials] = useState({});
  const [currentCategory, setCurrentCategory] = useState("Foundation");
  const [autoAdvance] = useState(true);

  // MODAL (material details) state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMaterial, setModalMaterial] = useState(null);

  // ENTRANCE POPUP (blocking) state — user cannot interact with page until they close/confirm
  const [entranceOpen, setEntranceOpen] = useState(true);

  // ---------- MATERIAL CATEGORIES (data) ----------
  const materialCategories = {
    Foundation: [
      {
        id: "f1",
        name: "RCC Concrete Mix",
        price: 8500,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "High strength RCC mix for durable foundation work.",
        details: "Used for structural base work with superior load capacity.",
      },
      {
        id: "f2",
        name: "Ready Mix Concrete",
        price: 9200,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Consistent quality concrete solution.",
        details:
          "Perfect for fast execution and precise strength requirements.",
      },
      {
        id: "f3",
        name: "Reinforced Concrete",
        price: 10500,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Ultra-strong concrete with reinforcement compatibility.",
        details: "Best suited for deep footings and high-load structures.",
      },
    ],

    Cement: [
      {
        id: "c1",
        name: "LaFarge Duragold",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Premium cement for durability and long life.",
        details: "Provides crack resistance and excellent bonding.",
      },
      {
        id: "c2",
        name: "Ultratech Cement",
        price: 420,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Industry-leading cement brand.",
        details: "Ensures fast setting and long-term structural stability.",
      },
      {
        id: "c3",
        name: "ACC Cement",
        price: 390,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "High-strength cement for premium construction.",
        details: "Ideal for columns, beams, and load-bearing walls.",
      },
    ],

    Bricks: [
      {
        id: "b1",
        name: "Red Clay Bricks",
        price: 4500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=800",
        description: "Traditional durable bricks.",
        details: "Good heat insulation and strong bonding.",
      },
      {
        id: "b2",
        name: "Fly Ash Bricks",
        price: 3500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=800",
        description: "Eco-friendly and strong.",
        details: "Perfect alignment and lightweight.",
      },
      {
        id: "b3",
        name: "AAC Blocks",
        price: 6500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=800",
        description: "Lightweight thermal insulation blocks.",
        details: "Best for modern construction & energy efficiency.",
      },
    ],

    Steel: [
      {
        id: "s1",
        name: "TMT 500 Grade",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Reliable tensile strength.",
        details: "Widely used in beams and columns.",
      },
      {
        id: "s2",
        name: "TMT 550 Grade",
        price: 48000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Higher durability and load resistance.",
        details: "Ideal for high rise structures.",
      },
      {
        id: "s3",
        name: "TMT 600 Grade",
        price: 52000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
        description: "Top-grade steel.",
        details: "Maximum structural performance.",
      },
    ],

    // new categories
    Paint: [
      {
        id: "p1",
        name: "Asian Royale Paint",
        price: 650,
        image:
          "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=800",
        description: "Premium washable interior paint.",
        details: "Smooth finish with anti-fungal properties.",
      },
      {
        id: "p2",
        name: "Dulux Velvet Touch",
        price: 710,
        image:
          "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=800",
        description: "Luxury silky smooth finish.",
        details: "Zero odor and advanced stain guard.",
      },
    ],

    Electrical: [
      {
        id: "el1",
        name: "Havells Wiring Pack",
        price: 15000,
        image:
          "https://images.unsplash.com/photo-1581092335873-4f09a3a14f2d?w=800",
        description: "High-quality wiring bundle.",
        details: "Heat resistant, long life wiring set.",
      },
      {
        id: "el2",
        name: "Anchor Switch Set",
        price: 8500,
        image:
          "https://images.unsplash.com/photo-1581092335873-4f09a3a14f2d?w=800",
        description: "Premium modular switches.",
        details: "Shockproof durable design.",
      },
    ],

    Plumbing: [
      {
        id: "pl1",
        name: "CPVC Pipe Set",
        price: 12000,
        image:
          "https://images.unsplash.com/photo-1581092919337-497bb7d5005b?w=800",
        description: "Hot & cold water pipe solution.",
        details: "Leak proof & corrosion resistant.",
      },
      {
        id: "pl2",
        name: "Bathroom Fittings Pack",
        price: 18000,
        image:
          "https://images.unsplash.com/photo-1581092919337-497bb7d5005b?w=800",
        description: "Premium chrome finish fittings.",
        details: "Long-lasting and anti-rust.",
      },
    ],
  };

  const categories = Object.keys(materialCategories);
  const currentCategoryIndex = categories.indexOf(currentCategory);
  const nextCategory = categories[currentCategoryIndex + 1];

  // ---------- AUTO-ADVANCE CATEGORY ----------
  useEffect(() => {
    if (selectedMaterials[currentCategory] && nextCategory && autoAdvance) {
      const timer = setTimeout(() => {
        setCurrentCategory(nextCategory);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [
    selectedMaterials[currentCategory],
    currentCategory,
    nextCategory,
    autoAdvance,
  ]);

  // ---------- FORM CHANGE ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ---------- SELECT MATERIAL (open material modal) ----------
  const handleMaterialSelect = (category, material) => {
    setSelectedMaterials((prev) => ({ ...prev, [category]: material.id }));
    setModalMaterial(material);
    setModalOpen(true);
  };

  // ---------- ESTIMATE CALC ----------
  const calculateEstimate = () => {
    const baseRates = {
      Gurgaon: 1800,
      Delhi: 1700,
      Mumbai: 2000,
      Bangalore: 1600,
    };
    const areaMultiplier = {
      "1000-3000": 0.9,
      "3001-5000": 1,
      "5001-8000": 1.1,
      "8001+": 1.2,
    };

    const area = 3500;
    const floors = parseInt(formData.floors) || 1;
    const baseRate = baseRates[formData.city] || 1600;
    const multiplier = areaMultiplier[formData.plotArea] || 1;

    let materialCost = 0;
    Object.entries(selectedMaterials).forEach(([cat, id]) => {
      const list = materialCategories[cat] || [];
      const mat = list.find((m) => m.id === id);
      if (mat) materialCost += mat.price;
    });

    const baseStructural = area * floors * baseRate * multiplier * 0.5;
    const materials = baseStructural * 0.6 + materialCost * (area * 0.001);
    const labor = baseStructural * 0.3;
    const contingency = (baseStructural + materials + labor) * 0.1;
    const total = baseStructural + materials + labor + contingency;

    return {
      baseStructural: Math.round(baseStructural),
      materials: Math.round(materials),
      labor: Math.round(labor),
      contingency: Math.round(contingency),
      total: Math.round(total),
    };
  };

  const estimate = calculateEstimate();
  const selectedCount = Object.keys(selectedMaterials).length;
  const totalCount = Object.keys(materialCategories).length;
  const isComplete = selectedCount === totalCount;

  // ---------- MODAL HANDLERS ----------
  const closeModal = () => {
    setModalOpen(false);
    setModalMaterial(null);
  };
  const confirmMaterialInModal = () => {
    setModalOpen(false);
    setModalMaterial(null);
  };

  // ---------- SMALL HELPERS ----------
  const fmt = (n) => (n || 0).toLocaleString();

  // Prevent background scroll while entrance popup is open
  useEffect(() => {
    if (entranceOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    // restore if not open
    document.body.style.overflow = "";
    return () => {};
  }, [entranceOpen]);

  // ---------- RENDER (PART 1) ----------
  return (
    <div
      style={{
        background: T.pageBg,
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "4rem",
        color: T.textMain,
        transition: "0.3s",
      }}
    >
      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 992px) {
          .mainLayout { grid-template-columns: 1fr !important; }
          .container { padding: 0 2rem !important; }
        }
        @media (max-width: 600px) {
          .materialsGrid { grid-template-columns: 1fr !important; }
          .filterGrid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ---------- ENTRANCE POPUP (blocking) ---------- */}
      <AnimatePresence>
        {entranceOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          >
            <motion.div
              initial={{ y: 10, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              style={{
                width: "min(920px, 96%)",
                borderRadius: 12,
                padding: 18,
                overflow: "hidden",
                background: isDark ? "#060606" : "#fff",
                border: `1px solid ${T.border}`,
                display: "flex",
                gap: 0,
                alignItems: "stretch",
              }}
            >
              {/* Left visual */}
              <div style={{ width: "45%", minHeight: 220, overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1546597566-8e5f5d2b52b9?w=1200&q=80"
                  alt="construction"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Right content */}
              <div
                style={{
                  padding: 16,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: T.textMain,
                    fontSize: 22,
                    fontWeight: 800,
                  }}
                >
                  Premium Construction Estimator
                </h2>
                <p style={{ marginTop: 8, color: T.textSecondary }}>
                  Get an instant, realistic cost estimate by choosing premium
                  materials and settings.
                </p>

                <ul
                  style={{
                    marginTop: 10,
                    color: T.textSecondary,
                    paddingLeft: 18,
                  }}
                >
                  <li>Accurate material categories and market-based pricing</li>
                  <li>Quick compare & confirm workflow</li>
                  <li>Option to get a professional consultation</li>
                </ul>

                <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                  {/* NOTE: per your request, add a Cancel/Close but user shouldn't proceed without using Enter Site */}
                  <button
                    onClick={() => {
                      // Cancel should NOT let them continue to interaction — keep entranceOpen true
                      // We'll show a tiny shake or keep modal; for now keep it blocking (no close)
                      // But to allow your requested "extra cancel button" we keep it visually present but non-closing.
                      // Small UX: brief visual feedback
                      // (No state change so page stays blocked)
                      // you can change this later to show a message if you want
                      // Example: flash a small alert
                      alert("You must click 'Enter Site' to proceed.");
                    }}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: `1px solid ${T.border}`,
                      background: "transparent",
                      color: T.textMain,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      // Primary CTA -> Enter site (close the entrance popup)
                      setEntranceOpen(false);
                    }}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "none",
                      background: "linear-gradient(135deg,#d4af37,#f4e5c3)",
                      color: "#000",
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    Enter Site
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- HEADER (page title + subtitle) ---------- */}
      <motion.div
        style={{
          textAlign: "center",
          padding: "3.5rem 5rem 2rem",
          background: T.headerBg,
          borderBottom: `1px solid ${T.border}`,
          marginBottom: "2.5rem",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            margin: 0,
            color: T.textMain,
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Construction Cost Estimator
        </h1>

        <p
          style={{
            color: T.textSecondary,
            fontSize: "1.05rem",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          Complete your project details and choose premium materials
        </p>
      </motion.div>

      <div
        className="container"
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5rem" }}
      >
        {/* PROGRESS (keeps working once user enters) */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              height: "3px",
              background: "rgba(212,175,55,0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #d4af37, #f4e5c3)",
              }}
              animate={{ width: `${(selectedCount / totalCount) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p
            style={{
              color: T.textSecondary,
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            {selectedCount} of {totalCount} Materials Selected
          </p>
        </div>

        {/* FILTERS */}
        <motion.div
          style={{
            background: T.cardBg,
            border: `1px solid ${T.border}`,
            borderRadius: "12px",
            padding: "1.8rem",
            marginBottom: "2.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className="filterGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                label: "City",
                name: "city",
                options: ["Gurgaon", "Delhi", "Mumbai", "Bangalore"],
              },
              {
                label: "Plot Area",
                name: "plotArea",
                options: ["1000-3000", "3001-5000", "5001-8000", "8001+"],
              },
              {
                label: "Floors",
                name: "floors",
                options: ["1", "2", "3", "4"],
              },
              {
                label: "Construction Type",
                name: "constructionType",
                options: ["Isolated", "Attached", "Commercial"],
              },
            ].map((field) => (
              <div
                key={field.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <label
                  style={{
                    color: T.textSecondary,
                    fontSize: "0.85rem",
                    fontWeight: "600",
                  }}
                >
                  {field.label}
                </label>
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  style={{
                    padding: "0.85rem 1rem",
                    background: isDark ? "rgba(10,10,10,0.8)" : "#fff",
                    border: `1px solid ${T.border}`,
                    borderRadius: "6px",
                    color: T.textMain,
                  }}
                >
                  {field.options.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---- PART 1 ends here. Continue with Part 2 which contains the mainLayout (categories + cards) and right panel. ---- */}
        {/* ---------- MAIN LAYOUT ---------- */}
        <div
          className="mainLayout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1.1fr",
            gap: "2.5rem",
          }}
        >
          {/* ---------- LEFT SIDE (Categories + Materials) ---------- */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* ---------- CATEGORY NAVIGATION ---------- */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                padding: "1.8rem",
                background: T.cardBg,
                border: `1px solid ${T.border}`,
                borderRadius: "12px",
              }}
            >
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  onClick={() => setCurrentCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    padding: "0.8rem 1.4rem",
                    background: selectedMaterials[cat]
                      ? "rgba(74,222,128,0.1)"
                      : currentCategory === cat
                      ? "rgba(212,175,55,0.15)"
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${
                      selectedMaterials[cat]
                        ? "rgba(74,222,128,0.3)"
                        : "rgba(212,175,55,0.2)"
                    }`,
                    borderRadius: "8px",
                    color: selectedMaterials[cat]
                      ? "#4ade80"
                      : currentCategory === cat
                      ? "#d4af37"
                      : T.textMain,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      width: "25px",
                      height: "25px",
                      background: "rgba(212,175,55,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: T.textMain,
                    }}
                  >
                    {idx + 1}
                  </span>

                  <span>{cat}</span>
                  {selectedMaterials[cat] && <span>✓</span>}
                </motion.button>
              ))}
            </div>

            {/* ---------- MATERIAL CARDS ---------- */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: T.cardBg,
                  border: `1px solid ${T.border}`,
                  borderRadius: "14px",
                  padding: "2.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontFamily: '"Playfair Display", serif',
                    margin: 0,
                    marginBottom: "0.4rem",
                    color: T.textMain,
                  }}
                >
                  {currentCategory}
                </h2>

                <p style={{ color: T.textSecondary }}>
                  Select the best option for your project
                </p>

                <div
                  className="materialsGrid"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1.5rem",
                    marginTop: "1.2rem",
                  }}
                >
                  {materialCategories[currentCategory].map((material, idx) => (
                    <motion.div
                      key={material.id}
                      onClick={() =>
                        handleMaterialSelect(currentCategory, material)
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 12px 24px rgba(212,175,55,0.12)",
                      }}
                      style={{
                        background: T.cardBg,
                        border: `1.5px solid ${T.border}`,
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        minHeight: 280,
                      }}
                    >
                      {/* Material Image */}
                      <div style={{ height: "140px", overflow: "hidden" }}>
                        <img
                          src={material.image}
                          alt={material.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>

                      {/* Selected Overlay Checkmark */}
                      {selectedMaterials[currentCategory] === material.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(212,175,55,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#d4af37",
                            fontSize: "2rem",
                            fontWeight: "800",
                          }}
                        >
                          ✓
                        </motion.div>
                      )}

                      {/* Card Content */}
                      <div
                        style={{
                          padding: "1rem 1rem 1.2rem",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          color: T.textMain,
                        }}
                      >
                        <h3 style={{ margin: "0 0 0.4rem", fontSize: "1rem" }}>
                          {material.name}
                        </h3>
                        <p
                          style={{
                            color: T.textSecondary,
                            fontSize: "0.85rem",
                            marginBottom: "0.8rem",
                            flex: 1,
                          }}
                        >
                          {material.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: `1px solid ${T.border}`,
                            paddingTop: "0.7rem",
                          }}
                        >
                          <span
                            style={{
                              color: "#d4af37",
                              fontWeight: "700",
                            }}
                          >
                            ₹{material.price.toLocaleString()}
                          </span>

                          <span
                            style={{
                              background:
                                selectedMaterials[currentCategory] ===
                                material.id
                                  ? "rgba(212,175,55,0.25)"
                                  : "rgba(212,175,55,0.12)",
                              color: "#d4af37",
                              padding: "6px 10px",
                              borderRadius: "6px",
                              fontSize: "0.78rem",
                              fontWeight: "700",
                            }}
                          >
                            {selectedMaterials[currentCategory] === material.id
                              ? "Selected"
                              : "Select"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ---------- RIGHT SIDE (Cost Panel) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div
              style={{
                background: T.cardBg,
                border: `1px solid ${T.border}`,
                borderRadius: "14px",
                padding: "2rem",
                position: "sticky",
                top: "100px",
                minWidth: 260,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: `1px solid ${T.border}`,
                  paddingBottom: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.4rem", color: T.textMain }}>
                  Cost Estimation
                </h3>

                <span
                  style={{
                    background: isComplete
                      ? "rgba(74,222,128,0.15)"
                      : "rgba(255,255,255,0.06)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    color: isComplete ? "#4ade80" : T.textSecondary,
                    fontWeight: "600",
                  }}
                >
                  {isComplete ? "✓ Complete" : "In Progress"}
                </span>
              </div>

              {/* Selected Materials Summary */}
              <div
                style={{
                  background: "rgba(212,175,55,0.06)",
                  border: `1px solid ${T.border}`,
                  borderRadius: "10px",
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    color: "#d4af37",
                    marginBottom: "1rem",
                    fontSize: "0.85rem",
                  }}
                >
                  Your Selection
                </h4>

                {Object.entries(selectedMaterials).length === 0 && (
                  <div style={{ color: T.textSecondary, fontSize: 13 }}>
                    No materials selected yet.
                  </div>
                )}

                {Object.entries(selectedMaterials).map(([cat, id]) => {
                  const mat =
                    (materialCategories[cat] || []).find((m) => m.id === id) ||
                    {};
                  return (
                    <div
                      key={cat}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: `1px solid ${T.border}`,
                        marginBottom: "0.8rem",
                        paddingBottom: "0.8rem",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            color: T.textSecondary,
                            fontSize: "0.75rem",
                          }}
                        >
                          {cat}
                        </span>
                        <p
                          style={{
                            color: T.textMain,
                            fontWeight: "600",
                            margin: 0,
                          }}
                        >
                          {mat.name || "—"}
                        </p>
                      </div>

                      <span style={{ color: "#d4af37", fontWeight: "700" }}>
                        {mat.price ? `₹${mat.price.toLocaleString()}` : "—"}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Breakdown */}
              <div
                style={{
                  background: "rgba(212,175,55,0.05)",
                  border: `1px solid ${T.border}`,
                  borderRadius: "10px",
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h4 style={{ color: "#d4af37", marginBottom: "1rem" }}>
                  Cost Breakdown
                </h4>

                {[
                  ["Structural Work", estimate.baseStructural],
                  ["Materials", estimate.materials],
                  ["Labor", estimate.labor],
                  ["Contingency", estimate.contingency],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "0.8rem",
                      marginBottom: "0.8rem",
                      borderBottom: `1px solid ${T.border}`,
                    }}
                  >
                    <span style={{ color: T.textSecondary }}>{label}</span>
                    <span style={{ color: "#d4af37", fontWeight: "700" }}>
                      ₹{fmt(val)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(244,229,195,0.06))",
                  border: `1px solid ${T.border}`,
                  borderRadius: "10px",
                  padding: "1.5rem",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    color: T.textSecondary,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                  }}
                >
                  Total Estimated Cost
                </span>

                <h2
                  style={{
                    fontSize: "2.2rem",
                    marginTop: "0.4rem",
                    color: "#d4af37",
                  }}
                >
                  ₹{fmt(estimate.total)}
                </h2>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const payload = { formData, selectedMaterials, estimate };
                  navigator.clipboard.writeText(JSON.stringify(payload));
                  alert("Estimate copied to clipboard.");
                }}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
                  border: "none",
                  color: "#000",
                  fontWeight: "700",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Get Professional Consultation →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionEstimate;
