import { useState, useRef, useCallback } from "react";
import ProductsList from "./pages/ProductsList";

const App = () => {
  return (
    <div className="bg-.bg-secondary">
      <ProductsList />
    </div>
  );
};

export default App;
