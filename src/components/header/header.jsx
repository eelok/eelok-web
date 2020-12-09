import React from 'react';

import {ReactComponent as ELogo} from '../../assets/linkedin.svg';
import './header-style.css';
import Navigation from "../navbar/navigation";

const Header = () => {

    return (
        <div className='header'>
            <div className='overlay'></div>
            <ELogo className='mainLogo'/>
            <Navigation/>
        </div>
    )

}

export default Header;