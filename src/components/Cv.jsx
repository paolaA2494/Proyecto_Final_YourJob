import React, { Component } from "react";
import estrella from "../images/estrella.png";
import Reservation from './Reservation';


class Cv extends Component {
  state = { 
   
     };

  render() {
    return (
      <div className="container-fluid row justify-content-center">
        <div className="col-sm-6">
          <h1 className=" name text-center text-info mb-5 mt-2">
            {this.props.fullName}
          </h1>
          <img
            className="rounded-circle  m-auto d-block"
            width="250"
            height="250"
            src={this.props.photoProfile}
            alt="Responsive image"
          />
          <div className="d-flex justify-content-center my-4">
            <h2 className="text-center">
              <img src={estrella} className="cards-img mx-2 mb-2 w-45" />
              4.7
            </h2>
          </div>
          <div className="">
            <p className="text-center text-justify">
            {this.props.service}
            </p>
          </div>
          <div className="">
            <p className="text-center text-justify">
            {this.props.about}
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-2">
            <h3>Valor hora:</h3>{" "}
            <h3 className="text-info ml-2">
              <strong>{this.props.rate}</strong>
            </h3>
          </div>
          {/* <div className="mb-5">
            <button type="button" class="btn btn-info m-auto d-block">
              Solicitar servicio
           </button>
          </div> */}
          <Reservation />
        </div>
        <div className="d-flex container-fluid row">
          <div className="px-4 container-12 col-md-6">
            <h3 className="text-center mb-4 text-info">HABILIDADES</h3>
            <p className="text-center">
            {this.props.skills.map((skill, index)=>(<span key={index}>{skill}</span>))}
            </p>
          </div>
          <div className="px-4 container-12 col-md-6">
            <h3 className="text-center text-info mb-4">EXPERIENCIA</h3>
            <p className="text-center ">
            {this.props.experience.map((experience, index)=>(<span key={index}>{experience}</span>))}
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
