import React, { useEffect, useState }  from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/siswa')
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(response => {
            console.log(response);
        })
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>alamat</th>
                        <th>kelas</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    const { nama, alamat, kelas } = item;
                    return (
                        <tr key={index}>
                            <td>{nama}</td>
                            <td>{alamat}</td>
                            <td>{kelas}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}
export default Main;