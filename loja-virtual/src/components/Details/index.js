import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductConsumer } from '../../contextApi';

function Details() {
    const { id } = useParams(); // Captura o ID da URL
    const productContext = useContext(ProductConsumer);

    // Encontre o produto correspondente com base no ID
    const product = productContext.productList.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div>
            <h2>Detalhes do Produto</h2>
            <h3>{product.nome}</h3>
            <p>{product.descricao}</p>
            <img src={product.img} alt={product.nome} />
            {/* Renderize os outros detalhes do produto aqui */}
        </div>
    );
}

export default Details;
