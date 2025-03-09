import axios from "axios";

const instance = axios.create({
    baseURL: 'http://nightmafia.uz/dashboard',
    headers: {
        "Content-Type": "application/json"
    }
})


export default instance