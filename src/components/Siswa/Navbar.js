import React from 'react';
import { Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const Navbar = () => {
    let { url } = useRouteMatch();
    
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href={url}>Siswa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${url}/add`}>Add</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;