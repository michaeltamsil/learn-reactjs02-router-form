import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const Navbar = () => {
    let { path, url } = useRouteMatch();
    return (
        <Nav variant = "pills" defaultActiveKey="/siswa">
            <Nav.Item>
                <Link className="nav-link" to={url}>Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to={`${url}/add`}>Add</Link>
            </Nav.Item>
        </Nav>
    )
}
export default Navbar;