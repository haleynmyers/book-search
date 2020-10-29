import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/books"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/saved"} component={Saved} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
