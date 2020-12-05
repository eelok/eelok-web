import './App.css';

import React from "react";
import HomePage from "./pages/homePage/HomePage";
import {Switch, Route} from "react-router-dom";
import ContactPage from "./pages/contactPage/contactPage";
import ProjectPage from "./pages/ProjectsPage/projectsPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/contact' component={ContactPage}/>
                <Route exact path='/projects' component={ProjectPage}/>
            </Switch>
        </div>
    );
}

export default App;
