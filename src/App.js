import './App.css';

import React from "react";
import HomePage from "./pages/HomePage";
import Router, {Switch, Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
