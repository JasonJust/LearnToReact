import React, { Component } from 'react';
import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";

export default class App extends Component {
    render () {
        return (
            <div>
                <Navigation>
                    <div>12</div>
                    <span>12</span>
                    <a href='/#'>12</a>
                </Navigation>
                <Navigation2 leftSlot={<span>11</span>}
                             centerSlot={<a href='/#'>22</a>}
                             rightSlot={<div>33</div>}/>

                https://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@github.com/JasonJust/LearnToReact.git
                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
            </div>
        );
    }
}
