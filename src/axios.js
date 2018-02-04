import axios from 'axios';

//the instance here assumes the default setup in index.js but overrides everything it sets in the instance itself
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;