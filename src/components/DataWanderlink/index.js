import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';

import Item from './Item';

class index extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination')
            .then( response => {
                this.setState({ data: response.data });
            })
    }

    render(){
        let tampilkanWisata ;

        tampilkanWisata = this.state.data.map( (item, index) => {
            return <Item key={index} data={item}></Item>
        })

        return (
            <div>
                <h1>Data Wanderlink</h1>
                <Row>
                    { tampilkanWisata }
                </Row>
            </div>
        )
    }
}

export default index;