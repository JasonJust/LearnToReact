import React, { Component } from 'react';

// 购物车组件
class CartPage extends Component {
    render () {
        return (
            <div style={{display: this.props.isLogin ? 'block' : 'none'}}>
                CartPage
            </div>
        );
    }
}

// 登录组件
class LoginPage extends Component {
    render () {
        return (
            <div>
                <h2>这里是登录页面，请您先登录~</h2>
                <button onClick={e => this.logining()}>登录</button>
            </div>
        );
    }
}

function withUser (WrapperComponent) {
    const newCpn = props => {
        const { isLogin } = props
        if (isLogin) {
            return <WrapperComponent {...props}/>
        } else {
            return <LoginPage/>
        }
    }
    newCpn.displayName = '12'
    return newCpn
}
const UserCard = withUser(CartPage)

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            isLogin: false
        }
    }

    render () {
        return (
            <div>
                <UserCard isLogin={this.state.isLogin}/>
            </div>
        );
    }

    logining () {
        this.setState({
            isLogin: true
        })
    }
}
