import React, {PureComponent} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            yanzheng: ''
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {/*htmlFor：点击label可以实现输入框聚焦*/}
                    <div>
                        <label htmlFor="userName">
                            用户名：
                            {/*受控组件*/}
                            <input type="text"
                                   id="userName"
                                   name='userName'
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.userName}/>
                        </label>
                    </div>
                    <label htmlFor="password">
                        密&nbsp;&nbsp;&nbsp;码：<input type="password"
                                                    id="password"
                                                    onChange={e => this.handleChange(e, 'password')}
                                                    value={this.state.password}/>
                    </label>
                    <br/>
                    <label htmlFor="yanzheng">
                        验证码：
                        {/*受控组件*/}
                        <input type="text"
                               id="yanzheng"
                               onChange={e => this.handleChange(e, 'yanzheng')}
                               value={this.state.yanzheng}/>
                    </label>
                    <br/>
                    <input type="submit" value="登录"></input>
                </form>
            </div>
        );
    }

    handleChange (event, type) {
        if (type) {
            this.setState({
                [type]: event.target.value
            })
        } else {
            this.setState({
                // 计算属性名
                [event.target.name]: event.target.value
            })
        }
    }

    handleSubmit (event) {
        // 取消默认行为
        event.preventDefault()
        console.log('提交', this.state)
    }

    // handleUserName (event) {
    //     this.setState({
    //         userName: event.target.value
    //     })
    // }
    //
    // handlePassword (event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    //
    // handleYanZheng (event) {
    //     this.setState({
    //         yanzheng: event.target.value
    //     })
    // }
}
