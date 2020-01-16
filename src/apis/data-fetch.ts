import axios from 'axios';

export default axios.create({
	baseURL: "https://adriyst.github.io/report_endpoint/data.json"
});
