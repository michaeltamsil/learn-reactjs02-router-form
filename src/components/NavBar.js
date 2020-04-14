import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="">Home</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="todoapp">TodoApp</Link>
                    <Link className="nav-link" to="data_wanderlink">Data Wanderlink</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navbar1;