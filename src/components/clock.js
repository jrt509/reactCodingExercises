import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='clock'>
                <button type="btn">Clock</button>
            </div>
        )
    }
}