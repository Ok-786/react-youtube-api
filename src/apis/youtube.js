import axios from 'axios';

const KEY = 'AIzaSyB8yIjIRxWz35xXvBzHHkMLsPQyZluyEoY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
});

