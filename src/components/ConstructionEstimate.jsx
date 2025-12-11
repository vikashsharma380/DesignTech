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

  const [formData, setFormData] = useState({
    city: "Gurgaon",
    plotArea: "3001-5000",
    floors: "2",
    constructionType: "Isolated",
  });

  const [selectedMaterials, setSelectedMaterials] = useState({});
  const [currentCategory, setCurrentCategory] = useState("Foundation");
  const [autoAdvance] = useState(true);

  const materialCategories = {
    Foundation: [
      {
        id: "f1",
        name: "RCC Concrete Mix",
        price: 8500,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "High strength concrete for foundation with enhanced durability",
      },
      {
        id: "f2",
        name: "Ready Mix Concrete",
        price: 9200,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description: "Pre-mixed quality concrete with consistent composition",
      },
      {
        id: "f3",
        name: "Reinforced Concrete",
        price: 10500,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "Ultra-strong reinforced mix for maximum structural strength",
      },
    ],
    Cement: [
      {
        id: "c1",
        name: "LaFarge Duragold",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "Premium cement with advanced SPE technology for durability",
      },
      {
        id: "c2",
        name: "Ultratech Cement",
        price: 420,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "Low heat hydration cement ideal for all weather conditions",
      },
      {
        id: "c3",
        name: "ACC Cement",
        price: 390,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description: "High strength cement with superior long-term durability",
      },
    ],
    Bricks: [
      {
        id: "b1",
        name: "Red Clay Bricks",
        price: 4500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=400&q=80",
        description:
          "Traditional quality bricks with excellent heat resistance",
      },
      {
        id: "b2",
        name: "Fly Ash Bricks",
        price: 3500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=400&q=80",
        description: "Eco-friendly bricks with superior structural properties",
      },
      {
        id: "b3",
        name: "AAC Blocks",
        price: 6500,
        image:
          "https://images.unsplash.com/photo-1565193566173-7cdd77751ffd?w=400&q=80",
        description: "Lightweight blocks offering excellent thermal insulation",
      },
    ],
    Steel: [
      {
        id: "s1",
        name: "TMT 500 Grade",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description: "Standard grade steel with optimal tensile strength",
      },
      {
        id: "s2",
        name: "TMT 550 Grade",
        price: 48000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "Premium grade steel with enhanced durability and strength",
      },
      {
        id: "s3",
        name: "TMT 600 Grade",
        price: 52000,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
        description:
          "Top quality steel offering maximum structural performance",
      },
    ],
  };

  const categories = Object.keys(materialCategories);
  const currentCategoryIndex = categories.indexOf(currentCategory);
  const nextCategory = categories[currentCategoryIndex + 1];

  // Auto-advance after selection
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMaterialSelect = (category, id) => {
    setSelectedMaterials((prev) => ({
      ...prev,
      [category]: id,
    }));
  };

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
    Object.entries(selectedMaterials).forEach(([, id]) => {
      for (let cat of Object.values(materialCategories)) {
        const mat = cat.find((m) => m.id === id);
        if (mat) materialCost += mat.price;
      }
    });

    const baseStructural = area * floors * baseRate * multiplier * 0.5;
    const materials = baseStructural * 0.6 + materialCost * area * 0.001;
    const labor = baseStructural * 0.3;
    const contingency = (baseStructural + materials + labor) * 0.1;
    const total = baseStructural + materials + labor + contingency;

    return {
      baseStructural: baseStructural.toFixed(0),
      materials: materials.toFixed(0),
      labor: labor.toFixed(0),
      contingency: contingency.toFixed(0),
      total: total.toFixed(0),
    };
  };

  const estimate = calculateEstimate();
  const selectedCount = Object.keys(selectedMaterials).length;
  const totalCount = Object.keys(materialCategories).length;
  const isComplete = selectedCount === totalCount;

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

      {/* Header */}
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
        {/* Progress Bar */}
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

        {/* Filters */}
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

        {/* Main Layout */}
        <div
          className="mainLayout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1.1fr",
            gap: "2.5rem",
          }}
        >
          {/* Left - Materials */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category Nav */}
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

            {/* Material Cards */}
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
                  }}
                >
                  {materialCategories[currentCategory].map((material, idx) => (
                    <motion.div
                      key={material.id}
                      onClick={() =>
                        handleMaterialSelect(currentCategory, material.id)
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
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
                      }}
                    >
                      {/* Image */}
                      <div style={{ height: "180px", overflow: "hidden" }}>
                        <img
                          src={material.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* Overlay ✓ */}
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

                      {/* Content */}
                      <div
                        style={{
                          padding: "1.5rem",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          color: T.textMain,
                        }}
                      >
                        <h3 style={{ margin: "0 0 0.5rem" }}>
                          {material.name}
                        </h3>
                        <p
                          style={{
                            color: T.textSecondary,
                            fontSize: "0.9rem",
                            marginBottom: "1rem",
                            flex: 1,
                          }}
                        >
                          {material.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderTop: `1px solid ${T.border}`,
                            paddingTop: "1rem",
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
                              padding: "4px 10px",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                              fontWeight: "600",
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

          {/* Right Panel */}
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
                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: T.textMain,
                  }}
                >
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

              {/* Selected Materials */}
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

                {Object.entries(selectedMaterials).map(([cat, id]) => {
                  const mat = materialCategories[cat].find((m) => m.id === id);

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
                          {mat.name}
                        </p>
                      </div>

                      <span
                        style={{
                          color: "#d4af37",
                          fontWeight: "700",
                        }}
                      >
                        ₹{mat.price.toLocaleString()}
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
                      ₹{parseInt(val).toLocaleString()}
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
                  ₹{parseInt(estimate.total).toLocaleString()}
                </h2>
              </div>

              {/* CTA */}
              <button
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
