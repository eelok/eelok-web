import React from 'react';
import {ReactComponent as XingLogo} from '../../assets/xing.svg';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import './socila-style.css';

const Social = () => {
    return(
        <section className='social__wrapper'>
            <XingLogo className='navbar__social-item'/>
            <Linkedin className='navbar__social-item'/>
            <Github className='navbar__social-item'/>
        </section>
    )
}

export default Social;