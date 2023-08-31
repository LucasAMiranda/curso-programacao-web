import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../../contextApi';


function Header(){

    return(
        <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">Loja Virtual</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Produtos</Nav.Link>
                    </Nav>
                    <ProductConsumer>
                        {(value) => (
                            <Nav.Link as={Link} to="/cart" style={{ color: "mediumspringgreen" }}>
                                Meu Carrinho ({value.cart.length})
                            </Nav.Link>
                        )}
                    </ProductConsumer>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;