import React, { Component } from 'react'

export default class Color extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="colorChanger">
                <button type="btn">Color me</button>
                <button type="btn">Change text</button>
                <button type="btn">Submit</button>
            </div>
        )
    }
}