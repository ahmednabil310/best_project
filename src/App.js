import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import SignUp from "./pages/SignUp";
import NavBar from "./components/nav/NavBar";
function App() {
  return (
    <div className="parent">
      <HashRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
