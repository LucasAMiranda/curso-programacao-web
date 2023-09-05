import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemedButton from './components/ThemedButton';
import Header from './components/Header';
import FilterProduct from './components/FilterProduct';
import InputFilter from './components/InputFilter';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import { ProductProvider } from './contextApi';
import './App.css';

const App = () => {
  return (
    <ProductProvider>
      <ThemedButton>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/" element={<FilterProduct />} />
            <Route path="/" element={<InputFilter />} />
            <Route exact path="/" element={<ProductList />} />
            <Route path="/details/:id" element={<Details />} /> {/* Defina a rota para detalhes com o parâmetro :id */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ThemedButton>
    </ProductProvider>
  );
};

export default App;
