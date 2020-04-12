import React from 'react';

import './App.css';
import estrella from '../images/estrella.png';

import { Link } from 'react-router-dom';

class Card extends React.Component {
    render(){
    return(
        
        <div>
             <h2 className="card__title">Tenemos varias opciones para ti</h2>
            <div className="container container-card d-flex justify-content-center">
               
            
                <div className=" row ">
                {this.props.info.map((info) => {
                    return (
                        <div key={info.id}className="card mx-4" >
                            <div className="card-body text-center">
                                <img src={info.img} />
                                <p className="card-title ">{info.Name}</p>
                    <p className="card-title"><img src={estrella} className="cards-img" width="5px"/>{info.calificacion}</p> 
                                <p>{info.descripcion}</p>
                                <Link to="/" class="btn btn-primary " target="blank">Ver mas</Link>
                                
                            </div>
                            
                            
                        
                        </div>
                    )
                })}
                </div>
                </div>
                </div>
    
         )
    }
}

export default Card;