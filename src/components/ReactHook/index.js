import React, { useState, useEffect } from 'react';


const Index = () => {
    const [nilai, setNilai] = useState(0)
    const obj = {
        nama: "",
        alamat: "batam center"
    }
    const [data, setNama] = useState(obj);

    const ubahNilai = () => {
        setNilai(nilai + 1);
    }

    useEffect(() => {
        console.log('begin useEffect')
        return () =>{
            console.log('tamat');
        }
    }, nilai)

    return (
        <div>
            <h1>belajar react hook</h1>
            <h3>nilai sekarang adalah  {nilai}</h3>
            <h3>dengan nama : {data.alamat}</h3>
            <button onClick={ubahNilai}>Tambah 1</button>
        </div>
    )
}

export default Index;