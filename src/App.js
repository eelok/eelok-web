import './App.css';

import React from "react";
import HomePage from "./pages/homePage/homePage";
import {Switch, Route} from "react-router-dom";
import {MenuProvider} from "./context/AllStateContext";
import ResumePage from "./pages/resume/resume";
import ReactGA from "react-ga";
import {useEffect} from 'react';
// import { createBrowserHistory } from 'history';

function App() {
    // const history = createBrowserHistory();

    useEffect(() => {
        ReactGA.initialize('UA-187055448-1');
        ReactGA.pageview(window.location.pathname);
    });

    return (
        <MenuProvider>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/cv' component={ResumePage}/>
                </Switch>
            </div>
        </MenuProvider>
    );
}

export default App;
