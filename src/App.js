import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductPage from "./interfaces/product-page/ProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
