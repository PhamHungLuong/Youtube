

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faGear, faUpload, faVideo, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import tippy from 'tippy.js';
import { useEffect, useRef, useState } from 'react';

import { LogoYoutube } from '../../../components/Icons';
import Search from '../Search/Search';
import Button from '../../../components/Button';
import Tippy from '../../../components/Tippy';
import User from './User';
import Notify from './Notify';
import { DataNotify } from './FakeDataNotify';
import routes from '../../../config/routes';

const cx = classNames.bind(styles);

tippy('.logo_home', {
    content: 'Youtube Home',
    placement: 'bottom',
    delay: 400,
    getReferenceClientRect: () => ({
        width: 100,
        height: 100,
        left: 100,
        right: 200,
        top: 100,
        bottom: 200,
    }),
});

function Header() {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenNotify, setIsOpenNotify] = useState(false);

    const createRef = useRef();
    const notifyRef = useRef();

    const ShowAndHide = (state, setState, Ref) => {
        useEffect(() => {
            const checkIfClickedOutside = (e) => {
                // If the menu is open and the clicked target is not within the menu,
                // then close the menu
                if (state && Ref.current && !Ref.current.contains(e.target)) {
                    setState(false);
                }
            };

            document.addEventListener('mousedown', checkIfClickedOutside);

            return () => {
                // Cleanup the event listener
                document.removeEventListener('mousedown', checkIfClickedOutside);
            };
        }, [state]);
    };

    //  Hide when click outside element create
    ShowAndHide(isOpenCreate, setIsOpenCreate, createRef);

    // Hide when click outside element notify
    ShowAndHide(isOpenNotify, setIsOpenNotify, notifyRef);

    return (
        <header className={cx('container')}>
            <div className={cx('logo')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <Link to={routes.home} className={cx('logo_home')}>
                    <LogoYoutube />
                    <div className={cx('text')}>Youtube</div>
                </Link>
            </div>

            {/* Component Search  */}
            <Search />

            {/* action  */}
            <div className={cx('action')}>
                <div ref={createRef}>
                    <Button
                        className={cx('icon')}
                        onClick={() => {
                            setIsOpenCreate((oldStateCreate) => !oldStateCreate);
                        }}
                    >
                        <FontAwesomeIcon icon={faVideo} />
                        <div className={cx('sub-icon')}>
                            <Tippy content="Create" />
                        </div>
                    </Button>

                    {isOpenCreate && (
                        <div className={cx('sub_action')}>
                            <Button className={cx('sub_btn')} to={routes.upload}>
                                <div className={cx('action_icon')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </div>
                                Upload Video
                            </Button>
                            <Button className={cx('sub_btn')} to={routes.live}>
                                <div className={cx('action_icon')}>
                                    <FontAwesomeIcon icon={faWaveSquare} />
                                </div>
                                Go Live
                            </Button>
                        </div>
                    )}
                </div>

                <div ref={notifyRef}>
                    <Button
                        className={cx('icon')}
                        onClick={() => {
                            setIsOpenNotify((oldStateNotify) => !oldStateNotify);
                        }}
                    >
                        <FontAwesomeIcon icon={faBell} />
                        <div className={cx('sub-icon')}>
                            <Tippy content="Notifications" />
                        </div>
                    </Button>
                    {isOpenNotify && (
                        <div className={cx('notify')}>
                            <div className={cx('header')}>
                                <div>Notifications</div>
                                <Button className={cx('notify-btn')} to={routes.setting}>
                                    <FontAwesomeIcon icon={faGear} />
                                </Button>
                            </div>
                            <div className={cx('notify-content')}>
                                {DataNotify.map((notify, index) => {
                                    return (
                                        <Notify
                                            avatar={notify.avatar}
                                            content={notify.content}
                                            time={notify.time}
                                            description={notify.description}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <User />
                </div>
            </div>
        </header>
    );
}

export default Header;
