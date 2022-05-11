import axios from 'axios';

const api = axios.create({
    baseURL: 'http://hometrackertool.local:1332/api/v1/'
});

export default api;