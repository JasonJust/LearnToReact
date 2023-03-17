import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import './CSSTransition.css'

export default class CSSTransitionDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render () {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={ e => this.changeState() }>{isShow ? 'hidden' : 'show'}</button>
                <br/>
                <br/>
                <CSSTransition in={isShow}
                               classNames='message'
                               timeout={300}
                               unmountOnExit={true}
                               appear
                               onEnter={e => console.log('开始进入')}
                               onEntering={e => console.log('正在进入')}
                               onEntered={e => console.log('进入完成')}
                               onExit={e => console.log('开始退出')}
                               onExiting={e => console.log('退出状态')}
                               onExited={e => console.log('退出完成')}>
                    <Space size="middle">
                        <Badge count={5}>
                            <Avatar shape="square" size="large" />
                        </Badge>
                        <Badge count={0} showZero>
                            <Avatar shape="square" size="large" />
                        </Badge>
                        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                            <Avatar shape="square" size="large" />
                        </Badge>
                    </Space>
                </CSSTransition>
            </div>
        );
    }
    changeState () {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
