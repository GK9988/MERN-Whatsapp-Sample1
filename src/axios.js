import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://mern-whatsapp-sample-1.herokuapp.com/",

})

export default instance