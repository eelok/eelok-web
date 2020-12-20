import React from 'react';
import './card-style.css';
import {ReactComponent as GitHubLogo} from '../../assets/github.svg';

const Card = ({title, technology, imageUrl, gitHubUrl}) => {
    const [imageUrl1x, imageUrl2x] = imageUrl;

    return (
        <section className='card'>
            <div className='card__image-box'>
                {/*<img className='card__image'*/}
                {/*     srcSet={`${imageUrl1x} 1x, ${imageUrl2x} 2x`}*/}
                {/*     alt="project cover"*/}
                {/*/>*/}
            </div>
            <div className='card__info'>
                <h3 className='secondary-header'>{title}</h3>
                <div className='card__info-technology'>
                    {
                        technology.map(item =>
                            //проверить верно ли это
                            <div
                                className="technology-item"
                                // className='text-tag'
                                key={item.toString()}>
                                {item}
                            </div>
                        )
                    }
                </div>
                    <a href={gitHubUrl}>
                        <GitHubLogo className='card__info-link-project-github'/>
                    </a>
            </div>
        </section>
    )
}

export default Card;