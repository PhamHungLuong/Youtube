import styles from './Tippy.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Tippy({ content }) {
    return <div className={cx('container')}>{content}</div>;
}

export default Tippy;
