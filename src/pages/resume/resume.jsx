import './resume-pring.css'

const ResumePage = () => {
    return (
        <div className='resume-page'>
            <section className='intro-section'>
                <h1>Maria Petretckaia</h1>
                <h3>Software Developer</h3>
                <ul className='get-in-touch-section'>
                    <li><span>Location</span>Germany, Berlin</li>
                    <li><span>LinkedIn</span>https://www.linkedin.com/in/maria-petretckaia-78b6a560/</li>
                    <li><span>xing</span>https://www.xing.com/profile/Maria_Petretckaia/cv</li>
                    <li><span>eelok-web</span>https://eelok.netlify.app</li>
                </ul>
            </section>

            <h2 className='section-title'>Skills</h2>
            <section className='section'>
                <div className='period'>&nbsp;</div>
                <div className='section-content'>
                    <ul className='item-list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                        <li>Spring Cloud</li>
                        <li>Hibernate</li>
                        <li>Junit</li>
                        <li>Mockito</li>
                        <li>PostgreSQL</li>
                        <li>Maven</li>
                        <li>Git</li>
                    </ul>
                </div>
            </section>


            <h2 className='section-title'>Education</h2>
            <section className='section-education'>
                <div className='section-education__timing'>
                    <div className='section-education__timing-content'>2018-04 - present</div>
                    <div className='section-education__timing-content'>2002-07 - 2007-05</div>
                </div>
                <div className='section-education__info'>
                        <div className='section-education__info-content'>
                            <h3 className='content-header'>HTW Berlin - University of Applied Sciences</h3>
                            <p className='content-text'>Applied Informatics</p>
                        </div>
                        <div className='section-education__info-content'>
                            <h3 className='content-header'>Moscow State University of Geodesy and Cartography
                                (MIIGAiK)</h3>
                            <p className='content-text'>Aerial Geodesy</p>
                        </div>
                </div>
            </section>

            <h2 className='section-title'>Languages</h2>
            <section className='section'>
                <div className='period'>&nbsp;</div>
                <div className='section-content'>
                    <ul className='item-list'>
                        <li>German</li>
                        <li>English</li>
                        <li>Russian</li>
                    </ul>
                </div>
            </section>
        </div>
)
}

export default ResumePage;