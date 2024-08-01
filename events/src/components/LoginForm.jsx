import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom"
import { login } from '../../utils/api'
import { LoginContext } from '../App';



const LoginForm = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [error, setError] = useState(false)

    const handleSubmit = event => {
        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        let userData = {
            email,
            password
        }
        return login(userData).then((data) => {
            setLoggedIn(true)
            navigate('/')
        })
            .catch((err) => {
                setError(err);
            })
    };

    return (
        <div className='row justify-content-md-center text-center'>
            <div className='col-md-4'>
                <h1 className='mb-4'>Log in</h1>
                {error ?
                    (
                        <div className="alert alert-danger mt-3 mb-0">login not recognised
                        </div>
                    ) : null
                }
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
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
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicButton">
                        <Button className='col-md-3 mt-2' variant="info" type="submit">
                            login
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;