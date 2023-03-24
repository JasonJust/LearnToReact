import React, {PureComponent} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {/*htmlFor：点击label可以实现输入框聚焦*/}
                    <label htmlFor="userName">
                        用户名：
                        {/*受控组件*/}
                        <input type="text"
                                   id="userName"
                                   onChange={e => this.handleUserName(e)}
                                   value={this.state.userName}/>
                    </label>
                    <br/>
                    <label htmlFor="password">
                        密&nbsp;&nbsp;&nbsp;码：<input type="password"
                                                    id="password"
                                                    onChange={e => this.handlePassword(e)}
                                                    value={this.state.password}/>
                    </label>
                    <br/>
                    <input type="submit" value="登录"></input>
                </form>
            </div>
        );
    }

    handleSubmit (event) {
        // 取消默认行为
        event.preventDefault()
        console.log('提交', this.state)
    }

    handleUserName (event) {
        this.setState({
            userName: event.target.value
        })
    }

    handlePassword (event) {
        this.setState({
            password: event.target.value
        })
    }
}
