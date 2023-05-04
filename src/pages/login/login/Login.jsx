import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Container className='w-50 mx-auto bg-secondary text-white p-5 m-4 '>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='rounded-0 ' type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='rounded-0 ' type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>

                <Button className='rounded-0 ' variant="info" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-white mt-2 fw-semibold">
                    Don't Have an Account? <Link to="/register" className='text-warning '>Register</Link>
                    <h4 className='mt-2'>Or</h4>
                    <div className='d-flex gap-4'>
                        <Button onClick={handleGoogleSignIn} variant="primary"><FaGoogle /> Login with Google</Button>

                        <Button onClick={handleGithubSignIn} variant="warning" > <FaGithub></FaGithub> Login with Github</Button>
                    </div>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;