import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid:md>
                    <Navbar.Brand href="#home" className='fs-2 font'><span className='text-info '>Turkish </span><span className='text-warning'>Dinner</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-start align-items-center">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link href="#memes">
                                <Button variant="info">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;