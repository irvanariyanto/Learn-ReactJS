import React, { Component } from 'react';

class FormInput extends Component {
    state = {
        nama: '',
        alamat: '',
        hobi: '',
        mobil: '',
        jenis_kelamin: 'Laki laki',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <p>Nama saya : {this.state.nama}</p>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                </div>
                <div>
                    <p>Alamat : {this.state.alamat}</p>
                    <input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
                </div>
                <div>
                    <p>Hobi : {this.state.hobi}</p>
                    <input type="text" name="hobi" value={this.state.hobi} onChange={this.handleChange} />
                </div>
                <p>Mobil saya : {this.state.mobil}</p>
                <select name="mobil" id="" value={this.state.mobil} onChange={this.handleChange}>
                    <option value="">-</option>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Pajero">Pajero</option>
                    <option value="BMW">BMW</option>
                    <option value="Merchedes">Merchedes</option>
                </select>

                <p>Jenis kelamin : {this.state.jenis_kelamin}</p>
                <input type="radio" name="jenis_kelamin" value="Laki laki" onChange={this.handleChange} checked={this.state.jenis_kelamin == "Laki laki" ? true : false}/>
                <input type="radio" name="jenis_kelamin" value="Perempuan" onChange={this.handleChange} checked={this.state.jenis_kelamin == "Perempuan" ? true : false}/>
            </div>
        );
    }
}

export default FormInput;