import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ProductConsumer } from '../../contextApi';
import './styles.css';

function Detail(props) {
    return (
        <ProductConsumer>
            {(value) => {
                const { _id, nome, descricao, img, preco, inCart } = value.detailProduct;
                const id = _id;

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
                                        onClick={() => value.addToCart(id)} // Use value.addToCart from the context
                                        variant="secondary"
                                    >
                                        {inCart ? <span>No Carrinho</span> : <span>Adicionar ao Carrinho</span>}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
    );
}

export default Detail;
