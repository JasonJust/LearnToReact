// module.exports = {
//     baseURL: 'https://httpbin.org',
//     username: '18512345678',
//     password: '111111'
// }

const devBaseURL = 'https://httpbin.org'
const prodBaseURL = 'https://production.org'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : prodBaseURL
export const TIMEOUT = 2000

