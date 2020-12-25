import './resume-pring.css';
import {RESUME_DATA} from './resume-data.js';

const ResumePage = () => {

    return (
        <div className='resume-page'>
            {
                RESUME_DATA.map(item =>
                    <>
                        {/*//todo check key*/}
                        <section  key={item.toString()} className='intro-section'>
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

                        <section className='common-section'>
                            <div className='common-section__items'>
                                {
                                    item.skills.map(skill =>
                                        <div className='common-section__item'>{skill}</div>
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
                                item.languages.map(language =>
                                    <div className='common-section__item'>{language}</div>
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