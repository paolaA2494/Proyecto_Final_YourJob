import React from "react";

import "./App.css";
import estrella from "../images/estrella.png";

import { Link } from "react-router-dom";

class Card extends React.Component {

  

  constructor(props){
    super(props)
  }
  
  render() {
    const {info} = this.props;

    if(this.props.info.length ==0){
      return(
          <div>
             <h3> No tiene su hoja de vida registrada Registrala </h3> 
             <Link to="/resh">Create new CV</Link>
          </div>
      )
  }
    return (
      <div>
        <h2 className="card__title">Tenemos varias opciones para ti</h2>
        <div className="container-card d-flex mt-5 justify-content-center">
          <div className="row justify-content-center">
            {info.map((item) => {
              return (
                <div key={item.id} className="container-col card mx-4 mb-4">
                  <div className="card-body text-center">
                    <img src={item.photoProfile} />
                    <p className="card-title ">{item.fullName}</p>
                    <p className="card-title">
                      <img src={estrella} className="cards-img" width="5px" />
                      4.7
                    </p>
                    <p>{item.about}</p>

                    <Link to={`/cv/${item.id}`}>
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
