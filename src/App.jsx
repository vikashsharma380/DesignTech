import { useState, lazy, Suspense } from "react";
// ...existing code...
const PremiumConstruction = lazy(() => import("./PremiumConstruction"));

function App() {
  // ...existing code...
  return (
    <>
      <PremiumConstruction />
    </>
  );
}

export default App;
