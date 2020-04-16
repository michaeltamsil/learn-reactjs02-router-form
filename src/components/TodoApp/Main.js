import React, { Component } from 'react';
import axios from 'axios';

// const index = () => {
class Main extends Component {

    state = {
        nama: "eririn",
        alamat: "",
        kelas: "0"
    }
    
    submit = (event) => {
        event.preventDefault();

        const { nama, alamat, kelas } = this.state
        axios.post('http://localhost:3000/siswa', {
            nama: nama,
            alamat: alamat,
            kelas: kelas
        })
        .then((response) => {
            console.log(response);
            window.alert('berhasil menambah data');
        })
    }

    onChange = (event) => {
        console.log(event.currentTarget.name);
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>name</label>
                    <input type="text" name="nama" 
                        onChange={this.onChange} 
                        value={this.state.nama}
                    />
                    <br/>
                    <label>alamat</label>
                    <input type="address" name="alamat"
                        onChange={this.onChange}
                        value={this.state.alamat}
                    />
                    <br/>
                    <label>kelas</label>
                    <input type="number" name="kelas"
                        onChange={this.onChange}
                        value={this.state.kelas}
                    />
                    <br/>
                    <button type="submit">Kirim</button>
                </form>
            </div>
        )
    }
}

export default Main;