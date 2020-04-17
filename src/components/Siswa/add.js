import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Add = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      nama: '',
      alamat: '',
      kelas: 1
    },
    onSubmit: values => {
      console.log(values)
      axios.post('http://localhost:3001/siswa',values)
        .then((response) => {
          console.log(response)
          window.alert('berhasil menambah data siswa')
        })
        .catch((error) => {
          console.error(error);
          window.alert('maaf, belum bisa menambah data siswa');
        })
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>nama</label>
      <input
        name="nama"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nama}
      />
      <br/>
      <label>Alamat</label>
      <input
        type="text"
        name="alamat"
        onChange={formik.handleChange}
        value={formik.values.alamat}
        />
        <br/>
        <label>Kelas</label>
        <input
            type="number"
            name="kelas"
            onChange={formik.handleChange}
            value={formik.values.kelas}
        />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Add;