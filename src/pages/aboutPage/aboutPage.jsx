import React from 'react';
import './about-style.css';
import Qualification from "../../components/qualification/qualification";

const AboutPage = () => {
    return (
        <div className='container'>
            <section className='about' id='about'>
                <div className='about__info-block'>
                    <h2 className='main-header'>About Me.</h2>
                    <h3 className='third-header'>I'm a software developer based in Berlin, Germany.</h3>
                    <p className='plane-text'>I enjoy turning complex problems into simple, beautiful and intuitive
                        designs. When I'm not coding, tweeting or pushing pixels, you'll find me cooking, gardening or
                        working out in the park</p>
                </div>
                <div className='about__gallery-block'>
                    <Qualification/>
                </div>
            </section>
        </div>
    )

}
export default AboutPage;