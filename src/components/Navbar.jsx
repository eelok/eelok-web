import React from 'react';
import {Link} from 'react-router-dom';
import './navbar-style.css';
import { ReactComponent as XingLogo } from '../assets/xing.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <Link to='#' className='logo'className='navbar__logo' >eelok</Link>
            <div className='navbar__links'>
                <Link to='/#' className='navbar__links-item'>About</Link>
                <Link to='/#' className='navbar__links-item'>Projects</Link>
                <Link to='/#' className='navbar__links-item btn-color-one'>Contact me</Link>
            </div>
            <div className='navbar__social'>
                <Link to='/#'>
                    <Linkedin className='navbar__social-item'/>
                </Link>
                <Link to='/#'>
                    <XingLogo className='navbar__social-item'/>
                </Link>
                <Link to='/#'>
                    <Github className='navbar__social-item'/>
                </Link>
            </div>
        </nav>
    )

}
export default Navbar;