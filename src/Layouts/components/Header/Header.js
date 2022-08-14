import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faGear, faUpload, faVideo, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from 'react';

import { LogoYoutube } from '../../../components/Icons';
import Search from '../Search/Search';
import Button from '../../../components/Button';
import Tippy from '../../../components/Tippy';
import User from './User';
import Notify from './Notify';
import routes from '../../../config/routes';
import { getHttpsRequest } from '../../../service/getHttpsRequest';
import Login from '../Login/Login';

const cx = classNames.bind(styles);

function Header() {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenNotify, setIsOpenNotify] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isFormLogin, setIsFormLogin] = useState(false)

    const createRef = useRef();
    const notifyRef = useRef();

    const [getNotifyInApi, setGetNotifyInApi] = useState([]);
    const path = 'notify';

    // call Api to get value notify
    useEffect(() => {
        const Data = getHttpsRequest(path);

        Data.then((result) => {
            setGetNotifyInApi(result);
        });
    }, []);

    // hide to click outside
    const HideToClickOutSide = (state, setState, Ref) => {
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

    // hide to click outside
    HideToClickOutSide(isOpenCreate, setIsOpenCreate, createRef);

    // hide to click outside
    HideToClickOutSide(isOpenNotify, setIsOpenNotify, notifyRef);

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

            {isLogin ? (
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
                                    {getNotifyInApi.map((notify, index) => {
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
                        <User HideToClickOutSide={HideToClickOutSide} setLogout={setIsLogin} />
                    </div>
                </div>
            ) : (
                <Button className={cx('btn-login')} onClick={() => {setIsFormLogin(true)}}>
                    Đăng Nhập
                </Button>
            )}
            {
                isFormLogin && <Login />
            }
        </header>
    );
}

export default Header;
