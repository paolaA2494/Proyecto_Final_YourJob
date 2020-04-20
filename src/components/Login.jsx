import React, { Component } from "react";
import { FaGoogle } from "react-icons/fa";
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
      signInWithGoogle,
    } = this.props;


    return (
      <div>

        <div className="container-fluid  row align-items-center vh-100 justify-content-center text-center">
          <div className="Login">
            <div className="Login-container">
              <div className="Login-content">


                {
                  user
                    ? <div>
                      <h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">¡Bienvenido!</h2>
                      <p>{user.displayName}</p>
                      <img class="rounded-circle mb-3" width="110" 
                       height="110" src={user.photoURL} alt="Responsive-image" />
                       <p>{user.email}</p>
                       </div>
                    : <div><h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">Iniciar Sesión</h2>
                      <p>Por favor ingrese</p>
                      </div>
                }

                {
                  user
                    ? <div className="out">
                      <button onClick={signOut} className="btn border border-info my-2" >
                        <span>Cerrar Sesión</span>
                      </button>
                      <Link to="/home" className="text-decoration-none">
                        <button className="btn border btn-info mt-3 d-block m-auto"  >
                          <span>Inicio</span>
                        </button>
                      </Link>
                    </div>

                    : <div className="facebook">
                      <button onClick={signInWithGoogle} className="btn border border-info mb-2"  >
                        <i className="text-info mr-1 text-center"><FaGoogle /></i>
                        <span>Continuar con Google</span>
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
        
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
   googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({providers, firebaseAppAuth})(Login);