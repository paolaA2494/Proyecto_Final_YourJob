import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Home from '../pages/Home';


const App = () => {
   return (
      <BrowserRouter>
         <Switch>
         <Route path="/Login" component={Login} />
            <Layout>
               <Route exact path="/" component={Home} />
            </Layout>
  
         </Switch>
      </BrowserRouter>

   )

}

export default App;