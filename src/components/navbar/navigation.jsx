import React, { useContext } from "react";
import './navigation-style.css';
import {MenuContext} from "../../context/menuContext";

const Navigation = () => {

    const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const isOpen = () => {
        setMenuIsOpen(true);
    }

    const isClose = () => {
        setMenuIsOpen(false);
    }

    return (
        <div className='navigation'>
            <input className='navigation__checkbox' type="checkbox" id='navi-toggle'
                checked={menuIsOpen}
                onClick={toggleMenu}
            />
            <label className='navigation__button' htmlFor="navi-toggle">
                <div className='line_middle'>
                    &nbsp;
                </div>
            </label>
            <div className='navigation__background'>&nbsp;</div>
            <nav className='navigation__nav'>
                <ul className="navigation__list">
                    <li className='navigation__item'>
                        <a href="#home"
                               className={`navigation__link ${menuIsOpen ? 'navigation__nav--open' : ''}`}
                           onClick={isClose}
                           >Home</a>
                    </li>
                    <li className='navigation__item'>
                        <a href="#about"
                           className={`navigation__link ${menuIsOpen ? 'navigation__nav--open' : ''}`}
                           onClick={isClose}
                           >About</a>
                    </li>
                    <li className='navigation__item'>
                        <a href="#projects"
                           className={`navigation__link ${menuIsOpen ? 'navigation__nav--open' : ''}`}
                           onClick={isClose}
                           >Projects</a>
                    </li>
                    <li className='navigation__item'>
                        <a href="#contact"
                           className={`navigation__link ${menuIsOpen ? 'navigation__link-open' : ''}`}
                           onClick={isClose}
                           >Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default Navigation;