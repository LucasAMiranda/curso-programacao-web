import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const cartData = []; // Inicialize cartData como um array vazio ou com os dados apropriados
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart cart={cartData} />} />
      </Routes>
    </Router>
  );
};

export default App;
