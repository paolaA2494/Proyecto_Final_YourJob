import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';


const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Layout>
            <Route exact path="/" component={} />
               <Route path="/content" component={} />
               <Route path="/contact" component={} />
            </Layout>
         </Switch>
      </BrowserRouter>

   )

}

export default App;