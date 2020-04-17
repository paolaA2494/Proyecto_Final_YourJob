import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LoginH from "../pages/LoginH";
import ShowCard from "../pages/ShowCard";
import Home from "../pages/Home";
import Cv from "../components/Cv";
import RegisterH from '../pages/ResgisterH';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/loginh" component={LoginH} />
        <Route path="/resh" component={RegisterH} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/showcard" component={ShowCard} />
          <Route exact path="/cv" component={Cv} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
