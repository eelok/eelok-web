import React from 'react';

import htmlicon from '../../assets/qualiIcons/html.svg';
import cssicon from '../../assets/qualiIcons/css.svg';
import reacticon from '../../assets/qualiIcons/reactIcon.svg';
import javaicon from '../../assets/qualiIcons/java.svg';
import springicon from '../../assets/qualiIcons/spring-icon.svg';
import jUniticon from '../../assets/qualiIcons/jUnit-icon.png';
import postgresql from '../../assets/qualiIcons/postgresql.svg';
import gitIcon from '../../assets/qualiIcons/git-icon.svg';
import grid from '../../assets/grid.png';

import './qualification-style.css';

const Qualification = () => {
    const icons = [
        {title: 'HTML', icon: htmlicon},
        {title: 'CSS', icon: cssicon},
        {title: 'React', icon: reacticon},
        {title: 'Java', icon: javaicon},
        {title: 'Spring', icon: springicon},
        {title: 'PostgreSQL', icon: postgresql},
        {title: 'jUnit', icon: jUniticon},
        {title: 'Git', icon: gitIcon},
    ];
    return (
        <section className='qualification-section'>
            <h3 className='main-header tech-header'>Skill Set</h3>
            <div className='tech-list'>
                {icons.map((tech, index) => (
                    <div key={index.toString()} className='tech'>
                        <img
                            src={tech.icon}
                            alt={tech.title}
                            className='tech__icon'
                        />
                        <span className='tech__name text-tag'>{tech.title}</span>
                    </div>
                ))}
            </div>
            <img className='about-grid-image'
                 src={grid} alt=""
            />
        </section>
    )
}
export default Qualification;