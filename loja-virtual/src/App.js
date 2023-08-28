import React, { useState } from 'react';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import RelatedProducts from './components/RelatedProduct';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [selectedProduct, setSelectProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleProductSelect = (product) => {
    selectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
        <ProductList products={products} onSelectedProduct={handleProductSelect} />
        {selectedProduct && (
          <ProductDetail product={selectedProduct} />
        )}
        {selectedProduct && (
          <button onClick={() => handleAddToCart(selectedProduct)}>Adicionar ao Carrinho</button>
        )}
        <RelatedProducts relatedProducts={relatedProducts} />
        <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
