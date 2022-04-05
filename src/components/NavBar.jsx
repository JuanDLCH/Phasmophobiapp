import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import styles from '../styles/NavBar.module.css';

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar expand="xl" bg="dark" variant="dark" fixed="top">
                    <Container fluid>
                        <Link to="/">
                            <Navbar.Brand style={{ marginLeft: "15%" }} className={styles.brand}>PHASMOPHOBIAPP</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Nav style={{ marginRight: "15%" }}>
                                <NavDropdown title="Voicelines" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">General</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Ouija</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">SpiritBox</NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">Attack Trigger</NavDropdown.Item>
                                </NavDropdown>
                                <Link to="/ghosts/Spirit">
                                    <Nav.Link href = "/">Ghosts</Nav.Link>
                                </Link>
                                <Link to="/ghosts/Spirit">
                                    <Button variant="outline-success">Ghost Buster</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}