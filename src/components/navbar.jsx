import React from 'react';
import {Link} from 'react-router-dom';
import './navbar-style.css';
import {ReactComponent as XingLogo} from '../assets/xing.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';

import './button-style.css';
import Social from "./social/Social";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar__logo'>Eelok</Link>
            <div className='navbar__items'>
                <Link to='/about' className='navbar__items-item'>About</Link>
                <Link to='/projects' className='navbar__items-item'>Projects</Link>
                <Link to='/contact' className='navbar__items-item btn btn-color-green'>Contact me</Link>
            </div>
            <Social/>
        </nav>
    )

}
export default Navbar;