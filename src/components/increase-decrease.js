import React, { Component } from 'react'

export default class IncreaseDecrease extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 20,
            inputNumber: 1
        
        }
        this.pixelIncrementer = this.pixelIncrementer.bind(this);
        this.pixelDecrementer = this.pixelDecrementer.bind(this);
        this.inputChanger = this.inputChanger.bind(this);
       
    }
    inputChanger(e) {
        this.setState({
            inputNumber: parseInt(e.target.value)
        })
    }
    pixelIncrementer() {
        this.setState({
    
            number: this.state.number + 1
        })
    }
    
    pixelDecrementer() {
        this.setState({
            number: this.state.number - 1
        })
    }
    

    render() {
        return (
            <div className="pixelCounter" style={{ fontSize: this.state.number }}>
               {this.state.number}px
               <div>
                <input type="text" value={this.state.inputNumber} onChange={() => this.inputChanger(e)}></input>
                <button onClick={this.pixelIncrementer}>Bigger</button>
                <button onClick={this.pixelDecrementer}>Smaller</button>
                </div>
            </div>
        )
    }
}