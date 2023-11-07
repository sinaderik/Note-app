import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props){
        super(props);
        this.deleteNote=this.deleteNote.bind(this);
    }
    deleteNote(){
        this.props.remove(this.props.id)    
    }
    render() {
        let { id, title, color } = this.props
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: color }}>
                <button onClick={this.deleteNote} className='delete-note'>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <hr />
                <p className="card-text p-3">{title}</p>
            </div>
        )
    }
}
