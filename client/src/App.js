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
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
