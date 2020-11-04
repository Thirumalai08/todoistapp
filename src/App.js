import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import AddItems from './Screens/AddItems'
import EditItems from './Screens/EditItems'
import ViewItems from './Screens/ViewItems'

function App(){
    //initial data for notes
    const contentData = [
        {id:1,title:'Content One',content:'Content about title one'},
        {id:2,title:'Content Two',content:'Content about title two'},
        {id:3,title:'Content Three',content:'Content about title three'}
    ]
    // initial form state
    const initialFormState = {id: null, title:'',content:''}
    // state for notes
    const [notes,setNotes] = useState(contentData)
    // state for editing for default keep the mode in false
    const [editing,setEditing] = useState(false)
    // state for current note who is doing the operation
    const [currentNote,setCurrentNote] = useState(initialFormState)
    // addNotes function
    const addNote = (note) => {
        note.id = notes.length + 1
        setNotes([...notes,note])
    }
    // delNotes Function
    const delNote = (id) => {
        setNotes(notes.filter((note)=>note.id !== id))
    }
    // edit note function
    const editCurrentNote = (note) => {
        setEditing(true)
        setCurrentNote({id:note.id,title:note.title,content:note.content})
    }
    // update note function
    const updateNote = (id,updatedNote) => {
        setEditing(false)
        setNotes(notes.map((note)=>(
            note.id === id ? updatedNote : note
        )))
    }
    return(
        <div>
            <Container fixed>
            <h2>Todoist App</h2>
            <div>
            {/* 1 
            <div>
                <h3>Add New Task</h3>
                <AddItems addNote={addNote} />
            </div> */}
                {editing ? (
                    <div>
                        <h3>Edit Notes</h3>
                        <EditItems setEditing={setEditing} currentNote={currentNote} updateNote={updateNote} />
                    </div>
                ) : (
                    <div>
                        <h3>Add New Notes</h3>
                        <AddItems addNote={addNote} />
                    </div>
                )}
            {/*<EditItems />*/}
            {/* 2 */}
            <div>
                <h3>View Notes</h3>
                <ViewItems notes={notes} delNote={delNote} editCurrentNote={editCurrentNote} />
            </div>
            </div>
            </Container>
        </div>
    )
}
export default App