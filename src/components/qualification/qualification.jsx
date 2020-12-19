import React from 'react';

import htmlicon from '../../assets/qualiIcons/html.svg';
import cssicon from '../../assets/qualiIcons/css.svg';
import reacticon from '../../assets/qualiIcons/reactIcon.svg';
import hibernateicon from '../../assets/qualiIcons/hibernate.svg';
import javaicon from '../../assets/qualiIcons/java.svg';
import firebaseicons from '../../assets/qualiIcons/google-firebase.svg';
import springicon from '../../assets/qualiIcons/spring-icon.svg';
import mockitoicon from '../../assets/qualiIcons/mockito_Logo.png';
import jUniticon from '../../assets/qualiIcons/jUnit-icon.png';
import postgresql from '../../assets/qualiIcons/postgresql.svg';
import gitIcon from '../../assets/qualiIcons/git-icon.svg';
import mavenIcon from '../../assets/qualiIcons/Maven_logo.svg';
import intelliJ from '../../assets/qualiIcons/IntelliJ_IDEA.svg';
import visualStudioCode from '../../assets/qualiIcons/Visual_Studio_Code.svg';

import './qualification-style.css';

const Qualification = () => {
    const icons = [
        {title: 'HTML', icon: htmlicon},
        {title: 'CSS', icon: cssicon},
        {title: 'React', icon: reacticon},
        {title: 'Java', icon: javaicon},
        {title: 'Spring', icon: springicon},
        {title: 'Hibernate', icon: hibernateicon},
        {title: 'Firebase', icon: firebaseicons},
        {title: 'PostgreSQL', icon: postgresql},
        {title: 'Mockito', icon: mockitoicon},
        {title: 'jUnit', icon: jUniticon},
        {title: 'Git', icon: gitIcon},
        {title: 'Maven', icon: mavenIcon},
        {title: 'Intellij IDEA', icon: intelliJ},
        {title: 'Visual Studio Code', icon: visualStudioCode},
    ];
    return (
        <section>
            <h3 className='secondary-header tech-header'>Skill Set</h3>
            <div className='tech-list'>
                {icons.map((tech) => (
                    <div className='tech'>
                        <img
                            src={tech.icon}
                            alt={tech.title}
                            className='tech__icon'
                        />
                        <span className='tech__name text-tag'>{tech.title}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Qualification;