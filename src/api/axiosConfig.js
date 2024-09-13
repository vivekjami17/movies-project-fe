import axios from "axios";

export default axios.create({
    baseURL:'https://0200-2406-7400-50-674-8ca7-7197-b5ab-1ef9.ngrok-free.app',
    headers:{'ngrok-skip-browser-warning':'true'}
    // baseURL:'http://localhost:8080'
});