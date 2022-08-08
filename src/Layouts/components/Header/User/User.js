import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import propType from 'prop-types';

import avartaUser from '../../../../assets/avatar_user.jpeg';
import Button from '../../../../components/Button';
import MenuUser from './MenuUser/MenuUser';
import { Menu } from './MenuItem';

const cx = classNames.bind(styles);

function User({ func }) {
    const [isOpenUser, setIsOpenUser] = useState(false);
    const userRef = useRef();

    func(isOpenUser, setIsOpenUser, userRef);

    const MenuItem = Menu;

    const [menuCurrent, setMenuCurrent] = useState(MenuItem);
    const [isButtonBack, setIsButtonBack] = useState(false);

    const hideUserToShowSub = (value) => {
        setIsButtonBack(true);
        setMenuCurrent(value);
        console.log(1);
    };

    const backMenu = () => {
        setIsButtonBack(false);
        setMenuCurrent(MenuItem);
    };

    return (
        <div className={cx('container')}>
            <div ref={userRef}>
                <div
                    className={cx('user-img')}
                    onClick={() => {
                        setIsOpenUser((oldStateCreate) => !oldStateCreate);
                    }}
                >
                    <img src={avartaUser} alt="avatar" className={cx('img')} />
                </div>

                {isOpenUser && (
                    <div className={cx('menu')}>
                        <div className={cx('header')}>
                            <img src={avartaUser} className={cx('avatar')} alt="avatar" />
                            <div className={cx('text')}>
                                <div className={cx('name')}>Luong Pham</div>
                                <Button className={cx('manage-account')}>Manage your Google Account</Button>
                            </div>
                        </div>
                        {isButtonBack && (
                            <div className={cx('icon-back')} onClick={backMenu}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <div className={cx('text')}>Back Menu</div>
                            </div>
                        )}

                        {
                            <div className={cx('menu-item')}>
                                {menuCurrent.map((item, index) => {
                                    return (
                                        <MenuUser
                                            icon={item.icon}
                                            title={item.title}
                                            children={item.children}
                                            key={index}
                                            isChildren={!!item.children ? true : false}
                                            onClick={() => {
                                                if (item.children !== null) {
                                                    hideUserToShowSub(item.children);
                                                }
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

User.propType = {
    func: propType.func.isRequired,
};

export default User;
