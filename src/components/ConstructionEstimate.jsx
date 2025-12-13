// src/components/ConstructionWizardModal.jsx
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ConstructionWizardModal.jsx (Large Premium UI - Dark Glass)
 *
 * - Option B: Large Premium UI
 * - Modal centered, big, dark glass background, white text inside for readability
 * - Inputs, selects, headings, cards, sidebar are made larger
 * - Auto-advance wizard for material selection; final estimate shown after all steps
 *
 * Usage:
 *   import ConstructionWizardModal from "./components/ConstructionWizardModal";
 *   <ConstructionWizardModal theme="dark" />
 */

const ConstructionWizardModal = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  const light = {
    pageBg: "#f6f7f9",
    cardBg: "#fff",
    panelBg: "rgba(255,255,255,0.85)",
    textMain: "#0b0b0b",
    textSecondary: "#666",
    accent: "#d4af37",
    border: "rgba(0,0,0,0.06)",
  };

  const darkTheme = {
    pageBg: "#060606",
    cardBg: "#0f0f10",
    panelBg: "rgba(255,255,255,0.03)",
    textMain: "#ffffff",
    textSecondary: "#cfcfcf",
    accent: "#d4af37",
    border: "rgba(255,255,255,0.06)",
  };

  const T = isDark ? darkTheme : light;

  // ---------- FORM & UI STATE ----------
  const [showHouseModal, setShowHouseModal] = useState(true); // show modal on mount
  const [formData, setFormData] = useState({
    city: "Gurgaon",
    exactArea: "",
    useExactArea: true,
    plotAreaPreset: "3001-5000",
    floors: 2,
    bathrooms: 2,
    constructionQuality: "Standard",
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedMaterials, setSelectedMaterials] = useState({});
  const [showEstimate, setShowEstimate] = useState(false);
  const [autoAdvance] = useState(true);

  // ---------- MATERIAL CATALOG (images representative) ----------
  const materialCategories = useMemo(
    () => ({
      Foundation: [
        { id: "f1", name: "RCC Concrete Mix (M20)", price: 8500, img: "https://images.unsplash.com/photo-1488376731597-3c6a9d2f0aa4?q=80&w=1600&auto=format&fit=crop" },
        { id: "f2", name: "Ready Mix Concrete (M25)", price: 9200, img: "https://images.unsplash.com/photo-1556909218-52c98ee0c98c?q=80&w=1600&auto=format&fit=crop" },
        { id: "f3", name: "Reinforced Concrete (M30)", price: 10500, img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop" },
      ],
      Cement: [
        { id: "c1", name: "Ultratech (bag)", price: 420, img: "https://images.unsplash.com/photo-1601073911943-6c5a4a5e5f05?q=80&w=1600&auto=format&fit=crop" },
        { id: "c2", name: "ACC (bag)", price: 390, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" },
        { id: "c3", name: "Lafarge (bag)", price: 380, img: "https://images.unsplash.com/photo-1600611088023-1f8eaa7fe2f6?q=80&w=1600&auto=format&fit=crop" },
      ],
      Steel: [
        { id: "s1", name: "TMT Fe500 (ton)", price: 45000, img: "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1600&auto=format&fit=crop" },
        { id: "s2", name: "TMT Fe550 (ton)", price: 48000, img: "https://images.unsplash.com/photo-1549399543-4972b016c8c6?q=80&w=1600&auto=format&fit=crop" },
        { id: "s3", name: "TMT Fe600 (ton)", price: 52000, img: "https://images.unsplash.com/photo-1565182999561-8a3b7d0d3a9d?q=80&w=1600&auto=format&fit=crop" },
      ],
      Bricks: [
        { id: "b1", name: "Red Clay (1000 nos)", price: 4500, img: "https://images.unsplash.com/photo-1565182999561-8a3b7d0d3a9d?q=80&w=1600&auto=format&fit=crop" },
        { id: "b2", name: "Fly Ash (1000 nos)", price: 3500, img: "https://images.unsplash.com/photo-1553163147-622ab57e33bb?q=80&w=1600&auto=format&fit=crop" },
        { id: "b3", name: "AAC Blocks (1000 nos)", price: 6500, img: "https://images.unsplash.com/photo-1581093588401-0b5d1fd4a1f7?q=80&w=1600&auto=format&fit=crop" },
      ],
      Pipes: [
        { id: "p1", name: "PVC (rft)", price: 40, img: "https://images.unsplash.com/photo-1581091870620-b2f6c2a0b4c9?q=80&w=1600&auto=format&fit=crop" },
        { id: "p2", name: "CPVC (rft)", price: 70, img: "https://images.unsplash.com/photo-1600180758890-e5d8e5c4d8f2?q=80&w=1600&auto=format&fit=crop" },
        { id: "p3", name: "GI (rft)", price: 180, img: "https://images.unsplash.com/photo-1566150905226-6b06d6a4b5b6?q=80&w=1600&auto=format&fit=crop" },
      ],
      Electrical: [
        { id: "w1", name: "Polycab 1.5mm (m)", price: 20, img: "https://images.unsplash.com/photo-1581090469743-1a1b6a2a1d7f?q=80&w=1600&auto=format&fit=crop" },
        { id: "w2", name: "Havells 2.5mm (m)", price: 30, img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" },
        { id: "w3", name: "Finolex 4mm (m)", price: 50, img: "https://images.unsplash.com/photo-1581091012184-e6d0b5d3f4b2?q=80&w=1600&auto=format&fit=crop" },
      ],
      Taps: [
        { id: "t1", name: "Hindware Basic (per bath)", price: 4000, img: "https://images.unsplash.com/photo-1581579181355-758c36e4b2b6?q=80&w=1600&auto=format&fit=crop" },
        { id: "t2", name: "Jaquar Mid (per bath)", price: 9000, img: "https://images.unsplash.com/photo-1558494949-930c8f3e46cf?q=80&w=1600&auto=format&fit=crop" },
        { id: "t3", name: "Kohler Premium (per bath)", price: 20000, img: "https://images.unsplash.com/photo-1582582494707-0b5b9b5b5b5b?q=80&w=1600&auto=format&fit=crop" },
      ],
      Windows: [
        { id: "win1", name: "Aluminium (per sqft)", price: 220, img: "https://images.unsplash.com/photo-1505691723518-36a36e0c1b8f?q=80&w=1600&auto=format&fit=crop" },
        { id: "win2", name: "UPVC (per sqft)", price: 260, img: "https://images.unsplash.com/photo-1499969390265-0b8af3b7d3e6?q=80&w=1600&auto=format&fit=crop" },
      ],
      Doors: [
        { id: "d1", name: "Flush Door (per pc)", price: 8000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" },
        { id: "d2", name: "Engineered (per pc)", price: 14000, img: "https://images.unsplash.com/photo-1535958637724-1082b7b6b1e8?q=80&w=1600&auto=format&fit=crop" },
        { id: "d3", name: "Hardwood (per pc)", price: 30000, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop" },
      ],
      Finishes: [
        { id: "pf1", name: "Paint (per sqft)", price: 18, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" },
        { id: "pf2", name: "Putty (per sqft)", price: 7, img: "https://images.unsplash.com/photo-1545235617-945f27c2cf2b?q=80&w=1600&auto=format&fit=crop" },
      ],
    }),
    []
  );

  useEffect(() => {
    if (showHouseModal) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showHouseModal]);

  const steps = Object.keys(materialCategories); // ordered steps

  // ---------- HELPERS ----------
  const setForm = (k, v) => setFormData(prev => ({ ...prev, [k]: v }));
  const fmt = (n) => (n || 0).toLocaleString();

  const presetToArea = (p) => {
    if (p === "1000-3000") return 2000;
    if (p === "3001-5000") return 4000;
    if (p === "5001-8000") return 6500;
    if (p === "8001+") return 9000;
    return 3000;
  };

  const qualityBaseRate = (quality, city) => {
    let base = 1500;
    if (quality === "Premium") base = 1800;
    if (quality === "Commercial") base = 2200;
    const cityMul = { Gurgaon: 1.0, Delhi: 1.02, Mumbai: 1.18, Bangalore: 0.98 }[city] || 1;
    return Math.round(base * cityMul);
  };

  const areaUsed = (() => {
    const exact = Number(String(formData.exactArea).replace(/,/g, "")) || 0;
    if (formData.useExactArea && exact > 0) return exact;
    return presetToArea(formData.plotAreaPreset);
  })();

  // ---------- ESTIMATE LOGIC ----------
  const computeEstimate = () => {
    const floors = Number(formData.floors) || 1;
    const bathrooms = Number(formData.bathrooms) || 2;
    const area = Number(areaUsed) || 0;
    const baseRate = qualityBaseRate(formData.constructionQuality, formData.city);
    const baseStructural = Math.round(area * floors * baseRate);

    const cementBagsQty = Math.round(area * 0.4);
    const steelKgQty = Math.round(area * 4.5);
    const bricksQty = Math.round(area * 8);
    const bricksPacks = Math.ceil(bricksQty / 1000);
    const plumbingRunFeet = Math.round(area * 0.8);
    const wiringMeters = Math.round(area * 1.2);
    const windowsArea = Math.round(area * 0.18);
    const doorsCount = Math.max(Math.round(floors * 3), 1);

    let materialsSelectedCost = 0;
    const findMat = (id) => {
      for (const cat of Object.values(materialCategories)) {
        const m = cat.find(x => x.id === id);
        if (m) return m;
      }
      return null;
    };
    for (const [cat, id] of Object.entries(selectedMaterials)) {
      if (!id) continue;
      const mat = findMat(id);
      if (!mat) continue;
      const price = Number(mat.price) || 0;
      switch (cat) {
        case "Cement":
          materialsSelectedCost += cementBagsQty * price; break;
        case "Steel":
          materialsSelectedCost += (steelKgQty / 1000) * price; break;
        case "Bricks":
          materialsSelectedCost += bricksPacks * price; break;
        case "Foundation":
          materialsSelectedCost += Math.round((area * price) / 1000); break;
        case "Pipes":
          materialsSelectedCost += plumbingRunFeet * price; break;
        case "Electrical":
          materialsSelectedCost += wiringMeters * price; break;
        case "Taps":
          materialsSelectedCost += price * bathrooms; break;
        case "Windows":
          materialsSelectedCost += windowsArea * price; break;
        case "Doors":
          materialsSelectedCost += doorsCount * price; break;
        case "Finishes":
          materialsSelectedCost += area * price; break;
        default:
          materialsSelectedCost += price;
      }
    }

    const plumbingBase = Math.round(area * 20 + bathrooms * 6000);
    const electricalBase = Math.round(area * 40);
    const paintDefault = Math.round(area * 18);
    const puttyDefault = Math.round(area * 7);

    const total = baseStructural + Math.round(materialsSelectedCost) + plumbingBase + electricalBase + paintDefault + puttyDefault;

    return {
      area, floors, baseRate, baseStructural,
      materialsSelectedCost: Math.round(materialsSelectedCost),
      plumbingBase, electricalBase, paintDefault, puttyDefault,
      cementBagsQty, steelKgQty, bricksQty, plumbingRunFeet, wiringMeters, windowsArea, doorsCount, total
    };
  };

  const estimate = computeEstimate();

  // ---------- WIZARD BEHAVIOR ----------
  useEffect(() => {
    const currentCategory = steps[currentStepIndex];
    const selected = selectedMaterials[currentCategory];
    const isLast = currentStepIndex === steps.length - 1;

    if (selected && autoAdvance && !isLast) {
      const timer = setTimeout(() => setCurrentStepIndex(i => Math.min(i + 1, steps.length - 1)), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedMaterials, currentStepIndex, autoAdvance, steps]);

  const allSelected = steps.every(s => selectedMaterials[s]);
  const currentCategory = steps[currentStepIndex];

  const toggleSelect = (category, id) => {
    setSelectedMaterials(prev => ({ ...prev, [category]: prev[category] === id ? undefined : id }));
  };

  const goPrev = () => setCurrentStepIndex(i => Math.max(i - 1, 0));
  const goNext = () => setCurrentStepIndex(i => Math.min(i + 1, steps.length - 1));
  const restart = () => {
    setSelectedMaterials({});
    setShowEstimate(false);
    setCurrentStepIndex(0);
    setShowHouseModal(true);
  };

  // ---------- UI COMPONENTS (LARGER SIZES) ----------
  const LargeMaterialCard = ({ m, selected, onClick }) => (
    <motion.div layout whileHover={{ scale: 1.02 }} onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        background: T.cardBg,
        display: "flex",
        flexDirection: "column",
        minHeight: 500,          // big card
        boxShadow: isDark ? "0 18px 40px rgba(0,0,0,0.6)" : "0 10px 24px rgba(0,0,0,0.06)",
      }}>
      <div style={{ height: 300, background: "#111" }}> {/* larger image area */}
        <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div style={{ fontWeight: 900, fontSize: 20, color: T.textMain, lineHeight: 1.1 }}>{m.name}</div>
          <div style={{ color: T.accent, fontWeight: 900, fontSize: 20 }}>₹{fmt(m.price)}</div>
        </div>
        <div style={{ color: T.textSecondary, marginTop: 4, fontSize: 15 }}>Tap card to select — after selection wizard will move to next.</div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: selected ? "#000" : T.textSecondary, fontWeight: 900 }}>{selected ? "Selected" : "Tap to select"}</div>
          {selected && <div style={{ background: T.accent, padding: "10px 14px", borderRadius: 12, fontWeight: 900 }}>✓</div>}
        </div>
      </div>
    </motion.div>
  );

  // ---------- RENDER ----------
  return (
    <div style={{ minHeight: "100vh", background: T.pageBg, color: T.textMain, fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      {/* HOUSE INFO MODAL - CENTER BIG DARK GLASS */}
      <AnimatePresence>
        {showHouseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.82)",   // darker overlay
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ y: -10, scale: 0.99, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.99, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{
                width: "94%",
                maxWidth: 1100,                // larger modal
                borderRadius: 24,
                background: "linear-gradient(180deg, rgba(30,30,30,0.82), rgba(18,18,18,0.88))",
                padding: 36,
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                border: `1px solid rgba(212,175,55,0.28)`,
                color: T.textMain,
              }}
            >
              <div style={{ display: "flex", gap: 26 }}>
                <div style={{ flex: 1 }}>
                  <h1 style={{ margin: 0, fontSize: 30, fontWeight: 900, color: T.textMain }}>Project Details</h1>
                  <p style={{ color: T.textSecondary, marginTop: 10, fontSize: 16 }}>Fill house information to begin the guided material selection (larger UI).</p>

                  <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
                    <div style={{ display: "flex", gap: 14 }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>City</label>
                        <select value={formData.city} onChange={(e) => setForm("city", e.target.value)} style={selectStyle(T)}>
                          <option>Gurgaon</option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                          <option>Bangalore</option>
                        </select>
                      </div>

                      <div style={{ width: 180 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>Quality</label>
                        <select value={formData.constructionQuality} onChange={(e) => setForm("constructionQuality", e.target.value)} style={selectStyle(T)}>
                          <option>Standard</option>
                          <option>Premium</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 14 }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>Exact Area (sq.ft)</label>
                        <input value={formData.exactArea} onChange={(e) => setForm("exactArea", e.target.value)} placeholder="e.g. 3500" style={inputStyle(T)} />
                      </div>

                      <div style={{ width: 160 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>Floors</label>
                        <input type="number" min={1} value={formData.floors} onChange={(e) => setForm("floors", e.target.value)} style={inputStyle(T)} />
                      </div>

                      <div style={{ width: 160 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>Bathrooms</label>
                        <input type="number" min={0} value={formData.bathrooms} onChange={(e) => setForm("bathrooms", e.target.value)} style={inputStyle(T)} />
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 10, color: T.textSecondary, fontSize: 15 }}>
                        <input type="checkbox" checked={formData.useExactArea} onChange={(e) => setForm("useExactArea", e.target.checked)} style={{ width: 18, height: 18 }} /> Use exact area
                      </label>

                      <div style={{ flex: 1 }}>
                        <label style={{ display: "block", color: T.textSecondary, marginBottom: 6, fontSize: 15 }}>Preset area (used if exact not enabled)</label>
                        <select value={formData.plotAreaPreset} onChange={(e) => setForm("plotAreaPreset", e.target.value)} style={selectStyle(T)}>
                          <option value="1000-3000">1000-3000</option>
                          <option value="3001-5000">3001-5000</option>
                          <option value="5001-8000">5001-8000</option>
                          <option value="8001+">8001+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ width: 380, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ background: T.cardBg, padding: 18, borderRadius: 14, border: `1px solid ${T.border}` }}>
                    <div style={{ color: T.textSecondary, fontSize: 14 }}>Quick preview</div>
                    <div style={{ fontWeight: 900, fontSize: 22, marginTop: 10, color: T.textMain }}>{fmt(areaUsed)} sq.ft</div>
                    <div style={{ color: T.textSecondary, marginTop: 8, fontSize: 15 }}>Floors: <strong style={{ color: T.textMain }}>{formData.floors}</strong> • Baths: <strong style={{ color: T.textMain }}>{formData.bathrooms}</strong></div>
                    <div style={{ marginTop: 12, textAlign: "center" }}>
                      <small style={{ color: T.textSecondary }}>Select materials next. Final estimate visible after all steps selected.</small>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => { /* keep Cancel for future behavior */ }} style={ghostBtnStyle(T)}>Cancel</button>
                    <button onClick={() => { setShowHouseModal(false); }} style={primaryBtnStyle(T)}>Next → Select Materials</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PAGE (wizard & breakdown) */}
      <div style={{ maxWidth: 1220, margin: "36px auto", padding: "0 18px" }}>
        <div style={{ display: "flex", gap: 26 }}>
          <div style={{ flex: 1 }}>
            {/* header */}
            <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>Construction Cost Wizard</h2>
                <div style={{ color: T.textSecondary, marginTop: 8 }}>House info modal first → then step-by-step material selection (large cards).</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: T.textSecondary }}>Area used</div>
                <div style={{ fontWeight: 900, fontSize: 20 }}>{fmt(areaUsed)} sq.ft</div>
              </div>
            </div>

            {/* wizard panel */}
            <div style={{ background: T.cardBg, border: `1px solid ${T.border}`, padding: 18, borderRadius: 16 }}>
              <div style={{ marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: T.textSecondary, fontSize: 15 }}>Step {currentStepIndex + 1} of {steps.length} — <strong style={{ color: T.textMain }}>{currentCategory}</strong></div>
                <div style={{ color: T.textSecondary }}>{steps.map(s => selectedMaterials[s] ? "●" : "○").join("  ")}</div>
              </div>

              <div style={{ minHeight: 520 }}>
                {/* large cards grid for current category */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(460px,1fr))", gap: 20 }}>
                  {materialCategories[currentCategory].map(m => (
                    <LargeMaterialCard
                      key={m.id}
                      m={m}
                      selected={selectedMaterials[currentCategory] === m.id}
                      onClick={() => toggleSelect(currentCategory, m.id)}
                    />
                  ))}
                </div>
              </div>

              {/* nav */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, gap: 12 }}>
                <div>
                  <button onClick={goPrev} disabled={currentStepIndex === 0} style={navBtnStyle(T, currentStepIndex === 0)}>← Previous</button>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => setCurrentStepIndex(steps.length - 1)} style={ghostBtnStyle(T)}>Jump to Last</button>
                  <button onClick={goNext} disabled={currentStepIndex === steps.length - 1} style={primaryBtnStyle(T)}>Next →</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: sidebar summary & final actions */}
          <div style={{ width: 420, position: "sticky", top: 24 }}>
            <div style={{ background: T.cardBg, border: `1px solid ${T.border}`, padding: 18, borderRadius: 14 }}>
              <h3 style={{ marginTop: 0, fontSize: 20 }}>Project Summary</h3>
              <div style={{ color: T.textSecondary, fontSize: 14 }}>City</div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{formData.city}</div>

              <div style={{ marginTop: 12, color: T.textSecondary, fontSize: 14 }}>Area used</div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{fmt(areaUsed)} sq.ft</div>

              <div style={{ marginTop: 12, color: T.textSecondary, fontSize: 14 }}>Floors / Baths</div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{formData.floors} / {formData.bathrooms}</div>

              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: T.textSecondary }}>
                  <div style={{ fontSize: 14 }}>Selected</div>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>{Object.keys(selectedMaterials).filter(k => selectedMaterials[k]).length}/{steps.length}</div>
                </div>

                <div style={{ marginTop: 12 }}>
                  {steps.map(s => {
                    const id = selectedMaterials[s];
                    const mat = id ? materialCategories[s].find(x => x.id === id) : null;
                    return (
                      <div key={s} style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                        <div style={{ color: mat ? T.textMain : T.textSecondary }}>{s}</div>
                        <div style={{ color: mat ? T.accent : T.textSecondary, fontWeight: mat ? 800 : 600 }}>{mat ? mat.name : "—"}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: T.textSecondary }}>
                  <div style={{ fontSize: 14 }}>Estimated total (preview)</div>
                  <div style={{ fontWeight: 900, color: T.accent, fontSize: 18 }}>₹{fmt(estimate.total)}</div>
                </div>
                <small style={{ color: T.textSecondary }}>Final breakdown after Calculate (all steps selected)</small>
              </div>

              <div style={{ marginTop: 16 }}>
                <button onClick={() => { if (allSelected) setShowEstimate(true); }} disabled={!allSelected} style={allSelected ? primaryBtnStyle(T) : disabledBtnStyle()}>
                  Calculate Estimate
                </button>
                <button onClick={restart} style={{ marginTop: 10, width: "100%", padding: 12, borderRadius: 12, border: `1px solid ${T.border}`, background: "transparent", color: T.textSecondary, fontWeight: 800 }}>Restart (start over)</button>
              </div>
            </div>

            {/* mini quantities */}
            <div style={{ marginTop: 14, background: T.cardBg, border: `1px solid ${T.border}`, padding: 14, borderRadius: 14 }}>
              <div style={{ color: T.textSecondary, fontSize: 14 }}>Quantities (approx)</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
                <SmallCard title="Cement bags" value={fmt(estimate.cementBagsQty)} />
                <SmallCard title="Steel (kg)" value={fmt(estimate.steelKgQty)} />
                <SmallCard title="Bricks (nos)" value={fmt(estimate.bricksQty)} />
                <SmallCard title="Plumbing (rft)" value={fmt(estimate.plumbingRunFeet)} />
                <SmallCard title="Wiring (m)" value={fmt(estimate.wiringMeters)} />
                <SmallCard title="Windows (sqft)" value={fmt(estimate.windowsArea)} />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL ESTIMATE overlay */}
        <AnimatePresence>
          {showEstimate && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} style={{ marginTop: 26 }}>
              <div style={{ background: T.cardBg, border: `1px solid ${T.border}`, padding: 20, borderRadius: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 20 }}>Final Estimate</h3>
                    <div style={{ color: T.textSecondary, marginTop: 8 }}>{fmt(estimate.area)} sq.ft • {estimate.floors} floors</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: T.textSecondary }}>TOTAL</div>
                    <div style={{ fontSize: 30, fontWeight: 900, color: T.accent }}>₹{fmt(estimate.total)}</div>
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                  <Row label="Structural Work" value={`₹${fmt(estimate.baseStructural)}`} />
                  <Row label="Selected Materials" value={`₹${fmt(estimate.materialsSelectedCost)}`} />
                  <Row label="Plumbing (base)" value={`₹${fmt(estimate.plumbingBase)}`} />
                  <Row label="Electrical (base)" value={`₹${fmt(estimate.electricalBase)}`} />
                  <Row label="Paint (default)" value={`₹${fmt(estimate.paintDefault)}`} />
                  <Row label="Putty (default)" value={`₹${fmt(estimate.puttyDefault)}`} />
                  <hr style={{ border: "none", height: 1, background: T.border, margin: "6px 0" }} />
                  <Row label="TOTAL" value={`₹${fmt(estimate.total)}`} bold />
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                  <button onClick={() => setShowEstimate(false)} style={ghostBtnStyle(T)}>Edit selections</button>
                  <button onClick={() => navigator.clipboard?.writeText(JSON.stringify({ formData, selectedMaterials, estimate }))} style={primaryBtnStyle(T)}>Copy Estimate JSON</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ---------- STYLES & SMALL HELPERS ----------
const inputStyle = (T) => ({
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.04)",
  color: T.textMain,
  fontSize: 16,
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
});

const selectStyle = (T) => ({
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.04)",
  color: T.textMain,
  fontSize: 16,
});

const primaryBtnStyle = (T) => ({
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: "none",
  background: T.accent,
  color: "#000",
  fontWeight: 900,
  cursor: "pointer",
  fontSize: 16,
});

const ghostBtnStyle = (T) => ({
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: `1px solid ${T.border}`,
  background: "transparent",
  color: T.textMain,
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
});

const navBtnStyle = (T, disabled) => ({
  padding: "12px 18px",
  borderRadius: 12,
  border: `1px solid ${T.border}`,
  background: "transparent",
  color: disabled ? T.textSecondary : T.textMain,
  fontWeight: 800,
  cursor: disabled ? "not-allowed" : "pointer",
  fontSize: 15,
});

const disabledBtnStyle = () => ({
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: "none",
  background: "rgba(255,255,255,0.03)",
  color: "rgba(255,255,255,0.4)",
  fontWeight: 900,
  cursor: "not-allowed",
  fontSize: 16,
});
const Row = ({ label, value, bold = false }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
    <div style={{ color: "#9aa0a6", fontSize: 15 }}>{label}</div>
    <div style={{ fontWeight: bold ? 900 : 800, color: "#d4af37", fontSize: 15 }}>{value}</div>
  </div>
);   




const SmallCard = ({ title, value }) => (
  <div style={{ padding: 12, borderRadius: 12, background: "transparent", border: "1px solid rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div style={{ color: "#9aa0a6", fontSize: 14 }}>{title}</div>
    <div style={{ fontWeight: 900, fontSize: 14 }}>{value}</div>
  </div>
);

export default ConstructionWizardModal;
