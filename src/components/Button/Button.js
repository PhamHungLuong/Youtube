import './Button.module.scss';
import { Link } from 'react-router-dom';
// import classNames from 'classnames/bind';
// import styles from './Button.module.scss';

// const cx = classNames.bind(styles);

function Button({ children, to, onClick, className, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    }

    return (
        <Comp className={className} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
