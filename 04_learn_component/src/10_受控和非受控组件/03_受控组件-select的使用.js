import React, {PureComponent} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            book: 'toutoucangbuzhu'
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {/*htmlFor：点击label可以实现输入框聚焦*/}
                    <select name="books" onChange={e => this.changeBook(e)} value={this.state.book}>
                        <option value="xingdongyanhuo">星动烟火</option>
                        <option value="toutoucangbuzhu">偷偷藏不住</option>
                        <option value="nanhong">难哄</option>
                        <option value="shiguweiqing">蚀骨危情</option>
                    </select>
                    <input type="submit" value="提交"></input>
                </form>
            </div>
        );
    }

    handleSubmit (event) {
        // 取消默认行为
        event.preventDefault()
        console.log('提交', this.state)
    }

    changeBook (event) {
        console.log(event)
        console.log(event.target.value)
        this.setState({
            book: event.target.value
        })
    }
}
