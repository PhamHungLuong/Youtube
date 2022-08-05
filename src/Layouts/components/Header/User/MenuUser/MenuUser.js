import styles from './MenuUser.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuUser() {
    return (
        <div className={cx('container')}>
            {/* <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div className={cx('title')}>
                    Setting
                </div>
            </div> */}
        </div>
    )
}

export default MenuUser;
