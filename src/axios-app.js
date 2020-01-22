import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'https://orders-and-dishes.firebaseio.com/'
});

export default axiosApp;