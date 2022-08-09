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
                link: {title:'Germany, Waldshut-Tiengen'}
            },
            {
                icon: linkedin,
                link: {title: 'www.linkedin.com/in/eelok', href:'www.linkedin.com/in/eelok'}
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
                time: '2018-04 - 2022-03',
                uniName: 'HTW Berlin - University of Applied Sciences',
                specialization: 'Applied Informatics',
            },
            {
                time: '2002-07 - 2007-05',
                uniName: 'MIIGAiK - Moscow State University of Geodesy and Cartography',
                specialization: 'Aerial Geodesy',
            },
        ],
        workExperience: [
            {
                time: '2021-12 - present',
                companyName: 'Resourceful Humans GmbH',
                position: 'Junior Backend Node.JS Software Developer',
                intro: 'I introduced tests and kept the culture of writing tests for each feature and sought toward full coverage. ' +
                    'I implemented new features and refactored code to make it more maintainable and readable.',
                duty: ['Implementation of GraphQL API',
                      'Utilising Sequelize ORM',
                      'Store and fetch data in and from Postgres',
                      'Writing unit and integration tests with Jest',
                      'Github, git', 'Jira, Notion']
            }
        ],
        skills: ['JavaScript', 'Java', 'React', 'Spring Boot', 'Spring Cloud',  'HTML', 'CSS','Jest', 'Junit', 'Mockito','Sequelize', 'Hibernate', 'PostgreSQL', 'Git', 'Maven', 'Postman', 'Jira', 'Notion'],
        languages: ['German (C1 certificate)', 'English (good written and spoken)', 'Russian (native)'],
        softSkills: ['Teamwork', 'Flexibility', 'Time management', 'Responsibility'],
    }
]

