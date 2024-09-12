import axios from "axios";

export default axios.create({
    // baseURL:'https://e427-2406-7400-50-674-c9ad-b960-eecb-8a70.ngrok-free.app',
    // headers:{'ngrok-skip-browser-warning':'true'}
    baseURL:'http://localhost:8080'
});