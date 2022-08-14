import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import HomeItem from './HomeItem/HomeItem';
import HomeList from './HomeItem/HomeList';
import Recommend from './Recommend';
import { DataRecommends } from './Recommend/DataRecommend';
import { getHttpsRequest } from '../../service/getHttpsRequest';
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Home() {
    const [isActiveRecommend, setIsActiveRecommend] = useState(1);
    const [getValueInApi, setGetValueInApi] = useState([]);
    const [recommendValue, setRecommendValue] = useState('');
    const [homeContent, setHomeContent] = useState([]);

    const path = 'homecontent';

    useEffect(() => {
        const Data = getHttpsRequest(path);

        Data.then((result) => {
            setHomeContent(result);
            setGetValueInApi(result);
        });
    }, []);

    useEffect(() => {
        const result = [];
        if (recommendValue === 'All') {
            setHomeContent(getValueInApi);
        } else {
            getValueInApi.forEach((item) => {
                if (item.type.toLowerCase() === recommendValue.toLowerCase()) {
                    result.push(item);
                }
            });
            setHomeContent(result);
        }
    }, [recommendValue]);

    const handleClick = (id, value) => {
        setIsActiveRecommend(id);
        setRecommendValue(value);
    };

    return (
        // <div className={cx('container')}>
        <div className={`${cx('container')} ${cx('reponsive')}`}>
            <div className={cx('recommend')}>
                {DataRecommends.map((recommend) => {
                    return (
                        <Recommend
                            onclick={() => {
                                handleClick(recommend.id, recommend.content);
                            }}
                            isActive={recommend.id === isActiveRecommend ? true : false}
                            key={recommend.id}
                            content={recommend.content}
                        />
                    );
                })}
            </div>
            <div className={cx('content')}>
                {homeContent.length > 0 ? (
                    <HomeList>
                        {homeContent.map((DataContent, index) => {
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
                ) : (
                    <div className={cx('overlay')}>
                        <div className={cx('icon')}> 
                            <FontAwesomeIcon icon = {faFaceFrownOpen} />
                        </div>
                        <div className={cx('text')}>
                            Không có video khả dụng
                        </div>   
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
