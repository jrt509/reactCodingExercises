import React, { Component } from 'react'

export default class Color extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "Color Me",
            color: "black",
            textChange: "Color Me",
            colorChange: "black"
        }
        this.handleButtonClick =this.handleButtonClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleButtonClick() {
        this.setState({
             colorChange: this.state.color,
             textChange: this.state.text
        })
    }
    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    handleColorChange(e) {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        return (
            <div className="colorChanger">
                <div style={{color: this.state.colorChange}}>
                {this.state.textChange}
                </div>
                <input type="text" onChange={this.handleColorChange} value={this.state.color}></input>
                <input type="text" onChange={this.handleTextChange} value={this.state.text}></input>
                <button type="button" onClick={this.handleButtonClick}>Submit</button>
            </div>
        )
    }
}