const axios = require('axios');
const cookie = require('js-cookie');

export default  axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
    headers: { 
        "X-API-KEY": process.env.API_KEY,
        "Accept-Language" : cookie.get('next-i18next')
    }
})