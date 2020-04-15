import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  render() {
    return (
      <main className="inner">
        <div className="col-md-5 mb-3 col-sm-8">
          <h2 className="country justify-content-left ">
            <strong>Busca aquí tu servicio</strong>
          </h2>
          <div className="row d-flex justify-content-center">
            <select className="custom-select col-8 " id="country" required="">
              <option value="">Seleccione...</option>
              <option>Plomeria</option>
              <option>Estética</option>
              <option>Eléctrico</option>
              <option>Mantenimiento de gaseoductos</option>
            </select>
            <div className="mx-auto col-3 ">
              <Link to="/showcard" className="text-decoration-none">
                <button className="btn btn-dark btn-block " type="submit">
                  Buscar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Searchbar;
