import React from 'react';
import { Button } from 'react-bootstrap';
const ButtonSuccess = (props) => {

    return (
        <Button variant="success">{props.children}</Button>
    )
}

export default ButtonSuccess;