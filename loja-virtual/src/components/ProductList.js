import React from 'react';
import Product from '../components/Product';

const ProductList = ({products}) => {
    return (
       <div>
          <h2>Produtos Disponíveis</h2>
          <div className="product-list">
              {products.map(product => (
                 <Product key={product.id} product={product} />
              ))};
          </div>
       </div>
    );
}

export default ProductList;