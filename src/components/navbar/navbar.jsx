import React from 'react';
import './navbar-style.css';

import '../button/button-style.css';
import {useState} from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='hamburger' onClick={toggleMenu}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <ul className={`nav-links ${open ? 'nav-links-open' : ''}`}>
                    <li className='nav-links-li'><a className='nav-links__item' href="#about"
                        onClick={() => toggleMenu()}
                    >About</a></li>
                    <li className='nav-links-li'><a className='nav-links__item' href='#projects'
                       onClick={() => toggleMenu()}
                    >Projects</a></li>
                    <li className='nav-links-li btn btn-color-green'><a className='nav-links__item' href="#contact"
                       onClick={() => toggleMenu()}
                    >Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )

}
export default Navbar;