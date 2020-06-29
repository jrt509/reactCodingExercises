import React, { Component } from 'react'

export default class Clock extends Component {
    
    constructor(props) {
        super(props)
            this.state = {
                time: new Date()
        }
    }
    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount() {
        setInterval(() => this.currentTime(),1000)
    }
   
    render() {
        return (
            <div className='clock'>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                
            </div>
        )
    }
}