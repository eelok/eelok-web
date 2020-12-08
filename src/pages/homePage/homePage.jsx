import React from 'react';

import './homepage-style.css';
import {Link} from "react-router-dom";
import AboutPage from "../aboutPage/aboutPage";
import ProjectPage from "../projectsPage/projectsPage";
import ContactPage from "../contactPage/contactPage";
import Menu from "../../components/navbar/menu";
import '../../components/button/button-style.css';

const HomePage = () => {
    return (
        <>
            <Menu/>
            <div className='container'>
                <section className='home' id="home">
                    <div className='home__gallery'>

                    </div>
                    <div className='home__information'>
                        <h4 className='third-header'>Lorem ipsum dolor sit amet.</h4>
                        <h2 className='main-header'>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className='plane-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                            similique?</p>
                        <Link to='/#' className='btn btn-color-violet'>Resume</Link>
                    </div>
                </section>
            </div>
            <AboutPage/>
            <ProjectPage/>
            <ContactPage/>
        </>
    )
}

export default HomePage;