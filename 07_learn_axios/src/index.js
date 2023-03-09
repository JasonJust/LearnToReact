import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 7、默认配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.module = axios.defaults.headers
axios.defaults.timeout = 5000
axios.defaults.headers.common['token'] = 'zhelishitoken'
axios.defaults.headers.post['Content-Type'] = 'application/text'

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
