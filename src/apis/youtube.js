import axios from 'axios';

// Creating an instance with a custom config
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

export default youtube;