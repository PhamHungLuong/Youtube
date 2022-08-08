import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './Notify.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../components/Button';
import routes from '../../../../config/routes';

const cx = classNames.bind(styles);

function Notify({ avatar, content, time, description }) {
    return (
        <div className={cx('container')}>
            <img src={avatar} alt="img" className={cx('avatar')} />
            <div className={cx('content')}>
                <div className={cx('heading')}>{content}</div>
                <div className={cx('time')}>{time}</div>
            </div>
            <img src={description} alt="img" className={cx('image')} />
            <Button className={cx('setting')} to={routes.setting}>
                <FontAwesomeIcon icon={faGear} />
            </Button>
        </div>
    );
}

Notify.propTypes = {
    avatar: PropTypes.node,
    continue: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
};

export default Notify;
