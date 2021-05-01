import React, { Component } from 'react';

class Counter extends Component{
    state = {
        angka: 0
    }
    
    tambah = () => {
        this.setState(prevState => ({
            angka: prevState.angka + 1
        })) ;
    };
    
    kurang = () => {
        this.setState(prevState => ({
            angka: prevState > 0 ? prevState.angka - 1 : 0
        }));
    }
    render() {
        return(
            <div>
                <p>{this.state.angka}</p>
                <button onClick={this.tambah}>Tambah</button>
                <button onClick={this.kurang}>Kurang</button>
            </div>
        )
    }
}

export default Counter