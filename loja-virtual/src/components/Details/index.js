import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ProductConsumer } from '../../contextApi';
import ThemeContext from '../../context/ThemeContext'; // Certifique-se de que o caminho está correto

function Detail(props) {
    const themeContext = useContext(ThemeContext);

    return (
        <ProductConsumer>
            {(value) => {
                const { _id, nome, descricao, img, preco, inCart } = value.detailProduct;
                const id = _id;

                return (
                    <Container className="mt-5" style={{ color: themeContext.theme.foreground, background: themeContext.theme.background }}>
                        <Row className="justify-content-center">
                            <Col xs={10} md={6} lg={4} className="text-center">
                                <img src={img} className="img-fluid" alt="produto" />
                            </Col>
                            <Col xs={10} md={6} lg={6} className="text-center mt-3">
                                <h1 style={{ marginRight: '5em'}}>Detalhes do {nome}</h1>
                                <h3>{nome}</h3>
                                <h5>
                                    <strong>Preço: R$ {preco}</strong>
                                </h5>
                                <h6>Descrição do Produto:</h6>
                                <div>{descricao}</div>
                                <div className="mt-3">
                                    <Link to="/" className="btn btn-outline-primary">
                                        Voltar para página de produtos
                                    </Link>
                                </div>
                                <div className="mt-3" style={{ marginLeft: '250px' }}>
                                    <Button
                                        size="sm"
                                        disabled={inCart}
                                        onClick={() => value.addToCart(id)}
                                        variant={inCart ? "success" : "secondary"}
                                    >
                                        {inCart ? 'No Carrinho' : 'Adicionar ao Carrinho'}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                );
            }}
        </ProductConsumer>
    );
}

export default Detail;
