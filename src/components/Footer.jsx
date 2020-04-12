import React, { Component } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./App.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer mt-auto shadow">
        <div className="footer-container d-flex justify-content-between">
          <div className="general-info mt-3 pl-5 pr-5">
            <p>Téminos y condiciones</p>
            <p>Politica de Privacidad</p>
            <p className="text-info"> YorJob © 2020</p>
          </div>
          <div className="contact-info mt-3 mr-5 ml-5 pl-5 pr-5">
            <h5 className="text-dark">Encuetranos en:</h5>
            <section>
              <div class="footer_icons text-center">
                <a
                  className="icon-face text-info mr-1"
                  href="#"
                  target="_blank"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a
                  className="icon-face text-info mr-1"
                  href="#"
                  target="_blank"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
                <a
                  className="icon-face text-info mr-1"
                  href="#"
                  target="_blank"
                >
                  <i>
                    <FaTwitterSquare />
                  </i>
                </a>
                <a
                  className="icon-face text-info mr-1"
                  href="·"
                  target="_blank"
                >
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
