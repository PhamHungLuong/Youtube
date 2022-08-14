import axios from 'axios';

export const postHttpsRequest = async (path) => {
    const url = `${process.env.REACT_APP_TEST_VAR}${path}`;
    const article = { title: 'React POST Request Example' };

    try {
        const res = await axios.post(url,article).then((response) => {
            return response.data;
        });
        return res;
    } catch(error) {
        console.log(error);
    }
}