import axios from "axios";

export default axios.create({
    baseURL:'https://f1c7-202-83-19-46.ngrok-free.app   ',
    headers:{'ngrok-skip-browser-warning':'true'}
    // baseURL:'http://localhost:8080'
});