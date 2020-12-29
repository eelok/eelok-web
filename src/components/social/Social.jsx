import React from 'react';
import {ReactComponent as XingLogo} from '../../assets/xing.svg';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import './socila-style.css';

const Social = () => {
    return (
        <section className='social__wrapper'>
            <a href="https://www.xing.com/profile/Maria_Petretckaia/cv">
                <XingLogo className='navbar__social-item'/>
            </a>
            <a href="//linkedin.com/in/eelok">
                <Linkedin className='navbar__social-item'/>
            </a>
            <a href='https://github.com/eelok'>
                <Github className='navbar__social-item'/>
            </a>
        </section>
    )
}

export default Social;