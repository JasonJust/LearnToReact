import React, {PureComponent} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            color: 'green'
        }
    }

    render () {
        const pStyle = {
            color: this.state.color,
            textDecoration: 'underline'
        }

        return (
            <div>
                <h2 style={{fontSize: '62px', color: 'orange'}}>我是标题</h2>
                <p style={pStyle}>p元素</p>
                <button onClick={e => this.changeStyle()}>改变p元素样式</button>
            </div>
        );
    }

    changeStyle () {
        this.setState({
            color: 'blue'
        })
    }
}
