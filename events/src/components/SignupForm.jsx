import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useContext, useEffect } from 'react';
import { signup } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

const SignupForm = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(false)

    const handleSubmit = async event => {
        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        let userData = {
            email,
            password,
            username
        }
        try {
            const data = await signup(userData);
            setLoggedIn(true);
            navigate('/');
        } catch (err) {
            setError(true);
        }


    };




    return (
        <div className='row justify-content-md-center text-center'>
            <div className='col-md-5'>
                <h1 className='mb-4'>Sign Up</h1>
                {
                    error ?
                        (
                            <div className="alert alert-danger mt-3 mb-0">Sorry, that username/amd or email is unavailable
                            </div>
                        ) : null
                }

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsernamel">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter an email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicButton">
                        <Button className='col-md-3 mt-2' variant="info" type="submit">
                            signup
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}


export default SignupForm;