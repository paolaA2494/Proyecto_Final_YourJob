import React from "react";



class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    



 
  }

  
  
  render() {
    return (
      <div className="mb-5">
        
         
         <a href={`mailto:${this.props.email}`} class="btn btn-info m-auto d-block"></a>
      
      </div>
    );
  }
}

export default Reservation;
