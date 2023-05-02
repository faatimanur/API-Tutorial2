import axios from "axios";

const http = axios.create({
    baseURL:'https://ravshandev.pythonanywhere.com/api'
})

export default http;