import React, { PureComponent, Fragment } from 'react';

export default class Counter extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            counter: 0,
            books: [
                {
                    name: '安徒生童话',
                    price: 18
                },
                {
                    name: '格林日记',
                    price: 20
                },
                {
                    name: '我在人间贩卖黄昏',
                    price: 16
                }
            ]
        }
    }

    render () {
        const { counter } = this.state
        return (
            // <Fragment>
            //     <h2>当前计数：{counter}</h2>
            //     <button onClick={ e => this.increment()}>+1</button>
            // </Fragment>
            // 短语法(不能添加任何属性，如：map的key)
            <>
                <h2>当前计数：{counter}</h2>
                <button onClick={ e => this.increment()}>+1</button>
                <div>
                    {
                        this.state.books.map((i, index) => {
                            return (
                                <Fragment key={index}>
                                    <span>名称：{i.name}</span>
                                    <span>（价格：{i.price}）</span>
                                    <hr/>
                                </Fragment>
                            )
                        })
                    }
                </div>
                {/*<ul>*/}
                {/*    {*/}
                {/*        this.state.books.map((i, index) => {*/}
                {/*            return <li key={index}>*/}
                {/*                <span>名称：{i.name}</span>*/}
                {/*                <span>（价格：{i.price}）</span>*/}
                {/*                <hr/>*/}
                {/*            </li>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}
            </>
        );
    }

    increment () {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
