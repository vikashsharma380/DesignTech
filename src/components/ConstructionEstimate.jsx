import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConstructionEstimate = () => {
  const [formData, setFormData] = useState({
    city: "Gurgaon",
    plotArea: "3001-5000",
    floors: "2",
    constructionType: "Isolated",
  });

  const [selectedMaterials, setSelectedMaterials] = useState({});
  const [currentCategory, setCurrentCategory] = useState("Foundation");
  const [autoAdvance, setAutoAdvance] = useState(true);

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

  // Auto-advance to next category when selection made
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
    <div style={styles.page}>
      {/* Header */}
      <motion.div
        style={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={styles.pageTitle}>Construction Cost Estimator</h1>
        <p style={styles.pageSubtitle}>
          Complete your project details and choose premium materials for your
          dream construction
        </p>
      </motion.div>

      <div style={styles.container}>
        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <motion.div
              style={{
                ...styles.progressFill,
                width: `${(selectedCount / totalCount) * 100}%`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(selectedCount / totalCount) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <p style={styles.progressText}>
            {selectedCount} of {totalCount} Materials Selected
          </p>
        </div>

        {/* Filters */}
        <motion.div
          style={styles.filtersCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={styles.filterGrid}>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={styles.filterSelect}
              >
                <option value="Gurgaon">Gurgaon</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Plot Area</label>
              <select
                name="plotArea"
                value={formData.plotArea}
                onChange={handleChange}
                style={styles.filterSelect}
              >
                <option value="1000-3000">1000 - 3000 Sqft</option>
                <option value="3001-5000">3001 - 5000 Sqft</option>
                <option value="5001-8000">5001 - 8000 Sqft</option>
                <option value="8001+">8001+ Sqft</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Floors</label>
              <select
                name="floors"
                value={formData.floors}
                onChange={handleChange}
                style={styles.filterSelect}
              >
                <option value="1">1 Floor (G)</option>
                <option value="2">2 Floors (G + 1)</option>
                <option value="3">3 Floors (G + 2)</option>
                <option value="4">4 Floors (G + 3)</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Construction Type</label>
              <select
                name="constructionType"
                value={formData.constructionType}
                onChange={handleChange}
                style={styles.filterSelect}
              >
                <option value="Isolated">Isolated</option>
                <option value="Attached">Attached</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Main Layout */}
        <div style={styles.mainLayout}>
          {/* Left Panel */}
          <motion.div
            style={styles.leftPanel}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category Navigation */}
            <div style={styles.categoryNav}>
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  onClick={() => setCurrentCategory(cat)}
                  style={{
                    ...styles.navButton,
                    ...(currentCategory === cat && styles.navButtonActive),
                    ...(selectedMaterials[cat] && styles.navButtonSelected),
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={styles.navNumber}>{idx + 1}</span>
                  <span style={styles.navName}>{cat}</span>
                  {selectedMaterials[cat] && (
                    <span style={styles.navCheck}>✓</span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Materials Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                style={styles.materialsSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={styles.sectionHeader}>
                  <h2 style={styles.sectionTitle}>{currentCategory}</h2>
                  <p style={styles.sectionSubtitle}>
                    Select the best option for your project
                  </p>
                </div>

                <div style={styles.materialsGrid}>
                  {materialCategories[currentCategory].map((material, idx) => (
                    <motion.div
                      key={material.id}
                      onClick={() =>
                        handleMaterialSelect(currentCategory, material.id)
                      }
                      style={{
                        ...styles.materialCard,
                        ...(selectedMaterials[currentCategory] ===
                          material.id && styles.materialCardActive),
                      }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 12px 24px rgba(212, 175, 55, 0.15)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {/* Image */}
                      <div style={styles.imageWrapper}>
                        <img
                          src={material.image}
                          alt={material.name}
                          style={styles.materialImg}
                        />
                        <AnimatePresence>
                          {selectedMaterials[currentCategory] ===
                            material.id && (
                            <motion.div
                              style={styles.selectedOverlay}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <span style={styles.selectedCheckmark}>✓</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Content */}
                      <div style={styles.cardContent}>
                        <h3 style={styles.matName}>{material.name}</h3>
                        <p style={styles.matDesc}>{material.description}</p>
                        <div style={styles.matFooter}>
                          <span style={styles.matPrice}>
                            ₹{material.price.toLocaleString()}
                          </span>
                          <motion.span
                            style={styles.selectTag}
                            animate={{
                              background:
                                selectedMaterials[currentCategory] ===
                                material.id
                                  ? "rgba(212, 175, 55, 0.3)"
                                  : "rgba(212, 175, 55, 0.15)",
                              color:
                                selectedMaterials[currentCategory] ===
                                material.id
                                  ? "#d4af37"
                                  : "#d4af37",
                            }}
                          >
                            {selectedMaterials[currentCategory] === material.id
                              ? "Selected"
                              : "Select"}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Panel - Sticky Estimation */}
          <motion.div
            style={styles.rightPanel}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={styles.estimationCard}>
              {/* Header */}
              <div style={styles.estimHeader}>
                <h3 style={styles.estimTitle}>Cost Estimation</h3>
                <motion.span
                  style={styles.completeBadge}
                  animate={{
                    opacity: isComplete ? 1 : 0.4,
                    scale: isComplete ? 1 : 0.8,
                  }}
                >
                  {isComplete ? "✓ Complete" : "In Progress"}
                </motion.span>
              </div>

              {/* Selected Materials */}
              <div style={styles.selectedBox}>
                <h4 style={styles.selectedBoxTitle}>Your Selection</h4>
                <AnimatePresence>
                  {Object.entries(selectedMaterials).map(([category, id]) => {
                    const material = materialCategories[category]?.find(
                      (m) => m.id === id
                    );
                    return (
                      <motion.div
                        key={category}
                        style={styles.selectedItem}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div style={styles.itemInfo}>
                          <span style={styles.itemCategory}>{category}</span>
                          <p style={styles.itemNameSmall}>{material?.name}</p>
                        </div>
                        <span style={styles.itemPriceSmall}>
                          ₹{material?.price.toLocaleString()}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Cost Breakdown */}
              <div style={styles.breakdownBox}>
                <h4 style={styles.breakdownTitle}>Cost Breakdown</h4>
                <div style={styles.breakdownItem}>
                  <span style={styles.breakdownLabel}>Structural Work</span>
                  <span style={styles.breakdownValue}>
                    ₹{parseInt(estimate.baseStructural).toLocaleString()}
                  </span>
                </div>
                <div style={styles.breakdownItem}>
                  <span style={styles.breakdownLabel}>Materials</span>
                  <span style={styles.breakdownValue}>
                    ₹{parseInt(estimate.materials).toLocaleString()}
                  </span>
                </div>
                <div style={styles.breakdownItem}>
                  <span style={styles.breakdownLabel}>Labor</span>
                  <span style={styles.breakdownValue}>
                    ₹{parseInt(estimate.labor).toLocaleString()}
                  </span>
                </div>
                <div style={styles.breakdownItem}>
                  <span style={styles.breakdownLabel}>Contingency</span>
                  <span style={styles.breakdownValue}>
                    ₹{parseInt(estimate.contingency).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div style={styles.totalBox}>
                <span style={styles.totalLabel}>Total Estimated Cost</span>
                <motion.h2
                  style={styles.totalAmount}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  ₹{parseInt(estimate.total).toLocaleString()}
                </motion.h2>
              </div>

              {/* Info */}
              <div style={styles.infoBox}>
                <h4 style={styles.infoTitle}>Unit Construction Cost</h4>
                <p style={styles.infoText}>Pay just 0.5% to avail this rate</p>
                <p style={styles.infoAmount}>₹0</p>
              </div>

              {/* CTA */}
              <motion.button
                style={styles.consultBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Professional Consultation →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "#0a0a0a",
    minHeight: "100vh",
    paddingTop: "80px",
    paddingBottom: "4rem",
  },

  header: {
    textAlign: "center",
    padding: "3.5rem 5rem 2rem",
    background:
      "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, transparent 100%)",
    borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
    marginBottom: "2.5rem",
  },

  pageTitle: {
    fontSize: "2.8rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 0.8rem",
    letterSpacing: "-1px",
  },

  pageSubtitle: {
    fontSize: "1.05rem",
    color: "#d0d0d0",
    fontWeight: "300",
    maxWidth: "650px",
    margin: "0 auto",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 5rem",
  },

  progressContainer: {
    marginBottom: "2.5rem",
  },

  progressBar: {
    height: "3px",
    background: "rgba(212, 175, 55, 0.1)",
    borderRadius: "2px",
    overflow: "hidden",
    marginBottom: "0.8rem",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #d4af37, #f4e5c3)",
    borderRadius: "2px",
  },

  progressText: {
    fontSize: "0.85rem",
    color: "#888",
    margin: 0,
    fontWeight: "600",
  },

  filtersCard: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "12px",
    padding: "1.8rem",
    marginBottom: "2.5rem",
    backdropFilter: "blur(10px)",
  },

  filterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "1.5rem",
  },

  filterGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  filterLabel: {
    fontSize: "0.85rem",
    color: "#d0d0d0",
    fontWeight: "600",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },

  filterSelect: {
    padding: "0.85rem 1rem",
    background: "rgba(10, 10, 10, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
  },

  mainLayout: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1.1fr",
    gap: "2.5rem",
  },

  leftPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  categoryNav: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    padding: "1.8rem",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "12px",
  },

  navButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    padding: "0.8rem 1.4rem",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1.5px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "8px",
    color: "#d0d0d0",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
  },

  navButtonActive: {
    background: "rgba(212, 175, 55, 0.15)",
    borderColor: "rgba(212, 175, 55, 0.4)",
    color: "#d4af37",
  },

  navButtonSelected: {
    background: "rgba(74, 222, 128, 0.1)",
    borderColor: "rgba(74, 222, 128, 0.3)",
    color: "#4ade80",
  },

  navNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "22px",
    height: "22px",
    background: "rgba(212, 175, 55, 0.2)",
    borderRadius: "50%",
    fontSize: "0.8rem",
    fontWeight: "700",
  },

  navName: {
    flex: 1,
  },

  navCheck: {
    fontSize: "1rem",
    fontWeight: "700",
  },

  materialsSection: {
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "14px",
    padding: "2.5rem",
    backdropFilter: "blur(10px)",
  },

  sectionHeader: {
    marginBottom: "2.5rem",
  },

  sectionTitle: {
    fontSize: "1.8rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 0.4rem",
  },

  sectionSubtitle: {
    fontSize: "0.95rem",
    color: "#888",
    margin: 0,
    fontWeight: "300",
  },

  materialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1.5rem",
  },

  materialCard: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1.5px solid rgba(212, 175, 55, 0.1)",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },

  materialCardActive: {
    background: "rgba(212, 175, 55, 0.12)",
    borderColor: "rgba(212, 175, 55, 0.4)",
    boxShadow: "0 0 25px rgba(212, 175, 55, 0.2)",
  },

  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "180px",
    overflow: "hidden",
    background: "rgba(10, 10, 10, 0.5)",
  },

  materialImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  selectedOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(212, 175, 55, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedCheckmark: {
    fontSize: "2.5rem",
    color: "#d4af37",
    fontWeight: "700",
  },

  cardContent: {
    padding: "1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  matName: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 0.5rem",
  },

  matDesc: {
    fontSize: "0.8rem",
    color: "#888",
    margin: "0 0 1rem",
    lineHeight: "1.4",
    flex: 1,
  },

  matFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(212, 175, 55, 0.1)",
  },

  matPrice: {
    fontSize: "1rem",
    color: "#d4af37",
    fontWeight: "700",
  },

  selectTag: {
    fontSize: "0.75rem",
    padding: "0.4rem 0.8rem",
    borderRadius: "4px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
  },

  rightPanel: {
    display: "flex",
    flexDirection: "column",
  },

  estimationCard: {
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "14px",
    padding: "2rem",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: "100px",
  },

  estimHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.8rem",
    paddingBottom: "1.2rem",
    borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
  },

  estimTitle: {
    fontSize: "1.4rem",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "700",
    color: "#fff",
    margin: 0,
  },

  completeBadge: {
    fontSize: "0.8rem",
    padding: "0.4rem 0.9rem",
    background: "rgba(74, 222, 128, 0.15)",
    color: "#4ade80",
    borderRadius: "4px",
    fontWeight: "600",
  },

  selectedBox: {
    background: "rgba(212, 175, 55, 0.06)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "10px",
    padding: "1.2rem",
    marginBottom: "1.5rem",
  },

  selectedBoxTitle: {
    fontSize: "0.85rem",
    color: "#d4af37",
    fontWeight: "700",
    margin: "0 0 1rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  selectedItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.8rem",
    marginBottom: "0.8rem",
    borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
  },

  itemInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  itemCategory: {
    fontSize: "0.75rem",
    color: "#888",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  itemNameSmall: {
    fontSize: "0.9rem",
    color: "#fff",
    fontWeight: "600",
    margin: 0,
  },

  itemPriceSmall: {
    fontSize: "0.95rem",
    color: "#d4af37",
    fontWeight: "700",
  },

  breakdownBox: {
    background: "rgba(212, 175, 55, 0.04)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "10px",
    padding: "1.2rem",
    marginBottom: "1.5rem",
  },

  breakdownTitle: {
    fontSize: "0.85rem",
    color: "#d4af37",
    fontWeight: "700",
    margin: "0 0 1rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  breakdownItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.8rem",
    marginBottom: "0.8rem",
    borderBottom: "1px solid rgba(212, 175, 55, 0.08)",
  },

  breakdownLabel: {
    fontSize: "0.85rem",
    color: "#888",
    fontWeight: "500",
  },

  breakdownValue: {
    fontSize: "0.95rem",
    color: "#d4af37",
    fontWeight: "700",
  },

  totalBox: {
    background:
      "linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(244, 229, 195, 0.06))",
    border: "1.5px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },

  totalLabel: {
    fontSize: "0.85rem",
    color: "#888",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    display: "block",
    marginBottom: "0.6rem",
  },

  totalAmount: {
    fontSize: "2.2rem",
    color: "#d4af37",
    fontWeight: "800",
    margin: 0,
  },

  infoBox: {
    background: "rgba(212, 175, 55, 0.06)",
    border: "1px solid rgba(212, 175, 55, 0.12)",
    borderRadius: "8px",
    padding: "1.2rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },

  infoTitle: {
    fontSize: "0.8rem",
    color: "#d4af37",
    fontWeight: "700",
    margin: "0 0 0.4rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  infoText: {
    fontSize: "0.85rem",
    color: "#d0d0d0",
    margin: "0 0 0.6rem",
  },

  infoAmount: {
    fontSize: "1.1rem",
    color: "#d4af37",
    fontWeight: "700",
    margin: 0,
  },

  consultBtn: {
    width: "100%",
    padding: "1.1rem",
    background: "linear-gradient(135deg, #d4af37, #f4e5c3)",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "700",
    fontSize: "0.95rem",
    cursor: "pointer",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },
};

export default ConstructionEstimate;
