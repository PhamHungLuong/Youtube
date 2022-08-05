import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import { SidebarRoutes } from './SidebarRoutes';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container')}>
            <Menu>
                {SidebarRoutes.map((item, index) => {
                    return <MenuItem icon={item.icon} title={item.title} to={item.to} key={index} />;
                })}
            </Menu>
        </div>
    );
}

export default Sidebar;
