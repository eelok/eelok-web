import React from 'react';
import Navbar from "../../components/navbar";
import './homepage-style.css';
import {Link} from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <section className='container'>
                <div className='box-image'>

                </div>
                <div className='box-information'>
                    <h4 className='secondary-heading'>Lorem ipsum dolor sit amet.</h4>
                    <h1 className='main-heading'>Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, similique?</p>
                    <Link to='/#' className='btn btn-color-violet'>Resume</Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage;