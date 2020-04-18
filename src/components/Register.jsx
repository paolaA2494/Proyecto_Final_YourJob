import React, { Component } from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            form: {
                photoProfile: "",
                serviceType: "",
                fullName: "",
                email: "",
                about: "",
                rate: "",
                ranking: "",
                skills: [],
                expirience: [
                    {
                        year: "",
                        company: "",
                        description: ""
                    }],
            }
        }
    }

    handleChange = event => {
        const target = event.target;
        const value =  target.value;
        console.log(value)
        const name = target.name;

        this.setState({
            ...this.state,
            form:{
              ...this.state.form,
              [name]: value
            }
            
        });

    }

    handleChangeSkills = event =>{
        const target = event.target;
        const value =  target.value;
        
        this.setState({
            
            form:{
              ...this.state.form,
              skills:[

                ...this.state.form.skills,
                  value
              ]
              
            }
            
        });

    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state.form
        axios.post('http://localhost:8080/workers', data)
            .then(Cv => {
                this.setState({
                    loading: false,
                })
                this.props.history.push('/home')

            }
            )
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error,
                })
            })
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}
                className="form-signin mt-5 mb-5">
                <div className="text-center">
                    <h1 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
                        Ser Worker
            </h1>
                    <p>Registra los siguientes datos para ser parte de nuestro equipo </p>
                    <p className="text-center">Los campos maracados con <span class="obligate text-info">*</span> son obligatorios</p>
                </div>

                <div className="mx-auto col-6">
                    <label htmlFor="fullName">Nombre completo: <span class="obligate text-primary">*</span></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Ingrese su nombre completo"
                        required=""
                        name="fullName"
                        value={this.state.fullName} />
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="email">Email: <span class="obligate text-primary">*</span></label>
                    <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" placeholder="you@example.com"
                        value={this.state.email} />
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="cellphone">Teléfono de Contacto: <span class="obligate text-primary">*</span></label>
                    <input onChange={this.handleChange} type="number" className="form-control" id="cellphone" pattern="[0-12]" name="cellphone" placeholder="Ingrese su número de contacto"
                        value={this.state.cellphone} />

                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="about">Descripción: <span class="obligate text-primary">*</span></label>
                    <textarea onChange={this.handleChange} id="about" className="input-textarea col-12 d-block" name="about" placeholder="Ingrese su descripción aquí"
                        value={this.state.about} ></textarea>
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="state">Tipo de servicio que presta <span class="obligate text-primary">*</span></label>
                    <select
                        className="custom-select"
                        id="serviceType"
                        required=""
                        name="serviceType"
                        onChange={this.handleChange}
                    >
                        <option value="">Seleccione...</option>
                        <option value="plomeria">Plomeria</option>
                        <option value="estetica">Estética</option>
                        <option value="electrico">Eléctrico</option>
                        <option value="gaseoducto">Mantenimiento de gaseoductos</option>
                    </select>

                    {/*<div class="custom-control custom-checkbox">
                        <input onChange={this.handleChange} type="checkbox" class="custom-control-input" id="serviceType1" value="plomeria" name="serviceType"
                            checked={this.state.form.serviceType['plomeria']} />
                        <label class="custom-control-label" htmlFor="plomeria">Plomeria</label>
                    </div>

                    <div class="custom-control custom-checkbox">
                        <input onChange={this.handleChange} type="checkbox" class="custom-control-input" id="serviceType2" value="estetica" name="serviceType"
                            checked={this.state.serviceType2} />
                        <label class="custom-control-label" htmlFor="estetica"
                        >Estéticas</label>
                    </div>

                    <div class="custom-control custom-checkbox">
                        <input onChange={this.handleChange} type="checkbox" class="custom-control-input" id="serviceType3" value="electrico"
                            checked={this.state.serviceType3} />
                        <label class="custom-control-label" htmlFor="electrico"
                        >Eléctricos</label>
                    </div>

                    <div class="custom-control custom-checkbox">
                        <input onChange={this.handleChange} type="checkbox" class="custom-control-input" id="serviceType4" value="gaseoducto"
                            checked={this.state.serviceType4} />
                        <label class="custom-control-label" htmlFor="gaseoducto"
                        >Mantenimiento de gaseoductos</label>
                   </div>*/}

                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="skills">Habilidades: <span class="obligate text-primary">*</span></label>
                    <ul class="list-group">
                        <li class="list-group-item text-info">Habilidad<input onChange={this.handleChangeSkills} type="text" className="form-control" id="skills1" name="skills" placeholder="Ingrese su habilidad aquí" required=""
                            value={this.state.skills1} /></li>
                        <li class="list-group-item text-info">Habilidad<input onChange={this.handleChangeSkills} type="text" className="form-control" id="skills2" name="skills" placeholder="Ingrese su habilidad aquí" required=""
                            value={this.state.skills2} /></li>
                        <li class="list-group-item text-info">Habilidad<input onChange={this.handleChangeSkills} type="text" className="form-control" id="skills3" name="skills" placeholder="Ingrese su habilidad aquí" required=""
                            value={this.state.skills3} /></li>
                    </ul>
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="experience">Eperiencia: <span class="obligate text-primary">*</span></label>
                    <ul class="list-group">
                        <li class="list-group-item text-info">Año de experiencia<input onChange={this.handleChange} type="number" className="form-control" name="year" id="year" placeholder="Ingrese el año de la experiencia" required=""
                            value={this.state.year} /></li>
                        <li class="list-group-item text-info">Empresa<input onChange={this.handleChange} type="text" className="form-control" id="company" name="company" placeholder="Ingrese el año de la experiencia" required=""
                            value={this.state.company} /></li>
                        <li className="list-group-item text-info">Breve descripción<textarea onChange={this.handleChange} id="description" className="input-textarea col-12 d-block" name="description" placeholder="Ingrese su descripción aquí"
                            value={this.state.description}></textarea></li>
                    </ul>
                </div>

                <div className="mx-auto col-6 mt-4">
                    <label htmlFor="rate">Valor Hora de trabajo: <span class="obligate text-primary">*</span></label>
                    <input onChange={this.handleChange} type="number" className="form-control" id="rate" name="rate" pattern="[0-12]{12}" placeholder="$"
                        value={this.state.rate} />

                </div>


                <div className="mx-auto col-6 col-ms-12 mt-5 text-center justify-content-center">
                    <button
                        className="btn btn-info btn-sm col-5 mr-1"
                        type="submit"
                    >
                        Registrar
                         </button>

                </div>
                <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
            </form>
        );
    }
}

export default withRouter(Register);

