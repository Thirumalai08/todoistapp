import { Button, Container, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

function EditItems(props){
    // state for current user for edit operation
    const [note,setNote] = useState(props.currentNote)
    // on change
    const handleInputChange = (event) => {
        const {name,value} = event.target
        setNote({ ...note,[name]: value })
    }
    // here useEffect for fetching the current note data
    useEffect(()=>{
        setNote(props.currentNote)
    },[props])
    // function for update the note
    const handleUpdate = (event) => {
        event.preventDefault()
        props.updateNote(note.id,note)
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
                    onChange={handleInputChange} 
                    variant="outlined" /><br />
                    {/* Content Input */}
                    <TextField style={{marginTop:"10px",width:"50%"}} id="outlined-multiline-static" 
                    label="Content" 
                    multiline rows={4}
                    name="content"
                    value={note.content}
                    onChange={handleInputChange} 
                    variant="outlined" /><br />
                        
                    <Button style={{fontWeight:"bold",border:"2px solid",marginTop:"10px"}} 
                    variant="outlined"
                    onClick={handleUpdate} 
                    color="primary">Update Notes</Button>
                    <Button style={{fontWeight:"bold",border:"2px solid #333",marginTop:"10px",color:"#333",marginLeft:"20px"}} 
                    variant="outlined"
                    onClick={()=>props.setEditing(false)} 
                    color="primary">Cancel</Button>

                </form>
            </Container>
        </div>
    )
}
export default EditItems