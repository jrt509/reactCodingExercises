import React, { Component } from 'react'

export default class UpDown extends Component {
    
    constructor() {
        super()

        this.state  = {
            counter: 0
        }
        this.increaseNumber = this.increaseNumber.bind(this);
        this.decreaseNumber = this.decreaseNumber.bind(this);
    }
        increaseNumber() {
            this.setState({
                counter: this.state.counter + 1
            })
        };
        decreaseNumber() {
            this.setState({
                counter: this.state.counter - 1
            })
        };
    

    render() {
        return (
            <div className="numberCounter">
                <button className="increase" onClick={() => this.increaseNumber()}>Up</button>
                {this.state.counter}
                <button className="decrease" onClick={() => this.decreaseNumber()}>Down</button>
            </div>
        )
    }
}