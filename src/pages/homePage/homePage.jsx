import React from 'react';
import Navbar from "../../components/navbar/navbar";
import './homepage-style.css';
import {Link} from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <section className='home'>
                    <div className='home__gallery'>

                    </div>
                    <div className='home__information'>
                        <h4 className='third-header'>Lorem ipsum dolor sit amet.</h4>
                        <h2 className='main-header'>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className='plane-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                            similique?</p>
                        <Link to='/#' className='btn btn-color-violet'>Resume</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage;