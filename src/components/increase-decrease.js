import React, { Component } from 'react'

export default class IncreaseDecrease extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 20,
            counter: 0,
        
        }
        this.pixelIncrementer = this.pixelIncrementer.bind(this);
        this.pixelDecrementer = this.pixelDecrementer.bind(this);
       
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
                <button onClick={this.pixelIncrementer}>Bigger</button>
                <button onClick={this.pixelDecrementer}>Smaller</button>
                </div>
            </div>
        )
    }
}