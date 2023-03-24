import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './04_组件通信案例/App';
// import './04_组件通信案例/style.css'

import App from './05_react实现slot/App';
import './05_react实现slot/style.css'

// import App from './12_组件内容补充/04_strictMode的使用';
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App name='Just' /> ) // './11_高阶组件的使用/01_高阶组件的定义方式'
root.render( <App /> )
