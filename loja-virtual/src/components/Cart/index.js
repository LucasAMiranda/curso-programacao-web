import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {ProductConsumer} from '../../contextApi';
import "./styles.css";

function Cart({ cart, decrement, increment, removeItem, cartSubTotal }) {
    return (
        <section>
            <ProductConsumer>
            {cart.length > 0 ? (
                <div>
                    <div>
                        <h1>Seu Carrinho</h1>
                    </div>
                    <Container fluid className="text-center">
                        <Row>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Produto</strong>
                            </Col>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Nome do produto</strong>
                            </Col>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Preço</strong>
                            </Col>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Quantidade</strong>
                            </Col>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Remover</strong>
                            </Col>
                            <Col className="col-10 max-auto col-lg-2">
                                <strong>Total</strong>
                            </Col>
                        </Row>
                    </Container>
                    {cart.map((cartData) => (
                        <Container fluid className="text-center" key={cartData._id}>
                            <Row>
                                <Col className="col-10 max-auto col-lg-2">
                                    <img
                                        style={{ width: "6rem", height: "4rem" }}
                                        src={cartData.img}
                                        className="img-fluid"
                                        alt="imagem_produto"
                                    />
                                </Col>
                                <Col className="col-10 max-auto col-lg-2">
                                    {cartData.nome}
                                </Col>
                                <Col className="col-10 max-auto col-lg-2">
                                    R$ {cartData.preco}
                                </Col>
                                <Col className="col-10 max-auto col-lg-2">
                                    <Button
                                        variant="secondary"
                                        onClick={() => decrement(cartData._id)}
                                        size="sm"
                                    >
                                        -
                                    </Button>{" "}
                                    {cartData.count}{" "}
                                    <Button
                                        variant="secondary"
                                        onClick={() => increment(cartData._id)}
                                        size="sm"
                                    >
                                        +
                                    </Button>
                                </Col>
                                <Col className="col-10 max-auto col-lg-2">
                                    <Button
                                        variant="secondary"
                                        onClick={() => removeItem(cartData._id)}
                                        size="sm"
                                    >
                                        Remover
                                    </Button>
                                </Col>
                                <Col className="col-10 max-auto col-lg-2">
                                    R$ {parseFloat(cartData.total.toFixed(2))}
                                </Col>
                            </Row>
                        </Container>
                    ))}
                    <hr />
                    <Container>
                        <Row>
                            <Col id="total">
                                <strong>Total</strong> R${" "}
                                {parseFloat(cartSubTotal.toFixed(2))}
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <div id="vazio">
                    <h3>
                        Atualmente o seu carrinho de compras está{" "}
                        <span style={{ color: "red" }}>Vazio</span>
                    </h3>
                </div>
            )}
            </ProductConsumer>
        </section>
    );
}

export default Cart;
