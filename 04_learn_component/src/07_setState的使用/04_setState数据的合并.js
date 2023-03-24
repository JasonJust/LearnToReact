import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            message: '这是信息',
            name: 'JasonJust'
        }
    }
    render () {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        );
    }

    changeText () {
        this.setState({
            message: 'Hi~Just.'
        })
    }

    // Object.assign({}, this.state, { message: 'Hi~Just.' })
}
