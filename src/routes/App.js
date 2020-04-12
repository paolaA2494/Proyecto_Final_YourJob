import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../components/Login';
import ShowCard from '../pages/ShowCard';
import Home from '../pages/Home';


const App = () => {
   return (
      <BrowserRouter>
         <Switch>
         <Route path="/Login" component={Login} />
            <Layout>
               <Route exact path="/home" component={Home} />
               <Route exact path="/showcard" component={ShowCard} />
            </Layout>
  
         </Switch>
      </BrowserRouter>

   )

}

export default App;