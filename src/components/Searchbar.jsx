import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  render() {
    return (

      <>
       <main className="inner">
        <div className="container-description py-5">
          <h1 className=" container text-center text-black-50 py-5">
            YourJob 
          </h1>
          <h3 className=" container text-center text-black-50 py-5">
            Conéctate con tú Worker favortito
          </h3>
          <h4 className="country text-center text-black-50 mb-5 ">
            A un solo Click!
          </h4>
          <Link to="/showcard" className="text-decoration-none">
            <button className="btn btn-dark  px-2  d-block m-auto " type="submit">
              Conectar
        </button>
          </Link>
        </div>
        
    {/* <div class="album py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm bg-">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm border-info">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm border-info">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      </div>  */}
      </main>
      </>
    );
  }
}

export default Searchbar;

{/* <div className="container d-flex row justify-content-between">
<div className="bg-white container col-sm-12 col-md-4 col-lg-4 col-xl-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint atque dolor distinctio provident odit necessitatibus, nihil reprehenderit illum amet, harum illo. Voluptatem beatae dolores laborum accusantium harum omnis, veritatis sint.</div>
<div className="bg-white  container col-sm-12 col-md-4 col-lg-4 col-xl-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint atque dolor distinctio provident odit necessitatibus, nihil reprehenderit illum amet, harum illo. Voluptatem beatae dolores laborum accusantium harum omnis, veritatis sint.</div>
<div className="bg-white container col-sm-12 col-md-4 col-lg-4 col-xl-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint atque dolor distinctio provident odit necessitatibus, nihil reprehenderit illum amet, harum illo. Voluptatem beatae dolores laborum accusantium harum omnis, veritatis sint.</div>

</div> */}


