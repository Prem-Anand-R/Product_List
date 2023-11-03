import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />}></Route> 
        <Route path="/:id" element={<ProductInfo/>}></Route>         
      </Routes>
    </Router>
  );
}

export default App;
