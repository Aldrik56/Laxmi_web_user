require('dotenv').config()
const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    env: {
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY
    },
    images: {
        domains: ['34.101.70.83','via.placeholder.com', 'localhost']
    }
}