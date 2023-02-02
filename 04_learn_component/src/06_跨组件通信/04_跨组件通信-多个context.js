import React, { Component } from 'react';

// 创建context对象(此处放置默认数据)
const UserContext = React.createContext({
    userName: 'dada',
    userSex: '女1',
    userAge: 8
})

const ThemeContext = React.createContext({
    color: 'orange',
    background: '#f0f0f0',
    borderColor: '#999999'
})

function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme => {
                                    return (
                                        <div>
                                            <h2 style={{color: theme.color}}>用户：{value.userName}</h2>
                                            <h2>性别：{value.userSex}</h2>
                                            <h2>年龄：{value.userAge}</h2>
                                            <h2>颜色：{theme.color}</h2>
                                            <h2>背景色：{theme.background}</h2>
                                            <h2>边框色：{theme.borderColor}</h2>
                                        </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

// attributes expand
function Profile() {
    return (
        <div>
            <ProfileHeader/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'JasonJust',
            userSex: '女',
            userAge: '22',
            color: 'red',
            background: '#999999',
            borderColor: '#333333'
        }
    }
    render () {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <ThemeContext.Provider value={this.state}>
                        <Profile/>
                    </ThemeContext.Provider>
                </UserContext.Provider>
                <Profile/>
            </div>
        );
    }
}
