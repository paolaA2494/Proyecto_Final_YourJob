import React from "react";

import "./App.css";
import estrella from "../images/estrella.png";

import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div>
        <h2 className="card__title">Tenemos varias opciones para ti</h2>
        <div className="container-card d-flex mt-5 justify-content-center">
          <div className="row justify-content-center">
            {this.props.info.map((info) => {
              return (
                <div key={info.id} className="container-col card mx-4 mb-4">
                  <div className="card-body text-center">
                    <img src={info.img} />
                    <p className="card-title ">{info.Name}</p>
                    <p className="card-title">
                      <img src={estrella} className="cards-img" width="5px" />
                      {info.calificacion}
                    </p>
                    <p>{info.descripcion}</p>

                    <Link to="/cv">
                      <button class="btn btn-info">Ver mas</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
