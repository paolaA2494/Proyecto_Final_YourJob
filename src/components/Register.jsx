import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <form className="form-signin mt-5 mb-5">
                <div className="text-center">
                    <h1 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
                        Ser Worker
            </h1>
                    <p>Registra los siguientes datos para ser parte de nuestro equipo </p>
                    <p className="text-center">Los campos maracados con <span class="obligate text-info">*</span> son obligatorios</p>
                </div>

                <div className="mx-auto col-6">
                    <label for="firstName">Nombre completo: <span class="obligate text-primary">*</span></label>
                    <input type="text" className="form-control" id="firstName" placeholder="Ingrese su nombre completo" required="" />
                    <div className="invalid-feedback">
                        Valid first name is required.
            </div>
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label for="email">Email: <span class="obligate text-primary">*</span></label>
                    <input type="tel" className="form-control" id="email" placeholder="you@example.com" />
                    <div className="invalid-feedback">
                        Valid first name is required.
          </div>
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label for="cellphone">Teléfono de Contacto: <span class="obligate text-primary">*</span></label>
                    <input type="cellphone" className="form-control" id="cellphone" pattern="[0-12]{12}" placeholder="Ingrese su número de contacto" />
                    <div className="invalid-feedback">
                        Valid first name is required.
          </div>
                </div>
                <div className="mx-auto col-6 mt-4">
                    <label for="state">Ciudad: <span class="obligate text-primary">*</span></label>
                    <select className="custom-select d-block w-100" id="state" required="">
                        <option value="">Seleccione...</option>
                        <option>Medellin</option>
                        <option>Envigado</option>
                        <option>Sabaneta</option>
                        <option>Itagui</option>
                        <option>La Estrella</option>
                        <option>Barbosa</option>
                    </select>
                </div>
                <div className="mx-auto col-6 mt-4">
                <label for="state">Habilidades <span class="obligate text-primary">*</span></label>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="skill-plo"/>
                        <label class="custom-control-label" for="skill-plo">Plomeria</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="skill-est"/>
                        <label class="custom-control-label" for="skill-est">Estéticas</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="skill-ele"/>
                        <label class="custom-control-label" for="skill-ele">Eléctricos</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="skill-mdg"/>
                        <label class="custom-control-label" for="skill-mdg">Mantenimiento de gaseoductos</label>
                </div>
                </div>

                    <div className="mx-auto col-6 col-ms-12 mt-5 text-center justify-content-center">
                        <button
                            className="btn btn-info btn-sm col-5 mr-1"
                            type="submit"
                        >
                            Registrar
                         </button>
                        
                    </div>
                    <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
        </form>
      );
    }
  }

  export default Register;

