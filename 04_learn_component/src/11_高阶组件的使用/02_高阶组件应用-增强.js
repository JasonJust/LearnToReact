import React, { PureComponent } from 'react';

// 定义高阶组件
function enhanceRegionProps (WrapperComponent) {
    return props => {
        return <WrapperComponent {...props} region='China'/>
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

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

class App extends PureComponent {
    render () {
        return (
            <div>
                App：<EnhanceHome userName='JasonJust' age={18}/>
                     <EnhanceAbout userName='Just' age={22}/>
            </div>
        );
    }
}

export default App
