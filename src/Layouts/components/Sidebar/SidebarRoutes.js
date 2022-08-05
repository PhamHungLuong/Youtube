import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAslInterpreting,
    faGear,
    faBaseballBall,
    faClock,
    faEarth,
    faFlag,
    faHouse,
    faMeteor,
    faMusic,
    faPlayCircle,
    faThumbsUp,
    faWalkieTalkie,
    faCircleInfo,
    faInfo,
    faSackDollar,
    faLadderWater,
    faEarDeaf,
    faWalking,
    faVault,
} from '@fortawesome/free-solid-svg-icons';

import routes from '../../../config/routes'

export const SidebarRoutes = [
    {
        to: routes.home,
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        to: routes.explore,
        title: 'Explore',
        icon: <FontAwesomeIcon icon={faEarth} />,
    },
    {
        to: routes.short,
        title: 'Short',
        icon: <FontAwesomeIcon icon={faMeteor} />,
    },
    {
        to: routes.subscriptions,
        title: 'Subscriptions',
        icon: <FontAwesomeIcon icon={faPlayCircle} />,
    },
    {
        to: routes.library,
        title: 'Library',
        icon: <FontAwesomeIcon icon={faBaseballBall} />,
    },
    {
        to: routes.history,
        title: 'History',
        icon: <FontAwesomeIcon icon={faClock} />,
    },
    {
        to: routes.myVideo,
        title: 'Your Video',
        icon: <FontAwesomeIcon icon={faWalkieTalkie} />,
    },
    {
        to:routes.watchLater,
        title: 'Watch Later',
        icon: <FontAwesomeIcon icon={faMusic} />,
    },
    {
        to: routes.setting,
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
        to: '/infomation',
        title: 'Infomation',
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
    },
    {
        to: '/',
        title: 'Mark Video',
        icon: <FontAwesomeIcon icon={faFlag} />,
    },
    {
        to: '/',
        title: 'Likes',
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
    },
    {
        to: '/',
        title: 'Study',
        icon: <FontAwesomeIcon icon={faAslInterpreting} />,
    },
    {
        to: '/',
        title: 'Cart',
        icon: <FontAwesomeIcon icon={faInfo} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faSackDollar} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faLadderWater} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faEarDeaf} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faSackDollar} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faWalking} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faFlag} />,
    },
    {
        to: '/',
        title: 'Not Active',
        icon: <FontAwesomeIcon icon={faVault} />,
    },
];
