import React, { Component } from 'react';
function Header() {
    console.log('Header 被调用 ')
    return <div><h2>这里是头部</h2></div>
}
class Banner extends Component {
    render () {
        console.log('Banner 类组件render函数被调用 ')
        return (
            <div>
                轮播
            </div>
        )
    }
}

function ProductList() {
    console.log('ProductList 被调用 ')
    return (
        <div>
            <ul>
                <li>商品列表1</li>
                <li>商品列表2</li>
                <li>商品列表3</li>
                <li>商品列表4</li>
            </ul>
        </div>
    )
}

class Main extends Component {
    render () {
        console.log('Main 类组件render函数被调用 ')
        return (
            <div>
                <Banner/>
                <ProductList/>
            </div>
        )
    }
}

function Footer() {
    console.log('Footer 被调用 ')
    return <div>这里是footer</div>
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            message: 'Hi~'
        }
    }
    render () {
        console.log('App 类组件render函数被调用 ')
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true
        }
        return false
    }

    increment () {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeText () {
        this.setState({
            message: '哎嘿嘿~'
        })
    }
}
