import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';


class LoginH extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <React.Fragment>
                <Navbar />
                <Login />
            </React.Fragment>

         );
    }
}
 
export default LoginH ;