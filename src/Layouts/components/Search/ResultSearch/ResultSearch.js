import style from './ResultSearch.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function ResultSearch({ content }) {
    return (
        <div className={cx('container')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className={cx('content')}>content</div>
        </div>
    );
}

ResultSearch.propTypes = {
    content : PropTypes.string.isRequired
};

export default ResultSearch;
