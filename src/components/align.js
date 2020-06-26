import React, { Component } from 'react'

export default class Align extends Component {
    constructor(props) {
        super(props)

        this.state = {
        //    leftBtn: "align-items-left",
        //    centerBtn: "align-items-center",
        //    rightBtn: "align-itmes-right" 
        }
    }

    render() {
        return (
            <div className="align">
                <div className="align-text">
                    Align Me!
                </div>
                <div className="btn">
                    <button>Left</button>
                    <button>Center</button>
                    <button>Right</button>
                </div>
            </div>
        )
    }
}