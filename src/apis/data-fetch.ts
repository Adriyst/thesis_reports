import axios from 'axios';

export default axios.create({
	baseURL: "http://localhost:3100/get_data"
});
