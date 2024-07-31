import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { LoginContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const navigate = useNavigate();
    return (
        <>
            <Button variant="info" className='justify-content-md-center' onClick={() => {
                console.log('logging oout...');
                localStorage.clear();
                setLoggedIn(false);
                navigate('/')
            }}
            >log out</Button>
        </>
    )
}

export default Logout;