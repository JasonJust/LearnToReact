import React, { Component } from 'react';
import propTypes from 'prop-types'

export default class TabControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    render () {
        const { titles } = this.props
        const { tabIndex } = this.state
        return (
            <div className='tab-control'>
                {
                    titles.map((item, index) => {
                       return (
                           <div key={item}
                                className={ 'tab-item ' + ( tabIndex === index ? 'tab-item-active' : '') }
                                onClick={e => this.tabClick(index)}>
                               <span>{item}</span>
                           </div>
                       )
                    })
                }
            </div>
        );
    }

    tabClick (index) {
        this.setState({
            tabIndex: index
        })
        const { tabClick } = this.props
        tabClick(index)
    }
}

TabControl.propTypes = {
    titles: propTypes.array.isRequired
}
