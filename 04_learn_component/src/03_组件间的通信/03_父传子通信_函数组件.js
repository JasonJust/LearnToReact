import React, { Component } from 'react';

function ChildCpn (props) {
    const { name, age, hight } = props
    return (
        <div>
            <h2>子组件展示：{name + '  ' + age + '  ' + hight}</h2>
        </div>
    )
}

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Jason',
            age: 18,
            hight: 1.90
        }
    }

    render () {
        return (
            <div>
                <ChildCpn name={this.state.name} age={this.state.age} hight={this.state.hight}/>
                <ChildCpn name="大大" age="16" hight="1.88"/>
            </div>
        );
    }
}
