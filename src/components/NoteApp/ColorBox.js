import React, { Component } from 'react'

export default class ColorBox extends Component {
    constructor(props){
        super(props)
        this.changeInputColor=this.changeInputColor.bind(this)
    }
    changeInputColor(){
        this.props.handelColor(this.props.color)
    }
    render() {
        let {color}=this.props
        return (
            <div onClick={this.changeInputColor} className='color-box' style={{backgroundColor: color}}>
                
            </div>
        )
    }
}
