import React from 'react';
import './card-style.css';
import {Link} from "react-router-dom";

const Card = ({title, description, technology}) => {
    return (
        <section className='card'>
            <div className='card__image-box'>&nbsp;</div>
            <div className='card__info'>
                <h3 className='secondary-header'>{title}</h3>
                <h5 className='third-header'>Description</h5>
                <p className='plane-text'>{description}</p>
                <h5 className='third-header'>Technology</h5>
                <p className='plane-text'>{technology}</p>
                <div className='card__control'>
                    <button className='btn-round'>&#62;</button>
                </div>
            </div>
        </section>
    )
}

export default Card;