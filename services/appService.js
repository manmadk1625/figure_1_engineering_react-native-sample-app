import axios from 'axios';

const getFeed = () => axios.get(`https://staging-app.figure1.com/mock/feed`);

export default {
	getFeed
}