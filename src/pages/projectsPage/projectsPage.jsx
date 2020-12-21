import React from 'react';
import Card from "../../components/card/card";
import './projects-page-style.css';
import {PROJECTS_DATA} from '../../components/card/projectsData';
import CrossingSection from "../../components/CrossingSection/crossingSection";

const ProjectPage = () => {
    return (
        <div className='container'>
            <section className='projects' id='projects'>
                <h2 className='main-header'>Projects</h2>
                <CrossingSection/>
                <div className='cards-wrapper'>
                    {
                        PROJECTS_DATA.map(project =>
                            <Card key={project.id} {...project}/>
                        )
                    }
                </div>
            </section>
        </div>
    )

}

export default ProjectPage;