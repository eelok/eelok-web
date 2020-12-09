import React, {useContext} from 'react';

import {ReactComponent as ELogo} from '../../assets/linkedin.svg';
import './header-style.css';
import Navigation from "../navbar/navigation";
import {MenuContext} from "../../context/menuContext";

const Header = () => {

    const[menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

    return (
        <div className='header'>
            <div className={`overlay ${menuIsOpen ? 'overlay--open' : ''}`}></div>
            <ELogo className='mainLogo'/>
            <Navigation/>
        </div>
    )
};

export default Header;