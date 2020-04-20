import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../utils/firebaseConfig';
import "./App.css";
import { Link } from 'react-router-dom';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {

  render() {
    const {
      user,
      signOut,
      signInWithFacebook,
    } = this.props;


    return (
      <>

        <div className="container-fluid  row align-items-center vh-100 justify-content-center text-center">
          <div className="Login">
            <div className="Login-container">
              <div className="Login-content">


                {
                  user
                    ? <>
                      <h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">¡Bienvenido!</h2>
                      <p>{user.displayName}</p>
                      <img class="rounded-circle mb-3" width="110" 
                       height="110" src={user.photoURL} alt="Responsive-image" /></>
                    : <><h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">Iniciar Sesión</h2>
                      <p>Por favor ingrese</p></>
                }

                {
                  user
                    ? <div className="out">
                      <button onClick={signOut} className="btn border border-info my-2" >
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>

                    : <div className="facebook">
                      <button onClick={signInWithFacebook} className="btn border border-info mb-2"  >
                        <i className="text-info"><FaFacebookF /></i>
                        <span>Continuar con Facebook</span>
                      </button>
                      <Link to="/home" className="text-decoration-none">
                        <button className="btn border btn-info mt-3 d-block m-auto"  >
                          <span>Inicio</span>
                        </button>
                      </Link>
                    </div>
                }
                <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
              </div>
            </div>
          </div>

        </div>
        
      </>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);