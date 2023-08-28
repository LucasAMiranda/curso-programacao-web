import React from 'react';

const Product = ({ product }) => {
    return (
      <div className='product'>
           <img src={product.image} alt={product.name} />
           <h3>{product.name}</h3>
           <p>Preço: {product.price}</p>
           <p>Avaliação: {product.rating}</p>
      </div>
    );
}

export default Product;