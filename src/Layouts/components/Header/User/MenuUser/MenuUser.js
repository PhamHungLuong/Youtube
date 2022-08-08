import styles from './MenuUser.module.scss';
import classNames from 'classnames/bind';
import propType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuUser({ icon , title , isChildren, onClick }) {
    return (
        <div className={cx('container')}>
            <div className={cx('item')} onClick={onClick}>
                <div className={cx('content')}>
                    <div className={cx('icon')}>{icon}</div>
                    <div className={cx('title')}>{title}</div>
                </div>
                {isChildren && (
                    <div className={cx('icon-right')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                )}
            </div>
        </div>
    );
}

MenuUser.propType = {
    icon: propType.string.isRequired,
    title: propType.string.isRequired,
    isChildren: propType.bool,
    onClick: propType.func,
};

export default MenuUser;
