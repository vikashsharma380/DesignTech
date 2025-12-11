import { useState, lazy, Suspense } from "react";
// ...existing code...
const PremiumConstruction = lazy(() => import("./PremiumConstruction"));

function App() {
  return (
    <>
      <PremiumConstruction />
    </>
  );
}

export default App;
