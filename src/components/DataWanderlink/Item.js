import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const Item = (props) => {
    const { data } = props
    let { path, url } = useRouteMatch();
    //console.log(path, url);

    return (
        <Col>
            <Card>
            <Card.Img
                style={{
                    height: '100px'
                }}
            variant="top" src={`http://35.240.201.155:3000/${data.images[0]}`} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>content.
                </Card.Text>
                <Link to={`${url}/${data._id}`}>Go there</Link>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;