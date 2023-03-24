import React, { PureComponent, createContext } from 'react';

// 定义高阶组件

// 创建context
const UserContext = createContext({
    userName: 'JasonJust',
    age: 18,
    region: 'China'
})

class Home extends PureComponent{
    render() {
        // console.log(this.context)
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <h2>Home：{`姓名：${user.userName}，年龄：${user.age}，区域：${user.region ? user.region : '暂无'}`}</h2>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

// Home.contextType = UserContext

class About extends PureComponent{
    render() {
        // return <h2>About：{`姓名：${this.props.userName}，年龄：${this.props.age}，区域：${this.props.region ? this.props.region : '暂无'}`}</h2>
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <h2>About：{`姓名：${user.userName}，年龄：${user.age}，区域：${user.region ? user.region : '暂无'}`}</h2>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class App extends PureComponent {
    render () {
        return (
            <div>
                App：
                <UserContext.Provider value={{userName: 'Just', age: 22, region: '中国'}}>
                    <Home/>
                    <About/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App
