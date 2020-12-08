import React from 'react';
import './menu-style.css';
import {useState} from "react";

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className="menu-wrap">
            <input type="checkbox" className='toggle' onClick={toggleMenu}/>
            <div className='hamburger'>
                <div className={`line ${isOpen ? 'line-menu-open' : ''}`}></div>
            </div>
            <div className={`menu ${isOpen ? 'menu-open' : ''}`} >
                <div>
                    <div>
                        <ul>
                            <li className='menu-items'>
                                <a href="#home"  className='menu-items-link'
                                   onClick={toggleMenu}>Home</a>
                            </li>
                            <li className='menu-items'>
                                <a href="#about"  className='menu-items-link'
                                   onClick={toggleMenu}>About</a>
                            </li>
                            <li className='menu-items'>
                                <a href="#projects" className='menu-items-link'
                                   onClick={toggleMenu}>Projects</a>
                            </li>
                            <li className='menu-items'>
                                <a href="#contact" className='menu-items-link'
                                   onClick={toggleMenu}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;