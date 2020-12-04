import React from 'react';
import './card-style.css';

const Card = () => {
    return (
        <section className='card'>
            <div className='card__image-box'>&nbsp;</div>
            <div className='card__info'>
                <h3 className='secondary-header'>Project Title</h3>
                <h5 className='third-header'>Description</h5>
                <p className='plane-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dolorum mollitia nesciunt
                    quae veniam?
                </p>
                <h5 className='third-header'>Technology</h5>
                <p className='plane-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum?
                </p>
            </div>
        </section>
    )
}

export default Card;