import React from 'react';

import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';


function NavBarComponent({}) {
    return (


        <Navbar bg="dark" variant={"dark"} expand="md">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#/protected">Protected</Nav.Link>
                        <Nav.Link href="#/log-in">Login</Nav.Link>
                        <Nav.Link href="#/table">table</Nav.Link>
                        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarComponent;