import React, {PureComponent} from 'react';
import styled from 'styled-components'

/**
 * 特点：
 * 1、props穿透
 * 2、attrs的使用 ${箭头函数}
 * 3、传入state作为props的属性
 */
const ProfileInput = styled.input.attrs({
    placeholder: '请输入...',
    bColor: 'red'// 这里的属性一般是写死的属性
})`
  background: antiquewhite;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            color: 'blue'
        }
    }

    render () {
        return (
            <div>
                Profile
                <ProfileInput type='text'/>
                <ProfileInput type='password' color={this.state.color}/>
                <h2>是profile的标题</h2>
                <div>
                    <span>轮播</span>
                </div>
            </div>
        );
    }
}
