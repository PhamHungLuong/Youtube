import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBook,
    faRestroom,
    faDoorClosed,
    faCartPlus,
    faDatabase,
    faEarthAfrica,
    faLocation,
    faMoon,
    faGear,
    faSun,
} from '@fortawesome/free-solid-svg-icons'

export const Menu = [
    {
        icon: <FontAwesomeIcon icon={faBook} />,
        title: 'Your Channel',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faRestroom} />,
        title: 'Youtube Studio',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faDoorClosed} />,
        title: 'Sign Out',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faCartPlus} />,
        title: 'Purchases and Memberships',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faDatabase} />,
        title: 'Your Data in Youtube',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Switch Account',
        children: [
            { icon: <FontAwesomeIcon icon={faUser} />, title: 'Phạm Hùng Lương', children: null },
            { icon: <FontAwesomeIcon icon={faUser} />, title: 'Nguyễn Văn Nam', children: null },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'Language',
        children: [
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Tiếng Việt', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'English', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Germany', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'China', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Korea', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Japanese', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Canada', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Thailand', children: null },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faLocation} />,
        title: 'Location',
        children:  [
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Viet Name', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'China', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Japan', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Korea', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Russia', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Thailand', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'United Kingdoms', children: null },
            { icon: <FontAwesomeIcon icon={faEarthAfrica} />, title: 'Brunei', children: null },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Restricted Mode',
        children: [
            { icon: <FontAwesomeIcon icon={faMoon} />, title: 'Dark Mode', children: null },
            { icon: <FontAwesomeIcon icon={faSun} />, title: 'Light Mode', children: null },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        children: null,
    },
];