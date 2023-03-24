import React, {PureComponent, createRef, forwardRef} from 'react';
import reactDom from 'react-dom'

// 高阶组件forwardRef
const Profile = forwardRef(function (props, ref) {
    return <div ref={ref}>Profile</div>
})

class Modal extends PureComponent {
    render () {
        return reactDom.createPortal(this.props.children, document.getElementById('modal'))
    }
}

class Home extends PureComponent {
    render () {
        return (
            <div>
                这是Home
                <Modal>
                    <h2>title</h2>
                </Modal>
            </div>
        );
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.titleRef = createRef()
        this.homeRef = createRef()
        this.profileRef = createRef()
    }

    render () {
        return (
            <div>
                <h2 ref={this.titleRef}>12deh2</h2>
                <Home ref={this.homeRef}/>
                <Profile ref={this.profileRef}/>
                <button onClick={e => this.logRefClick()}>打印 ref</button>
            </div>
        );
    }

    logRefClick () {
        console.log(this.titleRef.current, this.homeRef.current, this.profileRef.current)
    }
}
