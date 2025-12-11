export const calculateEstimate = async (req, res) => {
  try {
    const { city, area, floors, slabArea } = req.body;

    // Convert sq.m to sq.ft
    const areaSqft = area * 10.7639;

    // Material Estimation Formulas
    const cementBags = Math.round(areaSqft * 0.4);
    const steelKg = Math.round(areaSqft * 4.5);
    const bricks = Math.round(areaSqft * 8);
    const sand = Number((areaSqft * 0.04).toFixed(1));
    const aggregate = Number((areaSqft * 0.035).toFixed(1));

    // Cost estimation (change rates as per your city)
    const totalCost =
      cementBags * 350 +     // cement
      steelKg * 70 +         // steel
      bricks * 7 +           // bricks
      sand * 60 +            // sand
      aggregate * 55;        // aggregate

    // JSON response to frontend
    res.json({
      success: true,
      estimation: {
        city,
        area,
        floors,
        slabArea,
        cementBags,
        steelKg,
        bricks,
        sand,
        aggregate,
        totalCost
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error generating estimate" });
  }
};
