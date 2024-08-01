import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { LoginContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';

const Logout = () => {
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const navigate = useNavigate();
    return (
        <>
            <Row className="row justify-content-md-center text-center col-md-2 m-auto">
                <Button variant="info" onClick={() => {
                    console.log('logging oout...');
                    localStorage.clear();
                    setLoggedIn(false);
                    navigate('/')
                }}
                >log out</Button>
            </Row>
        </>
    )
}

export default Logout;