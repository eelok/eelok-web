import React from 'react';
import './card-style.css';
import { ReactComponent as GitHubLogo } from '../../assets/github.svg';

const Card = ({title, technology}) => {
    return (
        <section className='card'>
            <div className='card__image-box'>&nbsp;</div>
            <div className='card__info'>
                <h3 className='secondary-header'>{title}</h3>
                <div className='card__info-technology'>
                    {
                        technology.map(item =>
                            <div className='text-tag'>{item}</div>
                        )
                    }
                </div>
                <div className='card__control'>
                    <GitHubLogo className='link-button-to-social'/>
                </div>
            </div>
        </section>
    )
}

export default Card;