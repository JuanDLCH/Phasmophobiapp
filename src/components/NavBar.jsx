import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavbarComp() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    }

    return (
        <div>
            <Navbar expand="xl" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to='/' style={{ marginLeft: "15%" }} className={styles.brand}>PHASMOPHOBIAPP</Navbar.Brand>
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
                                <NavDropdown.Item as={NavLink} to={'/voiceLines/general'}>General</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={'/voiceLines/ouija'}>Ouija</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={'/voiceLines/spiritbox'}>SpiritBox</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={'/voiceLines/attacktrigger'}>Attack Trigger</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to='/ghosts/Spirit'>Ghosts</Nav.Link>
                            <Button variant="outline-success" onClick={handleButtonClick}>Ghost Buster</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}