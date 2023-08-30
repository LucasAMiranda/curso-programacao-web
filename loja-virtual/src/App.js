import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemedButton from './components/ThemedButton';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const cartData = []; // Inicialize cartData como um array vazio ou com os dados apropriados
  return (
   <ThemedButton>
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}/> 
          <Route exact path="/" element={<ProductList />} />
          <Route path ="/details/:id" element={<Details/>} />
          <Route path="/cart" element={<Cart cart={cartData} />} />
        </Routes>
      </Router>
    </ThemedButton>
  );
};

export default App;
