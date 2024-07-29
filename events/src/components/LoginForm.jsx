import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import { login } from '../../utils/api'

const LoginForm = (props) => {
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let userData = {
        email,
        password
    }

    const handleSubmit = (event) => {
        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
            login(userData)
        }
    };



    return (
        <div className='row justify-content-md-center text-center'>
            <div className='col-md-4'>
                <h1 className='mb-4'>Log in</h1>
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                name="email"
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