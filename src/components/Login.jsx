import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      password: "",
    };
  }

  valueToState(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <form className="form-signin mt-5 mb-5">
        <div className="text-center mb-4 ">
          <h1 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
            Iniciar Sesión
          </h1>
          <p>Inicia sesión como Worker o como User</p>
        </div>

        <div className="form-label-group text-center">
          <input
            onChange={(event) => {
              this.valueToState(event.target.value, "email");
            }}
            type="email"
            value={this.state.email}
            id="inputEmail"
            className="form-control mx-auto col-4 mt-5"
            placeholder="Email address"
            required=""
          />
        </div>

        <div className="form-label-group text-center">
          <input
            onChange={(event) => {
              this.valueToState(event.target.value, "password");
            }}
            type="password"
            value={this.state.password}
            id="inputPassword"
            className="form-control mx-auto col-4 mt-3"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="mx-auto col-6 col-ms-12 mt-5 text-center justify-content-center">
                        <button
                            className="btn btn-info btn-sm col-5 mr-1"
                            type="submit"
                        >
                            Ingresar
                         </button>
                    </div>
        <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
      </form>
    );
  }
}

export default Login;
