import microsevices from '../../assets/microservices.jpg';
import iphone_full from '../../assets/iphone_full.png';
import smilebuster from '../../assets/smilebusters.png';

import htmlIcon from '../../assets/html-5.svg';
import cssIcon from '../../assets/css-3.svg';
import firebaseIcon from "../../assets/firebae-icon.svg";
import reactIcon from '../../assets/react-icon.svg';
import javaIcon from '../../assets/java.svg';
import hibernateIcon from '../../assets/hibernate-icon.svg';
import springIcon from '../../assets/spring-framework-icon.svg';
import mockitoLogo from '../../assets/Mockito_Logo.png';
import jUnitLogo from '../../assets/jUnit-icon.png';

export const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Smilebusters',
        technology: [reactIcon, htmlIcon, cssIcon, firebaseIcon],
        imageUrl: microsevices
    },
    {
        id: 2,
        title: 'Admin-Smilebusters',
        technology: [reactIcon, htmlIcon, cssIcon, firebaseIcon],
        imageUrl: iphone_full,
    },
    {
        id: 3,
        title: 'Songs Microservices',
        technology: [javaIcon, springIcon, hibernateIcon, jUnitLogo],
        imageUrl: smilebuster
    },
]