import React from 'react';
import axios from 'axios';
 import emailjs from 'emailjs-com';
 import Swal from "sweetalert2";




    

// class FormJob extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//           loading: false,
//           error: null,
//           form: {
           
           
//             email: ""
            
//           },
//         };
//         // this._Alerta = this._Alerta.bind(this);
//       }
    
//       _Alerta() {
//         Swal.fire(
//           "Su registro ha sido exitoso, para YourJob es un gusto trabajar contigo!",
//           "You clicked the button",
//           "success"
//         );
//       }
     
//       handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         console.log(value);
//         const name = target.name;
    
//         this.setState({
//           ...this.state,
//           form: {
//             ...this.state.form,
//             [name]: value,
//           },
//         });
//       };
    
//       handleChangeSkills = (event) => {
//         const target = event.target;
//         const value = target.value;
    
//         this.setState({
//           form: {
//             ...this.state.form,
//             skills: [...this.state.form.skills, value],
//           },
//         });
//       };
    
//       handleChangeExperience = (event) => {
//         const target = event.target;
//         const value = target.value;
    
//         this.setState({
//           form: {
//             ...this.state.form,
//             experience: [...this.state.form.experience, value],
//           },
//         });
//       };
    
//       handleSubmit = (e) => {
//         e.preventDefault();
//         // const data = this.state.form;
//         // axios
//         //   .post("http://localhost:3000/send", data)
//         //   .then((Cv) => {
//         //     this.setState({
//         //       loading: false,
//         //     });
//         //     this.props.history.push("/home");
//         //   })
//         //   .catch((error) => {
//         //     this.setState({
//         //       loading: false,
//         //       error: error,
//         //     });
//         //   });

//       var template_params = {
//         "to_email": document.getElementById('email').value,
//         "from_name":"xxxxxx"
//         }

//          emailjs.send('gmail','template_qqZFO6an' , template_params,'user_XyXd4XEss2SwWfC8pqNvp' )
//                           .then((response) => { 
//                  console.log('SUCCESS!', response.status, response.text);
//               }, (err) => {
//                  console.log('FAILED...', err);
//              });
//       };
    
//       render() {
//         return (
//           <form onSubmit={this.handleSubmit} className="form-signin mt-5 mb-5">
//             <div className="text-center">
//               <h1 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
//                 Ser Worker
//               </h1>
             
//             </div>
    
//             <div className="mx-auto col-6">
//               <label htmlFor="fullName">
//                 Nombre completo: <span class="obligate text-primary">*</span>
//               </label>
//               <input
//                 onChange={this.handleChange}
//                 type="text"
//                 className="form-control"
//                 id="email"
//                 placeholder="Ingrese su nombre completo"
//                 required=""
//                 name="email"
//                 value={this.state.email}
//               />
//             </div>
    
           
    
//             <div className="mx-auto col-6 col-ms-12 mt-5 text-center justify-content-center">
//               <button
//                 onClick={this._Alerta}
//                 className="btn btn-info btn-sm col-5 mr-1"
//                 type="submit"
//               >
//                 Registrar
//               </button>
//             </div>
//             <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
//           </form>
        
//         )
//     }
// }
// export default FormJob;



// constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       error: null,
//       form: {
//        nombres: '',
//         email: "",
       
//       },
//     };
//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         console.log(value);
//         const name = target.name;
    
//         this.setState({
//           ...this.state,
//           form: {
//             ...this.state.form,
//             [name]: value,
//           },
//         });
//       };
    
      
    
     
    
//       handleSubmit = (e) => {
//         e.preventDefault();
//         // const data = this.state.form;
//         // axios
//         //   .post("http://localhost:3004", data)
//         //   .then((Cv) => {
//         //     this.setState({
//         //       loading: false,
//         //     });
//         //     // this.props.history.push("/send");
//         //   })
//         //   .catch((error) => {
//         //     this.setState({
//         //       loading: false,
//         //       error: error,
//         //     });
//         //   });
//         console.log("ncenvienvuernv")
//       };
//     // this._Alerta = this._Alerta.bind(this);
   
//   }
    
// render() {           
           
//     return (
            
    
    

//             <form className="form-signin" onSubmit={this.handleSubmit}>
           

                
//                <div className="form-row">
//                     <div className="col mb-3">
//                         <label className="text-white " htmlFor="validationServer01">Nombres</label>
//                         <input
//                            type="text"
//                             name="nombres"
//                             placeholder="Ingrese nombres"
//                             onChange={this.handleChange}
//                             className="form-control "
//                              ></input>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     </div>

//                     <div className="form-row">
//                     <div className="col mb-3">
//                         <label className="text-white " htmlFor="validationServer02">Correo electrónico</label>
//                         <input
//                            className="form-control "
//                             type="email"
//                             name="email"
                         
//                             placeholder="Ingrese correo electronico"
                          
//                             onChange={this.handleChange}

                                
//                             ></input>
//                             <div className="valid-feedback">
//                                 Looks good!
//                         </div>
//                         </div>
//                         </div>

//                         <button className="btn btn-lg btn-primary rounded-pil  btn-block" type="submit"
//                         style={{
//                             backgroundColor: '#0C927D'
//                         }}>Registrarse</button>

//             </form>