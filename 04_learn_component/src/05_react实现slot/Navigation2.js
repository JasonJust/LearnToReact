import React, { Component } from 'react';

export default class Navigation2 extends Component {
    render () {
        const { leftSlot, centerSlot, rightSlot } = this.props
        return (
            <div className={'nav-container'}>
                <div className={'nav-left'}>{leftSlot}</div>
                <div className={'nav-center'}>{centerSlot}</div>
                <div className={'nav-right'}>{rightSlot}</div>
            </div>
        );
    }
}
