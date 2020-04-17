import React, { Component } from 'react'
import Logo from '../images/logo.png'
import './App.css';
import { Link } from 'react-router-dom';




function Navbar() {

    return (
        <div class="navbar shadow-sm mb-auto">
            <div class="container d-flex justify-content-center">
                <div class="navbar-logo align-items-center mr-5">
                    <img class="img-profile" width="200" height="auto" src={Logo} alt="Responsive-image" />
                    <strong className="namecompany text-info">YourJob</strong>
                </div>
                <nav className="my-2 my-md-0 md-3">
                    <Link to="/home">
                    <a className="p-2 text-info" href="#" aria-disabled="true"> <strong className="navname text-info">Inicio</strong></a>
                    </Link>
                    <Link to="/resh">
                    <a className="p-2 text-info" href="#" aria-disabled="true"><strong className="navname text-info">SerWorker</strong></a>
                    </Link>
                    <Link to="/loginh">
                    <a className="p-2 text-info" href="#" aria-disabled="true"><strong className="navname text-info">Iniciar Sesión</strong></a>
                    </Link>
                </nav>
            </div>
        </div>
    );
}



export default Navbar;


