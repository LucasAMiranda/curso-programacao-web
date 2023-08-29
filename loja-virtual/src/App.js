import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
  );
};

export default App;
