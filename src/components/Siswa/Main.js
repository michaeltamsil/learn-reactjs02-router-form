import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import Item from './Item';

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // console.log('useEffect', hitung++)
        axios.get('http://localhost:3001/siswa')
        .then((response) => {
            // console.log(response);
            setData(response.data)
        })
        .catch((error) => {
            console.log(error);
            alert('maaf, data belum dapat ditampilkan')
        })
    }, [] )

    return (
        <div>
            <h1>Siswa</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Kelas</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>{
                data.map((item, index) => {
                     console.log(item)
                    const { nama, alamat, kelas } = item;
                    // const nama = item.nama;
                    // const alamat = item.alamat;
                    // const kelas = item.kelas;

                    // return (
                    //     <tr key={index}>
                    //         <td>{nama}</td>
                    //         <td>{alamat}</td>
                    //         <td>{kelas}</td>
                    //     </tr>
                    // )

                    return (
                        <Item key={index} data={item}/>
                    )
                })
                }</tbody>
            </Table>
        </div>
    )
}
export default Main;