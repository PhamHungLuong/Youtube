// layout
import { HeaderOnly } from '../Layouts';
import routes from '../config/routes'; 

import Home from '../pages/home';
import Shorts from '../pages/shorts';
import Setting from '../pages/setting';
import Explore from '../pages/explore/Explore';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.short, component: Shorts },
    { path: routes.explore, component: Explore },
    { path: routes.setting, component: Setting, layout: HeaderOnly },
];

const privateRoute = [];

export { privateRoute, publicRoutes };
