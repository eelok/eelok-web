import './App.css';

import React from "react";
import HomePage from "./pages/homePage/homePage";
import {Switch, Route} from "react-router-dom";
import {MenuProvider} from "./context/AllStateContext";
import ResumePage from "./pages/resume/resume";

function App() {
    return (
        <MenuProvider>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/resume' component={ResumePage}/>
                </Switch>
            </div>
        </MenuProvider>
    );
}

export default App;
