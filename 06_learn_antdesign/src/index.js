import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import App from './App'
import App from './comment/App'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 严格模式
  // <React.StrictMode>
    <ConfigProvider theme={{
        token: {
            colorPrimary: 'orange'
        }
    }}>
        <App />
    </ConfigProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
