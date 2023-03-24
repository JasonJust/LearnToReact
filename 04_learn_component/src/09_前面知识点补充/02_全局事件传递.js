import React, {PureComponent} from 'react';
import { EventEmitter } from 'events'

// 事件总线：event bus
const eventBus = new EventEmitter()

class Home extends PureComponent {
    // 添加事件监听
    componentDidMount () {
        eventBus.addListener('say', this.handleSay)
    }

    // 取消事件监听
    componentWillUnmount () {
        eventBus.removeListener('say', this.handleSay)
    }

    handleSay (message, num) {
        console.log(message, num)
    }

    render () {
        return (
            <div>
                Home
            </div>
        );
    }
}

class Profile extends PureComponent {
    render () {
        return (
            <div>
                Profile
                <button onClick={e => this.sendMessage()}>发消息</button>
            </div>
        );
    }

    sendMessage () {
        eventBus.emit('say', 'Hello', 111)
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        );
    }
}
