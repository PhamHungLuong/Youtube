import PropTypes from 'prop-types'

import './HeaderOnly.module.scss'
import Header from '../components/Header/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = { 
    children: PropTypes.node.isRequired
}

export default HeaderOnly;
