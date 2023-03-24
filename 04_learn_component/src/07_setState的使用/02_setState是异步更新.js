import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            message: '这是信息'
        }
    }
    render () {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 方式二：获取异步更新后的state
        console.log(this.state.message)
    }

    increment () {
        // setState是异步更新
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // console.log(this.state.counter)

        // 方式一：获取异步更新后的数据
        // setState(更新的state, 回调函数)
        this.setState({
            message: 'Hi~Just.'
        }, () => {
            console.log(this.state.message)
        })
    }
}
