import React from 'react';
import {Link} from 'react-router-dom';
import './navbar-style.css';

import '../button/button-style.css';
import Social from "../social/Social";

const Navbar = () => {

    return (
        <div className='container'>
            <nav className='navbar'>
                <Link to='/' className='navbar__logo'>Eelok</Link>
                <div className='mobileNav'>
                    <div className='hamburger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <ul className="nav-links">
                        <li><a className='nav-links__item' href="#">About</a></li>
                        <li><a className='nav-links__item' href="#">Projects</a></li>
                        <li><a className='nav-links__item' href="#">Contact</a></li>
                    </ul>
                </div>
                {/*<div className='navbar__items'>*/}
                {/*    <Link to='/about' className='navbar__items-item'>About</Link>*/}
                {/*    <Link to='/projects' className='navbar__items-item'>Projects</Link>*/}
                {/*    <Link to='/contact' className='navbar__items-item btn btn-color-green'>Contact me</Link>*/}
                {/*</div>*/}
                <Social/>
            </nav>
        </div>
    )

}
export default Navbar;