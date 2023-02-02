import React, {PureComponent, createRef} from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.userNameRef = createRef()
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
                               ref={this.userNameRef}/>
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
        console.log('提交', this.userNameRef.current.value)
    }
}
