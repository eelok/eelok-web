import './resume-pring.css';
import {RESUME_DATA} from './resume-data.js';

const ResumePage = () => {

    return (
        <div className='resume-page'>
            {
                RESUME_DATA.map(item =>
                    <>
                        <section className='intro-section'>
                            <h1 className='intro-section__main-title'>{item.name}</h1>
                            <h2 className='intro-section__secondary-title'>{item.activity}</h2>
                            <div className='intro-section__contact'>
                                {
                                    item.links.map(eachLink =>
                                        <div className='intro-section__contact-box'>
                                            <img src={eachLink.icon} alt="icon"
                                                 className='intro-section__contact--icon'/>
                                            <a href={eachLink.link}
                                               className='intro-section__contact--link'>{eachLink.link}</a>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <h2 className='section-title'>Skill Set</h2>

                        <section className='skill-section'>
                            <div className='skill-section__items'>
                                {
                                    item.skills.map(skill =>
                                        <div className='skill-section__item'>{skill}</div>
                                    )
                                }
                            </div>
                        </section>
                        <h2 className='section-title'>Education</h2>
                        <div className='section-education'>
                            {
                                item.education.map(uni =>
                                    <>
                                        <div>{uni.time}</div>
                                        <div>{uni.uniName}</div>
                                        <div>{uni.specialization}</div>
                                    </>
                                )
                            }

                        </div>

                        <h2 className='section-title'>Languages</h2>
                        <section>
                            {
                                item.languages.map(language =>
                                    <div>{language}</div>
                                )
                            }
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default ResumePage;