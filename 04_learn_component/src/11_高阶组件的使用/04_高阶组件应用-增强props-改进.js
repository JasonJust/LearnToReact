import React, { PureComponent, createContext } from 'react';

// 创建context
const UserContext = createContext({
    userName: 'JasonJust',
    age: 18,
    region: 'China'
})

// 定义高阶组件
function withUser (WrapperComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrapperComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class Home extends PureComponent{
    render() {
        return <h2>Home：{`姓名：${this.props.userName}，年龄：${this.props.age}，区域：${this.props.region ? this.props.region : '暂无'}`}</h2>
    }
}

class About extends PureComponent{
    render() {
        return <h2>About：{`姓名：${this.props.userName}，年龄：${this.props.age}，区域：${this.props.region ? this.props.region : '暂无'}`}</h2>
    }
}

class Details extends PureComponent{
    render() {
        return (
            <ul>
                <li>姓名：{this.props.userName}</li>
                <li>年龄：{this.props.age}</li>
                <li>区域：{this.props.region}</li>
            </ul>
        )
    }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetails = withUser(Details)

class App extends PureComponent {
    render () {
        return (
            <div>
                App：
                <UserContext.Provider value={{userName: 'Just', age: 22, region: '中国'}}>
                    <UserHome/>
                    <UserAbout/>
                    <UserDetails/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App
