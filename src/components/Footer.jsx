import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
    
    render() { 
        return (
            <div className="footer">
               <div className="footer-container">
                   <div className="general-info">
                      <h5>Téminos y condiciones</h5>
                      <h5>Politica de Privacidad</h5>
                      <p className="font-size: 14px;"> YorJob © 2020</p>
                   </div>
                   <div className="contact-info">
                       <h1>Encuetranos en:</h1>
                       <section>
                        <div class="footer_icons text-center">
                            <a href="#" target="_blank"><i><FaFacebookF /></i></a>
                            <a href="#" target="_blank"><i><FaInstagram /></i></a>
                            <a href="#" target="_blank"><i><FaTwitterSquare /></i></a>
                            <a href="·" target="_blank"><i><FaLinkedin/></i></a>
               
                      </div>
                    </section>
                   </div>
               </div>

            </div>
          );
    }
}
 
export default Footer;