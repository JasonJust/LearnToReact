import React, { Component } from 'react';

class DeleteTemplate extends Component {
    render() {
        return <h2>我是deleteTemplate</h2>
    }
}

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            isShow: true
        }

        console.log('执行组件的constructor方法')
    }
    render () {
        console.log('执行组件的render方法')
        return (
            <div>
                我是app组件
                <h2>{this.state.counter}</h2>
                <button onClick={e => this.add()}>+</button>
                <hr/>
                <button onClick={e => this.change()}>change</button>
                {this.state.isShow && <DeleteTemplate/>}
            </div>
        );
    }

    add () {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    change () {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    componentDidMount() {
        console.log('执行componentDidMount方法，挂载了')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('执行componentDidUpdate，修改了')
    }
    componentWillUnmount() {
        console.log('调用了deleteTemplate的componentWillUnmount方法，即将卸载deleteTemplate')
    }
}
