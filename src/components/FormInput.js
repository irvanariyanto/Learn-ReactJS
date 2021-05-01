import React, { Component } from 'react';

class FormInput extends Component {
    state = {
        nama: '',
        alamat: '',
        hobi: '',
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
            </div>
        );
    }
}

export default FormInput;