import React from 'react';
// import {ReactComponent as MockitoIcon} from '../../assets/qualiIcons/Mockito_Logo.png'; /
import { ReactComponent as HtmlIcon } from '../../assets/qualiIcons/html-5.svg';
import { ReactComponent as CSSIcon } from '../../assets/qualiIcons/css.svg';
import { ReactComponent as ReactIcon } from '../../assets/qualiIcons/react001.svg';
import { ReactComponent as HibernateIcon } from '../../assets/qualiIcons/hibernate-icon.svg';
import { ReactComponent as JavaIcon } from '../../assets/qualiIcons/java.svg';
import { ReactComponent as FirebaseIcon} from '../../assets/qualiIcons/firebase.svg';
import './qualification-style.css';

const Qualification = () =>{
    return (
        <div>
            {/*<MockitoIcon/>*/}
            <HtmlIcon  className='qualification__item'/>
            <CSSIcon className='qualification__item'/>
            <ReactIcon className='qualification__item'/>
            <HibernateIcon className='qualification__item'/>
            <JavaIcon className='qualification__item' />
            <FirebaseIcon className='qualification__item'/>

        </div>
    )
}
export default Qualification;