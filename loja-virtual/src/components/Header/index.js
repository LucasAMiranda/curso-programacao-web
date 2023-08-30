import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../../contextApi';


function Header(){

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrand href="#">Loja Virtual</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/'>Produtos</Link>
                    </Nav>
                    <ProductConsumer>
                        {(value) => {
                            return <Link style={{color: "mediumspringgreen"}} eventKey={2} to="/Cart">
                                Meu Carrinho({value.cart.lenght})
                            </Link>
                        }}
                    </ProductConsumer>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;