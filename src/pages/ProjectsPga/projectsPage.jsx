import React from 'react';
import Card from "../../components/card/card";
import './projects-paje-style.css';

const ProjectPage = () => {
    return (
        <section className='projects'>
            <h2 className='main-header'>Projects</h2>
            <div className='card-wrapper'>
            {[1,2,3].map(a =>
                <Card/>
            )}
            </div>
        </section>
    )

}

export default ProjectPage;