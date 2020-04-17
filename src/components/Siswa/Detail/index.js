import React, { useEffect, useState } from 'react';
import {Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Hoby from './Hoby';
import Pacar from './Pacar';
import Pelajaran from './Pelajaran';

const Detail = () => {
    const { id } = useParams();
    let { path } = useRouteMatch();

    let [data, setData] = useState({
        nama: '',
        alamat: '',
        kelas: '',
        laptop: 'toshiba'
    });
    // componentDidMount karena parameter kedua adala array kosong
    useEffect(()=> {
        axios.get(`http://localhost:3001/siswa/${id}`)
            .then( response =>{
                setData(response.data)
            })
            .catch((error) => {
                window.alert('maaf belum dapat menampilkan data')
            })
    }, [])
    return (
    <div>
        {`Detail nomor induk siswa adalah ${id}`}
        <br/>
        Nama : {data.nama}
        <br/>
        Alamat : {data.alamat}
        <br/>
        Kelas : {data.kelas}
        <br/>
        laptop : {data.laptop}
        <Navbar/>
        <Switch>
          <Route path={`${path}/pelajaran`} exact>
            <Pelajaran/>
          </Route>
          <Route path={`${path}/pacar`}>
            <Pacar/>
          </Route>
          <Route path={`${path}/hoby`}>
            <Hoby/>
          </Route>
          <Route path={`${path}/`}>
            <h1>
              tidak ditemukan
            </h1>
          </Route>

        </Switch>
    </div>
    )
}

export default Detail;