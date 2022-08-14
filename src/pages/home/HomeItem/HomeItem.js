import style from './HomeItem.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function HomeItem({ background, avatar, title, account, info }) {
    return (
        <div className={`${cx('container')} ${cx('reponsive')}`}>
            <div className={cx('image')}>
                <img src={background} alt="content" className={cx('background')} />
                <div className={cx('overlay')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    Play
                </div>
            </div>
            <div className={cx('content')}>
                <img src={avatar} alt="avatar" className={cx('avatar')} />
                <div className={cx('text')}>
                    <div className={cx('heading')}>{title}</div>
                    <div className={cx('account')}>{account}</div>
                    <div className={cx('info')}>{info}</div>
                </div>
            </div>
        </div>
    );
}

HomeItem.propTypes = {
    background: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    account: PropTypes.string,
    time: PropTypes.string,
};

export default HomeItem;
