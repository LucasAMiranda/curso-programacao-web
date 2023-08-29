import React from "react";

import {Link} from 'react-router-dom';
import {Col, Row, Card, Button} from 'react-bootstrap';


function Product(props){
    const {_id, nome, img, preco, inCart} = props.product
    const id = _id;

    return(
        <div className="col-9 mx-auto col-md-6 col-lg-3">
             <div>
                {(value) =>(
                    <Card onClick={() => {value.handleDetails(id)}} style={{width:"18rem"}}>
                        <Link to={`/details/${id}`}>
                            <Card.Img variant="top" src={img} />
                        </Link>

                       <Card.Body>
                            <Card.Title id="nome">{nome}</Card.Title>
                       </Card.Body>

                    </Card>
                )}
             </div>
        </div>
    )
}

export default Product;