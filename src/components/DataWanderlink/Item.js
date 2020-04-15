import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = (props) => {
    console.log(props.data)
    const { data } = props
    console.log(data._id)
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
                <Link to={`http://localhost:3001/data_wanderlink/${data._id}`}>Go there</Link>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;