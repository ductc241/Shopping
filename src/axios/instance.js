import axios from 'axios'

const instance = axios.create({
    baseURL: "https://duc241-shop.herokuapp.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
    
})

export default instance