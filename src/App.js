import React, { Component } from 'react'
import NoteApp from './components/NoteApp/NoteApp'
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            darkmode: false,
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState({ darkmode: !this.state.darkmode })
    }
    render() {
        return (
            <div className={this.state.darkmode ? "dark-mode" : "light-mode"}>
                <>
                    <br />
                    <button className={this.state.darkmode ? "darkmode-btn" : "lightmode-btn"} onClick={this.changeColor}><i className={this.state.darkmode ? "fa-solid fa-sun" : "fa-regular fa-moon"}></i></button>
                    <br /><br /><br />
                    <div className={this.state.darkmode ? "dark-mode header upper" : "light-mode header upper"} color={this.state.darkmode ? "black" : "white"}>Personal Note App</div>

                    <div className={this.state.darkmode ? "main-text darkmode-text" : "main-text lightmode-text"}>
                        Notes app is used for making short text notes, update when you need them, and trash when you are done. It can be used for various functions as you can add your to-do list in this app, some important notes for future reference, etc. The app is very useful in some cases like when you want quick access to the notes. Likewise, here let’s create an Android App to learn how to create a simple NotesApp. So in this article let’s build a Notes App in which the user can add any data, remove any data as well as edit any data
                    </div>
                    <NoteApp />
                </>
            </div>
        )
    }
}
