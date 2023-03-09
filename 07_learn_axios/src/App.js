import React, {PureComponent} from 'react';
// import axios from 'axios';
import request from './service/request.js'

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        // 1、真实开发逻辑-拿到全部数据并塞入
        // this.setState({
        //     products: [...this.state.products, ...res]
        // })

        // 2、axios发送基本网络请求
        // axios({
        //     url: 'http://httpbin.org/get',
        //     method: 'GET',
        //     params: {
        //         name: 'Just',
        //         sex: '女'
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })
        //
        // axios({
        //     url: 'http://httpbin.org/post',
        //     method: 'POST',
        //     data: {
        //         content: '这是发送的post'
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })

        // 3、axios发送get/post
        // axios.get('http://httpbin.org/get', {
        //     params: {
        //         name: '简洁get请求'
        //     }
        // }).then(console.log)
        // axios.post('http://httpbin.org/post', {
        //     name: '简洁post请求'
        // }).then(console.log)

        // 4、ES7新特性 async await
        // try {
        //     const result = await axios.post('http://httpbin.org/post', {
        //         name: '简洁post请求'
        //     })
        //     console.log(result)
        // } catch (error) {
        //     console.log(error)
        // }

        // 5、axios.all
        // const request1 = axios.get('http://httpbin.org/get', {
        //     params: {
        //         name: 'axios.all-request1'
        //     }
        // })
        // const request2 = axios.post('http://httpbin.org/post', {
        //     name: 'axios.all-request2'
        // })
        //
        // axios.all([request1, request2]).then((res) => {
        //     console.log(res)
        // }).catch(error => {
        //     console.log(error)
        // })

        // 6、Promise.all
        // const promise1 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve('promise1')
        //     }, 1000)
        // })
        // const promise2 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve('promise2')
        //     }, 3000)
        // })
        // Promise.all([promise1, promise2]).then((res) => {
        //     console.log(res)
        // })

        // 8、创建新的实例
        // const instance1 = axios.create({
        //     baseURL: 'https://www/baidu.com',
        //     timeout: 2000,
        //     headers: {}
        // })
        // const instance2 = axios.create({
        //     baseURL: 'https://www/baidu.com',
        //     timeout: 1000
        // })

        // 9、axios请求和响应拦截(request：请求拦截，response：响应拦截)
        // axios.interceptors.request.use(config => {
        //     // 1、发送网络请求时，在页面显示loading组件
        //
        //     // 2、某一些请求要求用户必须携带token，如果没有携带直接跳转到登录页
        //
        //     // 3、params/data序列化的操作
        //     console.log('请求被拦截')
        //     return config
        // }, err => {
        //     console.log(err)
        // })
        //
        // axios.interceptors.response.use(res => {
        //     return res.data
        // }, err => {
        //     console.log(err)
        //     if (err && err.response) {
        //         switch (err.response.status) {
        //             case 400:
        //                 console.log('网络请求错误')
        //                 break
        //             case 401:
        //                 console.log('未授权访问')
        //                 break
        //             case 404:
        //                 console.log('未连接')
        //                 break
        //             case 405:
        //                 console.log('请求地址错误')
        //                 break
        //             case 500:
        //                 console.log('服务器不可访问')
        //                 break
        //             default:
        //                 console.log('其他错误信息：' + err.response.message)
        //         }
        //     }
        //     return err
        // })
        // axios.get('https://httpbin.org/get', {
        //     params: {
        //         name: 'Just.'
        //     }
        // }).then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })

        request({
            url: '/get',
            method: 'GET',
            params: {
                content: 'Just.是个美女子',
                age: 18
            }
        }).then(console.log)
    }

    render () {
        return (
            <div>
                12
            </div>
        );
    }
}
