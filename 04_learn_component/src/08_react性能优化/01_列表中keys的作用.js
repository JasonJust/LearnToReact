import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
           books: ['西游记', '红楼梦', '水浒传', '三国演义', '凉生', '偷偷藏不住', '难哄', '星动烟火']
        }
    }
    render () {
        const { books } = this.state
        return (
            <div>
                <h2>图书列表：</h2>
                <ul>
                    {
                        books.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={e => this.insertBook()}>添加书籍</button>
            </div>
        );
    }
    insertBook () {
        // this.setState({
        //     books: [...this.state.books, '恃宠而骄']
        // })
        this.setState({
            books: ['恃宠而骄', ...this.state.books]
        })
    }
}
