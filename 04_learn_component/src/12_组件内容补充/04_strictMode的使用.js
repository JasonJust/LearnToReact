import React, {PureComponent, StrictMode} from 'react';

class Home extends PureComponent {
    // UNSAFE_componentWillMount() {
    //     console.log('Home componentWillMount')
    // }

    constructor(props) {
        super(props);

        console.log('Home constructor')
    }

    render () {
        return (
            <div ref='title'>
                Home
            </div>
        );
    }
}

class Profile extends PureComponent {
    // UNSAFE_componentWillMount() {
    //     console.log('Profile componentWillMount')
    // }

    constructor(props) {
        super(props);

        console.log('Profile constructor')
    }
    render () {
        return (
            <div>
                Profile
            </div>
        );
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <StrictMode>
                    <Home/>
                </StrictMode>
                <Profile/>
            </div>
        );
    }
}
