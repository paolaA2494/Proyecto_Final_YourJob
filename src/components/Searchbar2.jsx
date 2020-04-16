import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  handleSelectChange = (evet) => {
    const { handlChange } = this.props;
    handlChange(evet.target.value);
  };

  render() {
    return (
      <main className="inner2">
        <div className="col-md-5 mb-3 col-sm-8">
          <h2 className="country justify-content-left ">
            <strong>Busca aquí tu servicio</strong>
          </h2>
          <div className="row d-flex justify-content-center">
            <select
              className="custom-select col-8"
              id="country"
              required=""
              name="select-service"
              onChange={this.handleSelectChange}
            >
              <option value="">Seleccione...</option>
              <option value="plomeria">Plomeria</option>
              <option value="estetica">Estética</option>
              <option value="electrico">Eléctrico</option>
              <option value="gaseoducto">Mantenimiento de gaseoductos</option>
            </select>
            <div className="mx-auto col-3">
              <button className="btn btn-dark btn-block" type="submit">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Searchbar;
