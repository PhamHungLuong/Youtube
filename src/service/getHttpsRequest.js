import axios from 'axios';

export const getHttpsRequest = async (path) => {
    const search = `${process.env.REACT_APP_TEST_VAR}${path}`;
    
    try {
        const res = await axios.get(search).then((response) => {
            return response.data;
        });
        return res;
    } catch(error) {
        console.log(error);
    }
};
