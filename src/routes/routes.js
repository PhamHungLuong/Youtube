// layout 
import { HeaderOnly } from '../Layouts';

import Home from '../pages/home';
import Shorts from '../pages/shorts';
import Setting from '../pages/setting';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shorts', component: Shorts },
    { path: '/setting', component: Setting , layout : HeaderOnly },
];

const privateRoute = [];

export { privateRoute, publicRoutes };
