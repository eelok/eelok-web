import React from 'react';
import Card from "../../components/card/card";
import './projects-page-style.css';
import {PROJECTS_DATA}  from '../../components/card/projectsData';

const ProjectPage = () => {
    return (
        <section className='projects container'>
            <h2 className='main-header'>Projects</h2>
            <div className='cards-wrapper'>
            {
                PROJECTS_DATA.map(project =>
                   <Card key={project.id} {...project}/>
               )
            }
            </div>
        </section>
    )

}

export default ProjectPage;