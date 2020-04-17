import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Item = (props) => {
    console.log(props.data);
    const {id, nama, alamat, kelas} = props.data
    const { url } = useRouteMatch();

    const onClick = (event) => {
        axios.delete(`http://localhost:3001/siswa/${id}`)
            .then((response) => {
                console.log(response);
                window.alert('berhasil menghapus data')
            })
            .catch((error) => {
                console.error(error);
                window.alert('maaf, belum bisa menghapus siswa')
            })
    }

    return (
        <tr>
            <td>{nama}</td>
            <td>{alamat}</td>
            <td>{kelas}</td>
            <td>
                <Link to={`${url}/${id}`}>Detail</Link>
                <Button variant="link" onClick={onClick}>Hapus</Button>
            </td>
        </tr>
    )
}

export default Item;