import classNames from 'classnames/bind';
import style from './Login.module.scss';

import { getHttpsRequest } from '../../../service/getHttpsRequest';
import { useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function Login() {

    useEffect(() => {
        const path = 'account';
        const Data = getHttpsRequest(path);

        Data.then((result) => {
            console.log(result);
        })
    },[]);

    return (
        <div className={cx('container')}>
            <div className={cx('form')}>
                <div className={cx('heading')}>Đăng nhập vào Youtube</div>
                <div className={cx('list-input')}>
                    <div className={cx('item')}>
                        <div className={cx('text')}>Tài Khoản</div>
                        <input className={cx('input')} />
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('text')}>Mật Khẩu</div>
                        <input type={'password'} className={cx('input')} />
                    </div>
                    <div className={cx('accept')}>
                        <div className={cx('text')}>Xác Nhật</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
