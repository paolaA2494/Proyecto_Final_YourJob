import React from "react";
import Swal from "sweetalert2";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._Alerta = this._Alerta.bind(this);
  }

  _Alerta() {
    Swal.fire(
      "haz reservado un servicio con exito",
      "You clicked the button",
      "success"
    );
  }
  render() {
    return (
      <div className="mb-5">
        <button
          type="button"
          class="btn btn-info m-auto d-block"
          onClick={this._Alerta}
        >
          Solicitar servicio
        </button>
      </div>
    );
  }
}

export default Reservation;
