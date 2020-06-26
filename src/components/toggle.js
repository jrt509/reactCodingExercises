import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hide: false,
            
        }
    }

    hideOnClick() {
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        return (
            <div className="toggle">
                <div>
                {!this.state.hide && this.props.text}
                </div>
                <button onClick={() => this.hideOnClick()}>Hide</button>
               
            </div>

        )
    }
}