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
                    <h3 className='third-header'>I’m a passionate software developer specializing in building efficient and innovative backend systems.</h3>
                    <p className='plane-text'>I have a curious mindset that drives me to explore emerging technologies and refine my technical skills.
                        Outside of development, I enjoy staying active through outdoor activities like cycling and running. I’m also a food enthusiast who loves trying new cuisines and discovering hidden culinary gems.</p>
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