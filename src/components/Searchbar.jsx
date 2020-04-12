import React, { Component } from 'react'
import './App.css';


class Searchbar extends Component {
    render() {
        return (

            <main className="inner">
                <div className="col-md-5 mb-3">
                    <h2 for="country justify-content-left "><strong>Busca aquí tu servicio</strong></h2>
                    <div className="row d-flex">
                    <select className="custom-select col-8" id="country" required="">
                        <option value="">Seleccione...</option>
                        <option>Plomeria</option>
                        <option>Estética</option>
                        <option>Eléctrico</option>
                        <option>Mantenimiento de gaseoductos</option>
                    </select>
                    <button className="btn btn-dark btn-block mx-auto col-2" type="submit">Buscar</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default Searchbar;