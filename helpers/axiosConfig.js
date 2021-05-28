const axios = require('axios');

export default  axios.create({
    baseURL: process.env.API_URL,
    timeout: 0,
    headers: { 
        "X-API-KEY": process.env.API_KEY
    }
})