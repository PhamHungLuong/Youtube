import style from './Search.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import Button from '../../../components/Button/Button';
import Tippy from '../../../components/Tippy/Tippy';
import ResultSearch from './ResultSearch/ResultSearch';
import { getHttpsRequest } from '../../../service/getHttpsRequest';

const cx = className.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchApi, setSearchApi] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [isShowResultSearch, setIsShowResultSearch] = useState(false);

    const searchRef = useRef();

    useEffect(() => {
        const path = 'search';
        const Data = getHttpsRequest(path);

        Data.then((result) => {
            setSearchApi(result)
        })
    },[]);

    useEffect(() => {
        var text = searchValue.toLowerCase();
        var result = [];
        if (text !== '') {
            setIsSearch(!isSearch);
            var lengthSearchValue = searchValue.length;

            const Datas = searchApi.map((data) => {
                var result = data.name.toLowerCase().slice(0, lengthSearchValue);

                if (text === result) {
                    return data;
                }
            });

            Datas.map((Data) => {
                if (!!Data) {
                    result.push(Data);
                }

                return null;
            });

            setSearchResults(result);
        } else {
            result = [];
            setSearchResults(result);
        }
    }, [searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    return (
        <div className={cx('container')}>
            <label className={cx('search')}>
                <input
                    onFocus={() => {
                        setIsShowResultSearch(true);
                    }}
                    onBlur={() => {
                        setIsShowResultSearch(false);
                    }}
                    ref={searchRef}
                    placeholder="search"
                    className={cx('input')}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    value={searchValue}
                />
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                {!!searchValue && (
                    <div className={cx('clear')} onClick={clearSearch}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                )}

                <div className={cx('wrapper_search')}>
                    {isShowResultSearch &&
                        searchResults.map((result) => {
                            return <ResultSearch content={result.name} key={result.id} />;
                        })}
                </div>
            </label>

            <Button className={cx('btn-search')}>
                <FontAwesomeIcon icon={faSearch} />
                <div className={cx('sub-search')}>
                    <Tippy content="search" />
                </div>
            </Button>

            <Button className={cx('voice')}>
                <FontAwesomeIcon icon={faMicrophone} />
                <div className={cx('sub-voice')}>
                    <Tippy content="Use Mic" />
                </div>
            </Button>
        </div>
    );
}

export default Search;
