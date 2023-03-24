import React, { Component } from 'react';

// Header
 function Header () {
    return (
        <div>
            <h2>这里是头部</h2>
        </div>
    )
}

// 轮播图
function Banner() {
    return <div><h4>轮播</h4></div>
}

// 商品列表
function ProductList() {
    return <div>
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
        </ul>
    </div>
}

// Main
function Main() {
    return (
        <div>
            <Banner/>
            <ProductList/>
        </div>
    )
}

//Footer
function Footer() {
    return <div><h2>尾部</h2></div>
}

export default class App extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
