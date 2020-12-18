import React from 'react';
import './card-style.css';
import {ReactComponent as GitHubLogo} from '../../assets/github.svg';

const Card = ({title, imageUrl, technology}) => {
    return (
        <section className='card'>
            <div className='card__image-box'>
                <img className='card__cover' src={imageUrl} alt="project cover"/>
            </div>
            <div className='card__info'>
                <h3 className='secondary-header'>{title}</h3>
                <div className='card__info-technology'>
                    {
                        technology.map(item =>
                            //проверить верно ли это
                            <img className='technology-icons'
                                 src={item} alt="technology icon"
                                 key={item.toString()}/>
                        )
                    }
                </div>
                <GitHubLogo className='card__info-link-project-github'/>
            </div>
        </section>
    )
}

export default Card;