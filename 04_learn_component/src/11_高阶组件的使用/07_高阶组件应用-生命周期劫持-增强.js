import React, {PureComponent} from 'react';

function withRenderTime(WrapperComponent) {
    return class extends PureComponent {
        // 即将渲染获取一个时间 beginTime
        UNSAFE_componentWillMount() {
            this.beginTime = Date.now()
        }

        // 渲染完成再获取一个时间 endTime
        componentDidMount () {
            this.endTime = Date.now()
            const result = this.endTime - this.beginTime
            console.log(`${WrapperComponent.name}渲染时间：${result}`)
        }

        render () {
            return (
                <div>
                    <WrapperComponent {...this.props}/>
                </div>
            )
        }
    }
}

class Home extends PureComponent {
    render () {
        return (
            <div>
                Home
            </div>
        );
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

class Person {

}

console.log(Person.name, About.name)

const WithHome = withRenderTime(Home)
const WithAbout = withRenderTime(About)

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <WithHome/>
                <WithAbout/>
            </div>
        );
    }
}
