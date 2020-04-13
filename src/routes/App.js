import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/Login";
import ShowCard from "../pages/ShowCard";
import Home from "../pages/Home";
import Cv from "../components/Cv";
import Register from "../components/Register";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/res" component={Register} />
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
