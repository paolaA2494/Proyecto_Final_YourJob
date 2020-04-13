import React from 'react';
import Searchbar2 from '../components/Searchbar2';
import Card from '../components/Card.jsx';


  class ShowCard extends React.Component {
        constructor(props){
          super(props);

        this.state = {
              data:[]
          }
      }


      componentDidMount(){
        this.timeoutId = setTimeout(() => {
              this.setState({
                  data:[
                      {
                          id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                          Name: 'Mariana Loaiza',
                          calificacion: '4.7',
                          img:
                          'https://www.gravatar.com/avatar?d=identicon',
                          descripcion:'Lorem ipsum dolor sit amet.',
                        
                        },
                        {
                          id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                          Name: 'Leina Pulgarin',
                          calificacion: '4.9',
                          img:
                          'https://www.gravatar.com/avatar?d=identicon',
                          descripcion:'Lorem ipsum dolor sit amet.',                  
                        },
                        {
                          id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                          Name: 'Paola Hernadez',
                          calificacion: '4.9',
                          img:
                          'https://www.gravatar.com/avatar?d=identicon',
                          descripcion:'Lorem ipsum dolor sit amet.',
                      },
                  ]
              })
          }, 500 ) }

          componentDidUpdate(prevProps, prevState){
            console.log({
              prevProps: prevProps, prevState: prevState
            })

            console.log({
                props: this.props,
                state: this.state
            })
          }

          componentWillUnmount(){
              clearTimeout(this.timeoutId)
          }

          
        render(){
        return (
          
          <React.Fragment>
            <Searchbar2 />
            <Card info={this.state.data} />
          </React.Fragment>
          
    );
  }
}

export default ShowCard;
