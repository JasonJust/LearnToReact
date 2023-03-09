import axios from 'axios';
import { BASE_URL, TIMEOUT} from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})
// 网络请求拦截
instance.interceptors.request.use(config => {
    // 1、发送网络请求时，在页面显示loading组件

    // 2、某一些请求要求用户必须携带token，如果没有携带直接跳转到登录页

    // 3、params/data序列化的操作
    console.log('请求被拦截')
    return config
}, err => {
    console.log(err)
})
//网络响应拦截
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    console.log(err)
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log('网络请求错误')
                break
            case 401:
                console.log('未授权访问')
                break
            case 404:
                console.log('未连接')
                break
            case 405:
                console.log('请求地址错误')
                break
            case 500:
                console.log('服务器不可访问')
                break
            default:
                console.log('其他错误信息：' + err.response.message)
        }
    }
    return err
})

export default instance
