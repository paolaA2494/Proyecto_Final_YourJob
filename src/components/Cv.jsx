import React, { Component } from "react";
import estrella from "../images/estrella.png";
import Reservation from './Reservation';

class Cv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid row justify-content-center">
        <div className="col-sm-6">
          <h1 className=" name text-center text-info mb-5 mt-2">
            LEINA PULGARIN
          </h1>
          <img
            className="rounded-circle  m-auto d-block"
            width="250"
            height="250"
            src="https://previews.123rf.com/images/oncombuntung/oncombuntung1406/oncombuntung140600006/29670152-car%C3%A1cter-con-el-pelo-negro-y-la-piel-draw-latino-en-dibujos-animados-y-estilo-c%C3%B3mico-retro-todos-los-elem.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae necessitatibus repellendus voluptatibus possimus nobis
              blanditiis accusamus fuga iusto earum incidunt nam nihil unde at,
              nesciunt quaerat aspernatur! Natus corporis fuga vitae ea amet
              veritatis, impedit unde tempora ducimus nihil animi?
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-2">
            <h3>Valor hora:</h3>{" "}
            <h3 className="text-info ml-2">
              <strong>$150.000</strong>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio illo veritatis molestias labore architecto sint illum,
              ea totam tempore rem unde molestiae nam excepturi velit, dolorem
              magnam possimus iste deserunt.
            </p>
            <br />
            <p className="text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              laudantium illo delectus odio enim aliquam aperiam, ipsum illum,
              fugiat eius error numquam officia nemo doloribus consectetur
              deserunt rem odit ex.
            </p>
          </div>
          <div className="px-4 container-12 col-md-6">
            <h3 className="text-center text-info mb-4">EXPERIENCIA</h3>
            <p className="text-center ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio illo veritatis molestias labore architecto sint illum,
              ea totam tempore rem unde molestiae nam excepturi velit, dolorem
              magnam possimus iste deserunt.
            </p>
            <br />
            <p className="text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              laudantium illo delectus odio enim aliquam aperiam, ipsum illum,
              fugiat eius error numquam officia nemo doloribus consectetur
              deserunt rem odit ex.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
