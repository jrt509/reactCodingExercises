import React, { Component } from 'react'

export default class IncreaseDecrease extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="pixelCounter">
                <input type="text"></input>
                <button type="btn">Bigger</button>
                <button type="btn">Smaller</button>

            </div>
        )
    }
}