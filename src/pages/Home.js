import React,{Component} from 'react';
import Searchbar from '../components/Searchbar';
import FormJob from '../components/FormJob';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <React.Fragment>
             <Searchbar />
            
            </React.Fragment>

         );
    }
}
 
export default Home;