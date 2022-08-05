import style from './Search.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import Button from '../../../components/Button/Button';
import Tippy from '../../../components/Tippy/Tippy';
import ResultSearch from './ResultSearch/ResultSearch';
import { DataSearch } from './FakeDataSearch';

const cx = className.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [clear, setClear] = useState(false);

    useEffect(() => {
        const lengthOfValue = searchValue.length;
        let result = [];
        let tempString;

        const valueSearch = DataSearch.map((element) => {
            if (searchValue !== '') {
                tempString = element.name.toLowerCase().substring(0, lengthOfValue);

                if (tempString === searchValue.toLowerCase()) {
                    result.push(element);
                }
            } else {
                result = [];
            }

            return result;
        });

        setSearchResults(valueSearch);
    }, [searchValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    return (
        <div className={cx('container')}>
            <label className={cx('search')}>
                <input placeholder="search" className={cx('input')} onChange={handleChange} value={searchValue} />
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                {!!searchValue && !clear && (
                    <div className={cx('clear')} onClick={clearSearch}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                )}

                <div className={cx('wrapper_search')}>
                    <ResultSearch content="hi" />
                    <ResultSearch content="hi" />
                    <ResultSearch content="hi" />
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
