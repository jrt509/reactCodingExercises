import React, { Component } from 'react'

export default class Align extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text:"left"
              

        }
        this.changeText = this.changeText.bind(this)
    }
    changeText(newText) {
        this.setState({
           text: newText 
        })
    }
    
    render() {
        return (
            <div className="align-wrapper">
                <h3 style={{ textAlign: this.state.text}}>Align Me!</h3>
                <div className="btn">
                    <button onClick={() => this.changeText("left")}>Left</button>
                    <button onClick={() => this.changeText("center")}>Center</button>
                    <button onClick={() => this.changeText("right")}>Right</button>
                </div>
            </div>
        )
    }
}