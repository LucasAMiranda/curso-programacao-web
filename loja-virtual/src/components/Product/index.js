import React from "react";
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../contextApi';
import {Col, Row, Card, Button} from 'react-bootstrap';


function Product(props){
    const {_id, nome, img, preco, inCart} = props.product
    const id = _id;

    return(
        <div className="col-9 mx-auto col-md-6 col-lg-3">
             <ProductConsumer>
                {(value) =>(
                    <Card onClick={() => {value.handleDetails(id)}} style={{width:"18rem"}}>
                        <Link to={`/details/${id}`}>
                            <Card.Img variant="top" src={img} />
                        </Link>

                       <Card.Body>
                            <Card.Title id="nome">{nome}</Card.Title>
                       </Card.Body>
                       <Card.Footer id="footer">
                            <Row>
                                <Col>
                                    <Button size="sm" disabled={inCart} onClick={()=>{value.addToCart(id)}} variant="secondary"></Button>
                                    {inCart === true ? (<span>No Carrinho</span>) : (<span>Adicionar ao carrinho</span>) }
                                </Col>
                                <Col>
                                    <span id="preco" className="text-mutted text-right">{"R$ " + preco}</span>
                                </Col>
                            </Row>
                       </Card.Footer>
                    </Card>
                )}
             </ProductConsumer>
        </div>
    )
}

export default Product;