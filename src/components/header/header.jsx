import React, {useContext} from 'react';

import {ReactComponent as ELogo} from '../../assets/linkedin.svg';
import './header-style.css';
import Navigation from "../navbar/navigation";

import {AllStateContext} from "../../context/AllStateContext";
import Social from "../social/Social";

const Header = () => {

    const {menuIsOpen} = useContext(AllStateContext);

    return (
        <div className='header' id="home">
            <div className={`overlay ${menuIsOpen ? 'overlay--open' : ''}`}></div>
            <ELogo className='mainLogo'/>
            <Navigation/>
            <Social/>
        </div>
    )
};

export default Header;