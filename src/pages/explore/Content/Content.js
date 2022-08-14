import classNames from 'classnames/bind';
import style from './Content.module.scss';
import { faBookmark, faClock, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function Content({ avatar, title, info, date, description, time, type }) {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <img src={avatar} className={cx('background')} alt="background" />
                <div className={cx('list-icon')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>

                {type === 'short' ? (
                    <div className={cx('short')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        Short
                    </div>
                ) : (
                    <div className={cx('time')}>{time}</div>
                )}
            </div>
            <div className={cx('text')}>
                <div className={cx('heading')}>{title}</div>
                <div className={cx('info')}>
                    {info} • {date}{' '}
                </div>
                <div className={cx('description')}>{description}</div>
            </div>
        </div>
    );
}

Content.propTypes = {
   avatar: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    date: PropTypes.string,
    description : PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
}

export default Content;
