import React from 'react';

import './homepage-style.css';
import {Link} from "react-router-dom";
import AboutPage from "../aboutPage/aboutPage";
import ProjectPage from "../projectsPage/projectsPage";
import ContactPage from "../contactPage/contactPage";
import '../../components/button/button-style.css';
import Header from "../../components/header/header";

const HomePage = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <section className='home'>
                    <div className='home__gallery'>

                    </div>
                    <div className='home__information'>
                        <h4 className='third-header'>Software Developer</h4>
                        <h2 className='main-header'>Hello, my name is Maria</h2>
                        <p className='plane-text'>Let's collaborate</p>
                        <Link to='/cv' className='btn btn-color-violet'>Curriculum Vitae</Link>
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