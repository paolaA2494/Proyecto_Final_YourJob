import React, { Component } from "react";
import {FaGoogle } from "react-icons/fa";
import "./App.css";
import { Link } from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);

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

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    
    return (
      //<form className="form-signin mt-5 mb-5">
      <>
        <div className="text-center  mt-5 mb-4 ">
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
            {
              user
                ? <button className="btn border border-info btn-ligth btn-sm col-5 mr-1" onClick={signOut} >Sign out</button>
                : <button className="btn border border-info btn-ligth  btn-sm col-5 mr-1" onClick={signInWithGoogle}> <i className="tex-center-info mr-2">
                <FaGoogle />
              </i>Sign in with Google</button>

            }

        </div>
        <div className="mx-auto col-6 col-ms-12 mt-2 text-center justify-content-center">
                        <button
                            className="btn btn-info btn-sm col-5 mr-1"
                            type="submit"
                        >
                            Ingresar
                         </button>
                    </div>
        <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
        </>
      //</form>
    );
  }
}


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);