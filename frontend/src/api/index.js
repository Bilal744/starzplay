import axios from "axios";

const BackendUrl = "http://localhost:5000";
const API = axios.create({
	baseURL: BackendUrl,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});

export default API;
