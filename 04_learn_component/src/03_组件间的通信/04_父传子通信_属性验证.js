import React, { Component } from 'react';
import PropTypes from 'prop-types'

function ChildCpn (props) {
    const { name, age, hight } = props
    const { names } = props
    return (
        <div>
            <h2>子组件展示：{name + '  ' + age + '  ' + hight}</h2>
            <ul>
                {
                    names.map((i) => {
                        return <li>{i}</li>
                    })
                }
            </ul>
        </div>
    )
}

// 类组件也可这样写默认值
class ChildCpnTwo extends Component {
    // ES6中class Fields写法 static：给类添加属性
    static propTypes = {

    }

    static defaultProps = {

    }
}

ChildCpn.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    hight: PropTypes.number,
    names: PropTypes.array
}

ChildCpn.defaultProps = {
    name: '12',
    age: 18,
    height: 18.8,
    names: ['dada', 'da', 'd']
}

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Just',
            age: 20,
            hight: 1.99
        }
    }

    render () {
        return (
            <div>
                <ChildCpn name={this.state.name} age={this.state.age} hight={this.state.hight}/>
                <ChildCpn name="Jason" age={18} hight={1.90} names={['d', 'a', 'c']}/>
                <ChildCpn name="大大" age={16} hight={1.88} names={['1', '2', '3']}/>
            </div>
        );
    }
}
