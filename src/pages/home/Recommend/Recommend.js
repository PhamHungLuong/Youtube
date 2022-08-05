import styles from './Recommend.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Recommend({ content, onclick, isActive }) {

    var className = !isActive ? 'container' : 'container-active'

    return (
        <div className={cx(`${className}`)} onClick={onclick}>
            {content}
        </div>
    );
}

Recommend.propTypes = {
    content: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default Recommend;
