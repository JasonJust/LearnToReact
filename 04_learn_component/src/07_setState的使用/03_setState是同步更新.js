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
                <h2>{this.state.message}</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
                <button id='btn'>改变文本2</button>
            </div>
        );
    }

    componentDidMount() {
        document.getElementById('btn').addEventListener('click', () => {
            this.setState({
                message: 'Hi~Just.'
            })
            console.log(this.state.message)
        })
    }

    changeText () {
        // 情况1：将setState放入到定时器中
        setTimeout(() => {
            this.setState({
                message: 'Hi~Just.'
            })
            console.log(this.state.message)
        }, 100)
    }
}
