import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//say the URL where I send requests is always the same
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
//setting a common header of authorization for all types of requests
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//header for a specific request types, POST in this case. Content type sent to 'application/json', is the default
axios.defaults.headers.post['Content-Type'] = 'application/json';

//in the interceptor function I have to return something, otherwise it gets blocked
axios.interceptors.request.use(request => {
    console.log(request);
    //I can also edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    //I can also edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
