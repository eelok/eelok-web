import React, {useContext} from 'react';

import {ReactComponent as ELogo} from '../../assets/eelok17.svg';
import './header-style.css';
import Navigation from "../navbar/navigation";

import {AllStateContext} from "../../context/AllStateContext";
import Social from "../social/Social";

const Header = () => {

    const {menuIsOpen} = useContext(AllStateContext);

    return (
        <div className='header' id="home">
            <div className={`overlay ${menuIsOpen ? 'overlay--open' : ''}`}></div>
            <div className='mainLogo-wrapper'><ELogo className='mainLogo'/></div>
            <Navigation/>
            <Social/>
        </div>
    )
};

export default Header;