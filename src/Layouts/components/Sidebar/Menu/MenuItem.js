import styles from './MenuItem.module.scss'
import classNames from 'classnames/bind';
import Button from '../../../../components/Button'
import Menu from './Menu';

import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function MenuItem({icon, title, to}) {
    return ( 
        <Button className={cx('container')} to={to}>
            <div className={cx('icon')}>
                {icon}
            </div>
            <div className={cx('text')}>
                {title}
            </div>
        </Button>
     );
}

Menu.propTypes = { 
    icon: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string
}

export default MenuItem;