import axios from 'axios';

export const getHttpsRequest = async (path) => {
    const url = `${process.env.REACT_APP_TEST_VAR}${path}`;
    
    try {
        const res = await axios.get(url).then((response) => {
            return response.data;
        });
        return res;
    } catch(error) {
        console.log(error);
    }
};
