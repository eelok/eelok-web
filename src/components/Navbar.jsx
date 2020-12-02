import React from 'react';
import {Link} from 'react-router-dom';
import './navbar-style.css';
import {ReactComponent as XingLogo} from '../assets/xing.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';

import './button-stule.css';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link to='#' className='navbar__logo'>eelok</Link>
            <div className='navbar__items'>
                <Link to='/#' className='navbar__items-item'>About</Link>
                <Link to='/#' className='navbar__items-item'>Projects</Link>
                <Link to='/#' className='navbar__items-item btn-color-green contact'>Contact me</Link>
            </div>
            <div className='navbar__social'>
                <Linkedin className='navbar__social-item'/>
                <Linkedin className='navbar__social-item'/>
                {/*<XingLogo className='navbar__social-item'/>*/}
                <Github className='navbar__social-item'/>
            </div>
        </nav>
    )

}
export default Navbar;