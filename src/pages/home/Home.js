import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './Home.module.scss';

import HomeItem from './HomeItem/HomeItem';
import HomeList from './HomeItem/HomeList';
import Recommend from './Recommend';
import { DataRecommends } from './Recommend/DataRecommend';
import { DataContents } from './HomeItem/DataHomeItem';

const cx = classNames.bind(style);

function Home() {
    const [isActiveRecommend, setIsActiveRecommend] = useState(1);

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
                    {DataContents.map((DataContent) => {
                        return (
                            <HomeItem
                                background={DataContent.background}
                                avatar={DataContent.avatar}
                                title={DataContent.title}
                                account={DataContent.account}
                                info={DataContent.info}
                            />
                        );
                    })}
                </HomeList>
            </div>
        </div>
    );
}

export default Home;
