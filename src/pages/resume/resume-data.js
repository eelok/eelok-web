import {ReactComponent as homeAddress} from '../../assets/home.svg';
import {ReactComponent as linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as github} from '../../assets/github.svg';
import {ReactComponent as internet}    from '../../assets/internet.svg';


export const  RESUME_DATA = [
    {
        name: 'Maria Petri',
        activity: 'Software Developer',
        links: [
            {
                icon: homeAddress,
                link: {title:'Switzerland; Remote-Friendly'}
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
                time: "2023-06 - present",
                companyName: "AckerCompany GmbH, Germany",
                position: "Backend Software Developer",
                duty: [
                    'Refactoring and optimizing existing systems to enhance efficiency and functionality.',
                    'Implementation of unit and integration tests to ensure software reliability, maintainability, and long-term stability.',
                    'Working with the onion architecture to maintain a modular, maintainable, and scalable codebase.',
                    'Implementation and managing microservices architectures o enhance system scalability, resilience, and adaptability to evolving requirements.',
                    'Implementation of new features in REST API',
                    'Collaborating with cross-functional teams.',
                    'Participating in code reviews.'
                ]
            },
            {
                time: '2021-12 - 2023-05',
                companyName: 'Resourceful Humans GmbH, Germany',
                position: 'Junior Backend Software Developer',
                duty: ['Implementation of new features in the GraphQL API.',
                       'Refactoring code to enhance maintainability, readability, and stability.',
                       'Configuration of GitHub Actions workflows for building, testing, and deploying code.',
                       'Performing Git operations such as merging, rebasing, and cherry-picking using Git and GitHub.',
                       'Development of database functionality using Sequelize and raw SQL queries.',
                       'Implementation of unit and integration tests with Jest.',
                       'Testing APIs and endpoints using Postman.',
                       'Agile collaboration with ticketing systems like Jira and Notion.']
            }
        ],
        skills: ['JavaScript', 'TypeSCript', 'Java', 'Express', 'React', 'Spring Boot', 'HTML','Jest', 'Junit', 'Mockito','Sequelize', 'Hibernate', 'PostgreSQL', 'Git', 'Maven', 'Postman', 'Bruno', 'Jira', 'Notion'],
        languages: ['German', 'English', 'Russian (native)'],
        softSkills: ['Teamwork', 'Flexibility', 'Time management', 'Responsibility'],
    }
]

