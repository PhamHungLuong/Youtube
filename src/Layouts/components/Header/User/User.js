import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './User.module.scss';
import classNames from 'classnames/bind';
import avartaUser from '../../../../assets/avatar_user.jpeg';
import Button from '../../../../components/Button';
import MenuUser from './MenuUser';

const cx = classNames.bind(styles);

function User() {
    const MenuItem = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Your Channel',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Youtube Studio',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Switch Account',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Sign Out',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Purchases and Memberships',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Your Data in Youtube',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Language',
            iconLeft: <FontAwesomeIcon icon={faAngleRight} />,
            children: {
                title: 'Language',
                data: [
                    {
                        item: 'English',
                    },
                    {
                        item: 'Germany',
                    },
                    {
                        item: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Location',
            iconLeft: <FontAwesomeIcon icon={faAngleRight} />,
            children: {
                title: 'Location',
                data: [
                    {
                        item: 'Việt Nam',
                    },
                    {
                        item: 'Thailand',
                    },
                    {
                        item: 'Korea',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Restricted Mode',
            iconLeft: <FontAwesomeIcon icon={faAngleRight} />,
            children: {
                title: 'Restricted Mode',
                data: [
                    {
                        item: 'Dark Theme',
                    },
                    {
                        item: 'Pink Theme',
                    },
                    {
                        item: 'Yellow Theme',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Setting',
        },
    ];

    return (
        <div className={cx('container')}>
            <img src={avartaUser} alt="avatar" className={cx('img')} />

            {/* <div className={cx('menu')}>
                <div className={cx('header')}>
                    <img src={avartaUser} className={cx('avatar')} alt="avatar" />
                    <div className={cx('text')}>
                        <div className={cx('name')}>Luong Pham</div>
                        <Button className={cx('manage-account')}>Manage your Google Account</Button>
                    </div>
                </div>
            </div>
            <div className={cx('menu-item')}>
                <MenuUser />
            </div> */}
        </div>
    );
}

export default User;
