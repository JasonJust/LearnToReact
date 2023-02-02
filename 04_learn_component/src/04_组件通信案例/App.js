import React, { Component } from 'react';
import TabControl from "./TabControl";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: ['新款', '精选', '流行'],
            tabIndex: 0,
            tabTitle: '新款'
        }
    }
    render () {
        const { titles, tabTitle } = this.state
        return (
            <div>
                <TabControl tabClick={ index => this.tabClick(index)} titles={ titles }/>
                <div>
                    <span className='hight'>{ tabTitle }</span>
                    商品（product）
                </div>
            </div>
        );
    }

    tabClick (index) {
        this.setState({
            tabIndex: index,
            tabTitle: this.state.titles[index]
        })
    }
}
