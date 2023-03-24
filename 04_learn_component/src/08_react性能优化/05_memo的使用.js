import React, { PureComponent, memo } from 'react';

const MemoHeader = memo(function Header() {
    console.log('Header 被调用 ')
    return <div><h2>这里是头部</h2></div>
})

class Banner extends PureComponent {
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

class Main extends PureComponent {
    // 没有依赖任何的props/state （相当于没有做任何改变，所以不会重新调用）
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

const MemoFooter = memo(() => {
    console.log('Footer 被调用 ')
    return <div>这里是footer</div>
})

// function Footer() {
//     console.log('Footer 被调用 ')
//     return <div>这里是footer</div>
// }

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }
    render () {
        console.log('App 类组件render函数被调用 ')
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <MemoHeader/>
                <Main/>
                <MemoFooter/>
            </div>
        );
    }

    increment () {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
