const axios = require('axios');
const cookie = require('js-cookie');

export default axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
    headers: {
        "X-API-KEY": process.env.API_KEY,
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcyOTY3Njg2MDRkZWUwNDNjODU5OTUiLCJlbWFpbCI6InRlc3Rpbmd1c2VyQGdtYWlsLmNvbSIsIm5hbWUiOiJpcmZhbm1ATWFpbC5jb20iLCJyb2xlIjoidXNlciIsInBob25lX251bWJlciI6InVuZGVmaW5lZCIsImhlaWdodCI6MTUwLCJ3ZWlnaHQiOjcwLCJhZ2UiOjI1LCJpYXQiOjE3MjM2NjgyOTQsImV4cCI6MTc1NTIwNDI5NH0.BuzFgEd7FSTvwR1f3lz9Nidup95-UJ5SxfRplchNLes"
        // "Accept-Language": cookie.get('next-i18next')
    }
})