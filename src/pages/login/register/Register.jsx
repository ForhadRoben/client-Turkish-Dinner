import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-50 mx-auto bg-secondary text-white p-5 m-4 '>
            <h3>Please Register</h3>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='rounded-0 ' type="text" name='name' placeholder="Enter your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='rounded-0 ' type="text" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='rounded-0 ' type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='rounded-0 ' type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='rounded-0 ' variant="info" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-white mt-2 fw-semibold">
                    Already Have an Account? <Link to="/login" className='text-warning '>Login</Link>

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;