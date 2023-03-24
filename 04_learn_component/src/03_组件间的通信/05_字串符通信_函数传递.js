import React, { Component } from 'react';

class CounterButton extends Component {
    render() {
        const { increment } = this.props

        return <button onClick={increment}>+1</button>
    }

}

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }
    render () {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+</button>
                {/*方法一*/}
                {/*<CounterButton increment={this.increment.bind(this)}/>*/}
                {/*方法二*/}
                {/*<CounterButton increment={this.increment}/>*/}
                {/*方法三*/}
                <CounterButton increment={e => this.increment()}/>
            </div>
        );
    }

    // 方法二
    // increment = () => {
    //     console.log('函数调用')
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    increment () {
        console.log('函数调用')
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
