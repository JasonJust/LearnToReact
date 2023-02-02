import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render () {
        const { counter } = this.state
        return (
            <div>
                <h2>当前计数：{counter}</h2>
                <button onClick={ e => this.increment()}>+1</button>
            </div>
        );
    }

    increment () {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.titleRef2 = createRef()
        this.titleFun = null
        this.counterRef = createRef()
    }

    render () {
        return (
            <div>
                {/*ref=字符串/对象/函数*/}
                <h2 ref='titleRef'>字符串</h2>
                {/*目前react推荐的方式*/}
                <h2 ref={this.titleRef2}>对象</h2>
                <h2 ref={ac => { this.titleFun = ac }}>函数</h2>
                <button onClick={e => this.changeDom()}>改变DOM</button>
                <hr/>
                <Counter ref={this.counterRef}/>
                <button onClick={e => this.appChange()}>App</button>
            </div>
        );
    }

    changeDom () {
        // 1、使用方式一：字符串（不推荐，后续的更新可能会删除）
        this.refs.titleRef.innerHTML = '字符串2'
        // 2、使用方式二：对象方式
        this.titleRef2.current.innerHTML = '对象2'
        // 3、使用方式三：回调函数
        this.titleFun.innerHTML = '函数2'
    }

    appChange () {
        console.log(this.counterRef, this.counterRef.current)
        this.counterRef.current.increment()
    }
}
