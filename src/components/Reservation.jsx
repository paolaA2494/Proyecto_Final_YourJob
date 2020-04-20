import React from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";



class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
 
  }

 

  onClick = () =>{

  
    var template_params = {
      "to_email": this.props.email,
      "from_name": this.props.fullName,
      }

      emailjs.send('gmail','template_bYg9fKfE' , template_params,'user_xD9elWf14F7djoaxBeUmk' )
      .then((response) => { 
      console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
      console.log('FAILED...', err);

     
  });

  console.log("fjvei")
  }
  
  render() {
    return (
      <div className="mb-5">
        
         
        <button
                onClick={this.onClick}
            

                className="btn btn-info btn-sm col-5 mr-1"
                type="submit"
              >
                 ¡ Contacta me !
              </button>
      
      </div>
    );
  }
}

export default Reservation;
