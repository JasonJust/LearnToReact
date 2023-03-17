import React, {PureComponent} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            names: ['Jaon', 'Just', '大大']
        }
    }

    render () {
        return (
            <TransitionGroup>
                {
                    this.state.names.map((i, index) => {
                        return(
                            // 此处的key用index会有问题
                            <CSSTransition key={i}
                                           timeout={500}
                                           classNames='item'>
                                <div>
                                    {i}<button onClick={e => this.decrement(index)}>-</button>
                                </div>
                            </CSSTransition>
                        )
                    })
                }
                <button onClick={e => this.addName()}>添加名字</button>
            </TransitionGroup>
        );
    }

    addName () {
        this.setState({
            names: [...this.state.names, '12' + this.state.names.length]
        })
    }

    decrement (index) {
        this.setState({
            names: this.state.names.filter((i, indey) => {
                return indey !== index
            })
        })
    }
}
