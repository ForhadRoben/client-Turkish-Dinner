import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to="/" className='fs-2 font text-decoration-none'><span className='text-info '>Turkish </span><span className='text-warning'>Dinner</span></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-start align-items-center text-decoration-none gap-4">
                            <Link to="/" className='text-decoration-none'>Home</Link>
                            <Link to="/blogs" className='text-decoration-none'>Blogs</Link>
                            {user ? <><FaUserAlt className='fs-3'></FaUserAlt> <Button onClick={handleLogOut} variant="info" className='fw-semibold'>Logout</Button> </> :
                                <Link to="/login">
                                    <Button variant="info" className='fw-semibold'>Login</Button>
                                </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;