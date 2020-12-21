import React from 'react';
import './about-style.css';
import Qualification from "../../components/qualification/qualification";
import separator from '../../assets/wave-separator.png';

const AboutPage = () => {
    return (
        <div className='container'>
            <section className='about' id='about'>
                <div className='about__info-block'>
                    <h2 className='main-header header-about'>About Me</h2>
                    <h3 className='third-header'>I'm a software developer based in Berlin, Germany.</h3>
                    <p className='plane-text'>I enjoy learning new technologies and computer languages.
                        When I'm not coding you'll find me at a fitness club. I also like to discover new restaurants
                        and delicious food.</p>
                </div>
                <img className='about-separator'
                     src={separator} alt=""/>
                <div className='about__gallery-block'>
                    <Qualification/>
                </div>
            </section>
        </div>
    )

}
export default AboutPage;