import './resume-pring.css';
import {RESUME_DATA} from './resume-data.js';

const ResumePage = () => {

    return (
        <div className='resume-page'>
            {
                RESUME_DATA.map((item, index) =>
                    <>
                        <section  key={index.toString()} className='intro-section'>
                            <h1 className='intro-section__main-title'>{item.name}</h1>
                            <h2 className='intro-section__secondary-title'>{item.activity}</h2>
                            <div className='intro-section__contact'>
                                {
                                    item.links.map((eachLink, index) =>
                                        <div key={index.toString()} className='intro-section__contact-box'>
                                            <eachLink.icon className='intro-section__contact--icon'/>
                                            <a href={`//${eachLink.link.href}`}
                                               className='intro-section__contact--link'>{eachLink.link.title}</a>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <h2 className='section-title'>Work Experience</h2>
                        <section className='section-education__wrapper'>
                            {
                                item.workExperience.map(compapy =>
                                    <div className='section-education'>
                                        <div className='section-education__time'>{compapy.time}</div>
                                        <div className='section-education__place'>
                                            <div className='section-education__place-name position'>{compapy.companyName}</div>
                                            <div  className='section-education__place-specialization position'>{compapy.position}</div>
                                            <div className='section-education__place-specialization position'>{compapy.intro}</div>
                                            <div>
                                                {
                                                    compapy.duty.map((item, index) =>
                                                        <div key={index.toString()}>{item}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                        <h2 className='section-title'>Skill Set</h2>

                        <section className='common-section'>
                            <div className='common-section__items'>
                                {
                                    item.skills.map((skill, index) =>
                                        <div key={index.toString()} className='common-section__item'>{skill}</div>
                                    )
                                }
                            </div>
                        </section>
                        <h2 className='section-title'>Education</h2>
                        <section className='section-education__wrapper'>
                        {
                            item.education.map(uni =>
                                <div className='section-education'>
                                    <div className='section-education__time'>{uni.time}</div>
                                    <div className='section-education__place'>
                                        <div className='section-education__place-name'>{uni.uniName}</div>
                                        <div  className='section-education__place-specialization'>{uni.specialization}</div>
                                    </div>
                                </div>
                            )
                        }
                        </section>
                        <h2 className='section-title'>Languages</h2>
                        <section className='common-section'>
                            {
                                item.languages.map((language, index) =>
                                    <div key={index.toString()}>{language}</div>
                                )
                            }
                        </section>
                        <h2 className='section-title'>Soft Skills</h2>
                        <section className='common-section'>

                                {
                                    item.softSkills.map((softSkill, index) =>
                                        <div key={index.toString()} className='common-section__items'>{softSkill}</div>
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
