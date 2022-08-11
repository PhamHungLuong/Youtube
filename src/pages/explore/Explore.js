import style from './Explore.module.scss';
import className from 'classnames/bind';
import { useState, useEffect } from 'react';

import MenuHeader from './MenuHeader';
import { DataMenuHeader } from './MenuHeader/DataMenuHeader';
import Content from './Content/Content';
import { getHttpsRequest } from '../../service/getHttpsRequest';

const cx = className.bind(style);

function Explore() {
    const [getApiContent, setGetApiContent] = useState([]);

    const path = 'HomeContent';

    useEffect(() => {
        const Data = getHttpsRequest(path);

        Data.then((result) => {
            setGetApiContent(result);
        });
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('menu')}>
                {DataMenuHeader.map((item) => {
                    return <MenuHeader icon={item.icon} title={item.title} color={item.color} />;
                })}
            </div>
            <div className={cx('content')}>
                <div className={cx('heading')}>Trending Videos</div>
                <div className={cx('menu-content')}>
                    {getApiContent.map((result) => {
                        return (
                            <Content
                                avatar={result.background}
                                title={result.title}
                                info={result.info}
                                date={result.date}
                                description={result.description}
                                time={result.time}
                                type={result.type}
                                key={result.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Explore;
