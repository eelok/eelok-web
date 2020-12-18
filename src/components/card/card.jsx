import React from 'react';
import './card-style.css';
import {ReactComponent as GitHubLogo} from '../../assets/github.svg';

const Card = ({title, technology, imageUrl}) => {
    return (
        <section className='card'>
            <div className='card__image-box'>
                <img className='card__image' src={imageUrl} alt=""/>
            </div>
            <div className='card__info'>
                <h3 className='secondary-header'>{title}</h3>
                <div className='card__info-technology'>
                    {
                        technology.map(item =>
                            //проверить верно ли это
                            <div className='text-tag' key={item.toString()}>
                                 {item}
                            </div>
                        )
                    }
                </div>
                <GitHubLogo className='card__info-link-project-github'/>
            </div>
        </section>
    )
}

export default Card;