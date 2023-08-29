import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header(){

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">Loja Virtual</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/'>Produtos</Link>
                    </Nav>
                    <div>
                        {(value) => {
                            return <Link style={{color: "mediumspringgreen"}} eventKey={2} to="/Cart">
                                Meu Carrinho({value.cart.lenght})
                            </Link>
                        }}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;