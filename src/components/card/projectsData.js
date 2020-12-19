import smilebusters2x from '../../assets/smilebusters.jpg';
import smilebusters1x from '../../assets/smilebusters@0.5x.jpg';
import adminSmilebusters2x from '../../assets/admin-smilebusters.jpg';
import adminSmilebusters1x from '../../assets/admin-smilebusters@0.5x.jpg';

export const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Smilebusters',
        technology: ['React', 'html', 'css', 'firebase'],
        imageUrl: [smilebusters1x, smilebusters2x],
        gitHubUrl: 'https://github.com/eelok/smilebusters'
    },
    {
        id: 2,
        title: 'Admin-Smilebusters',
        technology: ['React', 'html', 'css', 'firebase'],
        imageUrl: [adminSmilebusters1x, adminSmilebusters2x],
        gitHubUrl: 'https://github.com/eelok/admin-office-sb'
    },
    // {
    //     id: 3,
    //     title: 'Songs Microservices',
    //     technology: ['Java', 'Spring', 'Spring Cloud', 'Eureka', 'Hibernate', 'JUnit', 'Mockito'],
    //     imageUrl: ''
    // },
]