import { Link } from "react-router-dom";
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/header.png'
import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

export default function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    let admin = false;
    if (user) {
        admin = user.admin;
    }
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    let formpath = "/login";
    let wording = "login";
    if (loggedIn) {
        formpath = "/logout";
        wording = "logout"
    }

    return (
        <Navbar data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img
                        alt="cartoon crane"
                        src={logo}
                        width="40"
                        height="30"
                    />
                    PixelPushing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {loggedIn && admin ?
                            <Nav.Link href="/addevent">Add Event</Nav.Link>
                            : null
                        }
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={formpath}>{wording}</Nav.Link>
                        {loggedIn ? null :
                            <Nav.Link href="/signup">signup</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
};

