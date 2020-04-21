import React, { Component } from "react";
import { FaGoogle } from "react-icons/fa";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../utils/firebaseConfig";
import "./App.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
>>>>>>> 6035155d2bb96ca8626e6fe8f2455474c097c326

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Login extends Component {
<<<<<<< HEAD
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
=======


 
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    
    const {
      _Alerta = () => {
        Swal.fire(
          "Se ha enviado una solicitud de servicio a nuestro Worker, pronto se comunicará contigo 😃",
          "You clicked the button",
          "success"
        );
      }
    
    } = this.props

    const { onClick = () =>{
      
      _Alerta()

      var template_params = {
        "to_email": user.email,
        
        }
  
        emailjs.send('gmail','template_bYg9fKfE' , template_params,'user_xD9elWf14F7djoaxBeUmk' )
        .then((response) => { 
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
  
       
    });
  
    console.log("fjvei")
  
    } } = this.props;
>>>>>>> 6035155d2bb96ca8626e6fe8f2455474c097c326

    return (
      <div>
        <div className="container-fluid  row align-items-center vh-100 justify-content-center text-center">
          <div className="Login">
            <div className="Login-container">
              <div className="Login-content">
                {user ? (
                  <div>
                    <h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
                      ¡Bienvenido!
                    </h2>
                    <p>{user.displayName}</p>
                    <img
                      class="rounded-circle mb-3"
                      width="110"
                      height="110"
                      src={user.photoURL}
                      alt="Responsive-image"
                    />
                    <p>{user.email}</p>
                  </div>
                ) : (
                  <div>
                    <h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
                      Iniciar Sesión
                    </h2>
                    <p>Por favor ingrese</p>
                  </div>
                )}

<<<<<<< HEAD
                {user ? (
                  <div className="out">
                    <button
                      onClick={signOut}
                      className="btn border border-info my-2"
                    >
                      <span>Cerrar Sesión</span>
                    </button>
                    <Link to="/home" className="text-decoration-none">
                      <button className="btn border btn-info mt-3 d-block m-auto">
                        <span>Inicio</span>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="facebook">
                    <button
                      onClick={signInWithGoogle}
                      className="btn border border-info mb-2"
                    >
                      <i className="text-info mr-1 text-center">
                        <FaGoogle />
                      </i>
                      <span>Continuar con Google</span>
                    </button>
                    <Link to="/home" className="text-decoration-none">
                      <button className="btn border btn-info mt-3 d-block m-auto">
                        <span>Inicio</span>
=======

                {
                  user
                    ? <div>
                      <h2 className="h3 mb-3 font-weight-normal text-info font-weight-bold">¡Bienvenido!</h2>
                      <p>{user.displayName}</p>
                      <img class="rounded-circle mb-3" width="110" 
                       height="110" src={user.photoURL} alt="Responsive-image" />
                       <p id="email">{user.email}</p>
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
                        <button onClick={onClick} className="btn border btn-info mt-3 d-block m-auto"  >
                          <span>Confirmar</span>
                        </button>
                      </Link>
                    </div>

                    : <div className="facebook">
                      <button onClick={signInWithGoogle} className="btn border border-info mb-2"  >
                        <i className="text-info mr-1 text-center"><FaGoogle /></i>
                        <span>Continuar con Google</span>
>>>>>>> 6035155d2bb96ca8626e6fe8f2455474c097c326
                      </button>
                    </Link>
                  </div>
                )}
                <p className="mt-5 mb-3 text-center text-info">
                  {" "}
                  YourJob © 2020
                </p>
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

export default withFirebaseAuth({ providers, firebaseAppAuth })(Login);
