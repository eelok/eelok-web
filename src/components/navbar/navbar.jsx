import React from 'react';
import './navbar-style.css';

import '../button/button-style.css';
import {useState} from "react";

const Navbar = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='hamburger' onClick={() => setMenuIsOpen(true)}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <ul className={`nav-links ${menuIsOpen ? 'nav-links-open' : ''}`}>
                    <li><a className='nav-links__item' href="#about"
                        onClick={() => setMenuIsOpen(false)}
                    >About</a></li>
                    <li><a className='nav-links__item' href='#projects'
                       onClick={() => setMenuIsOpen(false)}
                    >Projects</a></li>
                    <li><a className='nav-links__item' href="#contact"
                       onClick={() => setMenuIsOpen(false)}
                    >Contact</a></li>
                </ul>
            </nav>
        </div>
    )

}
export default Navbar;