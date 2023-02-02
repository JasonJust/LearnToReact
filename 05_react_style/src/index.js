import React from 'react';
import ReactDOM from 'react-dom/client';

// 以下写法是webpack的特性
import App from './03_css_modules/app';
// import App from './01_内联样式/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
