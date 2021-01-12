import './App.css';

import React from "react";
import HomePage from "./pages/homePage/homePage";
import {Switch, Route, useLocation} from "react-router-dom";
import {MenuProvider} from "./context/AllStateContext";
import ResumePage from "./pages/resume/resume";
import ReactGA from "react-ga";
import {useEffect} from 'react';

function App() {

    let location = useLocation();
    ReactGA.initialize('UA-187055448-1');

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [location]);


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
