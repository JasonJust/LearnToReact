import React, {Component, PureComponent} from 'react';

class App extends Component {
    render () {
        return (
            <div>
                App：{this.props.name}
            </div>
        );
    }
}

// App.displayName = 'JaosnJust' // 重新定义名字

function enhanceComponent (WrapperComponent) {
    // 类组件
    class NewEnhanceComponent extends PureComponent {
        render() {
            return <WrapperComponent {...this.props}/>
        }
    }

    NewEnhanceComponent.displayName = 'Just'

    return NewEnhanceComponent
}

function enhanceComponent2 (WrapperComponent) {
    // 函数式组件
    function NewEnhanceComponent (props) {
        return <WrapperComponent {...props}/>
    }

    NewEnhanceComponent.displayName = 'Just2'

    return NewEnhanceComponent
}

const EnhanceComponent = enhanceComponent2(App)

export default EnhanceComponent
