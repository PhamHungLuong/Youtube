import axios from 'axios';

export const getHttpsRequest = (path, setStateValue) => {
    const search = `${process.env.REACT_APP_TEST_VAR}${path}`;

    axios.get(search).then((response) => {
        setStateValue(response.data);
    });
};
