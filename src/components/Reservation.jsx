import React from "react";
import emailjs from 'emailjs-com';



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

      emailjs.send('gmail','template_qqZFO6an' , template_params,'user_XyXd4XEss2SwWfC8pqNvp' )
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
