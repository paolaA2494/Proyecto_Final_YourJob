import React, { Component } from 'react';
import Register from '../components/Register';
import Cv from '../components/Cv';
import axios from 'axios';


class Newcv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      details: {
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

  componentDidMount() {
    this.getDetails()
    console.log(this.props)
  }


  getDetails = async () => {
    try {
      const { match: { params: { id } } } = this.props
      const { data } = await axios.get(`http://localhost:8080/workers/${id}`)
      this.setState({
        details:data
      })
    } catch (error) {

    }

  }

  render() {
    return (

      <React.Fragment>
        <Cv
          fullName={this.state.details.fullName || 'NOMBRES'}
          serviceType={this.state.details.serviceType || 'SERVICIO'}
          about={this.state.details.about || 'SOBRE'}
          rate={this.state.details.rate || 'RATE'}
          email={this.state.details.email || 'EMAIL'}
          skills={this.state.details.skills || 'skills'}
          experience={this.state.details.experience || 'experience'}
          photoProfile={this.state.details.photoProfile || 'https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/article/public/RS8003_GettyImages-994576028-hig.jpg?itok=USdYN3SJ'}
        />
    
      </React.Fragment>
    );
  }
}

export default Newcv;