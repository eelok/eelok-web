import homeAddress from '../../assets/home.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import internet from '../../assets/internet.svg';


export const  RESUME_DATA = [
    {
        name: 'Maria Petretckaia',
        activity: 'Software Developer',
        links: [
            {
                icon: homeAddress,
                link: 'Germany, Berlin'
            },
            {
                icon: linkedin,
                link: 'www.linkedin.com/in/maria-petretckaia-78b6a560'
            },
            {
                icon: github,
                link: 'https://github.com/eelok'
            },
            {
                icon: internet,
                link: 'https://eelok.netlify.app'
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

