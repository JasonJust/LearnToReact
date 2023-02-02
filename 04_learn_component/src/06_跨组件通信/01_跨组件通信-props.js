import React, { Component } from 'react';

function ProfileHeader(props) {
    const { userName, userSex, userAge } = props
    return (
        <div>
            <h2>用户：{userName}</h2>
            <h2>性别：{userSex}</h2>
            <h2>年龄：{userAge}</h2>
        </div>
    )
}

// attributes expand
function Profile(props) {
    return (
        <div>
            {/*<ProfileHeader userName={props.userName} userSex={props.userSex} userAge={props.userAge}/>*/}
            <ProfileHeader {...props}/>
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
            userAge: '22'
        }
    }
    render () {
        // const { userName, userSex, userAge } = this.state
        return (
            <div>
                {/*<Profile userName={userName} userSex={userSex} userAge={userAge}/>*/}
                <Profile {...this.state}/>
            </div>
        );
    }
}
