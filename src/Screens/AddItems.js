import { Button, Container, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function AddItems(props){
    // initial form state
    const initialFormState = {
        id: null,
        title: '',
        content: ''
    }
    // state for notes
    const [note,setNote] = useState(initialFormState)
    // onchange event
    const inputChange = (event) => {
        const {name,value} = event.target
        setNote({...note,[name]:value})
    }
    // handle submission event
    const handleSubmit = (event) => {
        event.preventDefault()
        // error validation
        if(!note.title || !note.content) {
            return alert('Enter all fields')
        }
        props.addNote(note)
        setNote(initialFormState)
    }
    return(
        <div style={{marginTop:"20px"}}>
            <Container fixed>
                <form>
                    {/* Title Input */}
                    <TextField style={{width:"50%"}} id="outlined-size-small" 
                    label="Title" 
                    size="small" 
                    name="title"
                    value={note.title}
                    onChange={inputChange}
                    variant="outlined" /><br />
                    {/* Content Input */}
                    <TextField style={{marginTop:"10px",width:"50%"}} id="outlined-multiline-static" 
                    label="Content" 
                    multiline rows={4} 
                    name="content"
                    value={note.content}
                    onChange={inputChange}
                    variant="outlined" /><br />
                        
                    <Button style={{fontWeight:"bold",border:"2px solid",marginTop:"10px"}} 
                    onClick={handleSubmit}
                    variant="outlined" 
                    color="primary">Add Notes</Button>
                </form>
            </Container>
        </div>
    )
}
export default AddItems