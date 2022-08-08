import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './Home.module.scss';

import HomeItem from './HomeItem/HomeItem';
import HomeList from './HomeItem/HomeList';
import Recommend from './Recommend';
import { DataRecommends } from './Recommend/DataRecommend';
import { getHttpsRequest } from '../../service/getHttpsRequest';

const cx = classNames.bind(style);

function Home() {
    const [isActiveRecommend, setIsActiveRecommend] = useState(1);
    const [getValueInApi, setGetValueInApi] = useState([]);

    const path = 'HomeContent';

    useEffect(() => { 
        getHttpsRequest(path, setGetValueInApi);
    }, []);

    const handleClick = (id) => {
        setIsActiveRecommend(id);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('recommend')}>
                {DataRecommends.map((recommend) => {
                    return (
                        <Recommend
                            onclick={() => {
                                handleClick(recommend.id);
                            }}
                            isActive={recommend.id === isActiveRecommend ? true : false}
                            key={recommend.id}
                            content={recommend.content}
                        />
                    );
                })}
            </div>
            <div className={cx('content')}>
                <HomeList>
                    {getValueInApi.map((DataContent, index) => {
                        return (
                            <HomeItem
                                background={DataContent.background}
                                avatar={DataContent.avatar}
                                title={DataContent.title}
                                account={DataContent.account}
                                info={DataContent.info}
                                key={index}
                            />
                        );
                    })}
                </HomeList>
            </div>
        </div>
    );
}

export default Home;
