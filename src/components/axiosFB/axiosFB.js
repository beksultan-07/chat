import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chat-c2a88-default-rtdb.firebaseio.com'
});

export default instance;