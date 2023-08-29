import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link corretamente
import { Button } from 'react-bootstrap';
import './styles.css';

function Detail(props) {
    return (
        <div className="container">
            <div className="col-10 mx-auto text-center">
                <h1>Detalhes do {nome}</h1>
            </div>

            <div className="row">
                <div className="col-4 mx-auto col-md-4">
                    <img src={img} className="img-fluid" alt="produto" />
                </div>
            </div>

            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h3>{nome}</h3>
                    <h5>
                        <strong>Preço : R$ {preco}</strong>
                    </h5>
                    <h6>Descrição do Produto:</h6>
                    <div id="dsc">{descricao}</div>
                    <div>
                        <Link id="lk" to="/">
                            Voltar para página de produtos
                        </Link>

                        <Button
                            size="sm"
                            disabled={inCart}
                            onClick={() => addToCart(_id)} // Corrija a passagem da função addToCart
                            variant="secondary"
                        >
                            {inCart ? <span>No Carrinho</span> : <span>Adicionar ao Carrinho</span>}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
