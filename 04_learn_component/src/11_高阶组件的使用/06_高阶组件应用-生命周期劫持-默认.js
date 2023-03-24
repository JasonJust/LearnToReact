import React, {PureComponent} from 'react';

class Home extends PureComponent {

    // 即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
        this.beginTime = Date.now()
        console.log(this.beginTime)
    }

    render () {
        return (
            <div>
                Home
            </div>
        );
    }

    // 渲染完成再获取一个时间 endTime
    componentDidMount () {
        this.endTime = Date.now()
        console.log(this.endTime)
        const result = this.endTime - this.beginTime
        console.log(`Home渲染时间：${result}`)
    }
}

class About extends PureComponent {
    render () {
        return (
            <div>
                About
            </div>
        );
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        );
    }
}
