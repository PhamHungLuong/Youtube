import style from './HomeItem.module.scss'
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(style)

function HomeList( {children} ) {
    return ( 
        <div className={cx('row')}>
            {children}
        </div>
     );
}

HomeList.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomeList;