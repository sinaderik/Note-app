import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }

        this.addNote = this.addNote.bind(this);
        this.cleanInput = this.cleanInput.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.handelInputColor = this.handelInputColor.bind(this);
        this.noteTitleHandler = this.noteTitleHandler.bind(this);
    }

    addNote() {
        let previousNotes = this.state.notes;
        let newNote = {
            id: previousNotes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor
        }
        this.setState((perviousItems) => ({
            notes: [...perviousItems.notes, newNote],
            noteTitle: "",
        }))
    }

    removeNote(id) {
        let previousNotes = this.state.notes;
        let updatedNoteList = previousNotes.filter((note) => {
            return note.id != id;
        })
        this.setState({ notes: updatedNoteList })

    }
    handelInputColor(color) {
        this.setState({ inputColor: color })
    }

    noteTitleHandler(inputText) {
        this.setState({ noteTitle: inputText })
    }

    cleanInput() {
        this.setState({ noteTitle: "" })
    }

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        {/* <input id="input-field" className="form-control" onChange={(event) => this.noteTitleHandler(event.target.value)} value={this.state.noteTitle} type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." /> */}
                                        <textarea id="input-field" className="form-control" onChange={(event) => this.noteTitleHandler(event.target.value)} value={this.state.noteTitle} type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." rows="10" cols="50">

                                        </textarea>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {
                                                this.state.colors.map((color, index) => {
                                                    return (
                                                        <ColorBox key={index} handelColor={this.handelInputColor} color={color} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button onClick={this.addNote} id="btn-save" type="button" className="btn btn-outline-info"><span className="fa fa-plus" ></span></button>
                                        <button onClick={this.cleanInput} id="btn-delete" type="button" className="btn btn-outline-danger"><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {
                                                    this.state.notes.map((note) => {
                                                        return (
                                                            <Note key={note.id} remove={this.removeNote} {...note} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
