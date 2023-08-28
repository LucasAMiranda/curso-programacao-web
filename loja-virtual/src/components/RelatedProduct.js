import React from "react";

const RelatedProducts = ({ relatedProducts}) => {
     return(
        <div className="related-products">
            <h3>Produtos Relacionados</h3>
            <div className="product-list">
                {relatedProducts.map(product => (
                   <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
     )
};
export default RelatedProducts;