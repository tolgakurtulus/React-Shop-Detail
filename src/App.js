import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import React from "react";

function App() {
  return (
    <div className="c-app">
      <Header />
      <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
