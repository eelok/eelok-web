import {ReactComponent as homeAddress} from '../../assets/home.svg';
import {ReactComponent as linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as github} from '../../assets/github.svg';
import {ReactComponent as internet}    from '../../assets/internet.svg';


export const  RESUME_DATA = [
    {
        name: 'Maria Petretckaia',
        activity: 'Software Developer',
        links: [
            {
                icon: homeAddress,
                link: {title:'Germany, Berlin', href:'google.com/maps/@52.5111495,13.3327158,12z'}
            },
            {
                icon: linkedin,
                link: {title: 'linkedin.com/in/maria-petretckaia-78b6a560', href:'linkedin.com/in/maria-petretckaia-78b6a560'}
            },
            {
                icon: github,
                link: {title: 'github.com/eelok', href: 'github.com/eelok'}
            },
            {
                icon: internet,
                link: {title: 'eelok.netlify.app', href: 'eelok.netlify.app'}
            }
        ],
        education: [
            {
                time: '2018-04 - present',
                uniName: 'HTW Berlin - University of Applied Sciences',
                specialization: 'Applied Informatics',
            },
            {
                time: '2002-07 - 2007-05',
                uniName: 'MIIGAiK - Moscow State University of Geodesy and Cartography',
                specialization: 'Aerial Geodesy',
            },
        ],
        skills: ['HTML', 'CSS', 'Java', 'React', 'Spring Boot', 'Spring Cloud', 'Junit', 'Mockito', 'Hibernate', 'PostgreSQL', 'Git', 'Maven'],
        languages: ['German', 'English', 'Russian (native)']
    }
]

