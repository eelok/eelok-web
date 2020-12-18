import React from 'react';
import Card from "../../components/card/card";
import './projects-page-style.css';
import {PROJECTS_DATA}  from '../../components/card/projectsData';

const ProjectPage = () => {
    return (
        <section className='projects container' id='projects'>
            <h2 className='main-header'>Projects</h2>
            <div className='cards-wrapper'>
            {
                PROJECTS_DATA.map(projectDetails =>
                   <Card key={projectDetails.id} {...projectDetails}/>
               )
            }
            </div>
        </section>
    )

}

export default ProjectPage;