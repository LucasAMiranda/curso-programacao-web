import React from 'react';

const ProductDetail = ({ product }) => {
    return(
       <div className="product-detail">
            <img src={product.image} alt={product} />
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <p>Descrição: {product.description}</p>
            <p>Tamanho: {product.size}</p>
            <p>Material: {product.material}</p>
            <p>Instruções de Cuidado: {product.CareInstructions}</p>
       </div>
    );
}
export default ProductDetail;