import React, {PureComponent} from 'react';

import Home from '../home'
import Profile from '../profile'

import styled, { ThemeProvider } from 'styled-components'

const HomeButton = styled.button`
  padding: 8px 32px;
  color: orange;
`

// const HomePrimaryButton = styled.button`
//   padding: 8px 32px;
//   color: #ffffff;
//   background: green;
// `

// 继承写法
const HomePrimaryButton = styled(HomeButton)`
  color: #ffffff;
  background: green;
`

export default class App extends PureComponent {
    render () {
        return (
            // 主题共享（查看home里的使用）
            <ThemeProvider theme={{themeColor: 'blue', fontSize: '30px'}}>
                app
                <HomeButton>登录</HomeButton>
                <HomePrimaryButton>主要按钮</HomePrimaryButton>
                <h2>我是app标题</h2>
                <Home/>
                <Profile/>
            </ThemeProvider>
        );
    }
}
