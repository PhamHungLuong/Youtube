import propType from 'prop-types';
import classNames from 'classnames/bind';
import style from './MenuHeader.module.scss';

const cx = classNames.bind(style);

function MenuHeader({ icon, title, color }) {
    return (
        <div className={cx('item')}>
            <div className={cx('icon')} style={{ color: `${color}` }}>
                {icon}
            </div>
            <div className={cx('title')}>{title}</div>
        </div>
    );
}

MenuHeader.ProtoType = {
    icon: propType.string,
    title: propType.string,
};

export default MenuHeader;
