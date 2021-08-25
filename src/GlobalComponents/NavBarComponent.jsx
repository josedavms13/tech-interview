import React from 'react';

import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';


function NavBarComponent({}) {
    return (


        <Navbar bg="dark" variant={"dark"} expand="md">
            <Container>
                <Navbar.Brand href="#home">A multinational company store :)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#/log-in">Login</Nav.Link>
                        <Nav.Link href="#/admin-page">ADMIN</Nav.Link>
                        <Nav.Link href="#/shop">Shop</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarComponent;