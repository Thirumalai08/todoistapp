import { Accordion, AccordionDetails, AccordionSummary, Button, Container, FormControlLabel, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'

function ViewItems(props){
    return(
        <div style={{marginTop:"30px"}}>
            <Container fixed>
                {props.notes.length > 0 ? (
                    props.notes.map((note)=>(
                        <Accordion key={note.id}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Typography>{note.title}</Typography>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {note.content}
                                </Typography>
                                <DeleteIcon style={{cursor:"pointer"}} onClick={()=>props.delNote(note.id)} />
                                <EditIcon style={{cursor:"pointer"}} onClick={()=>props.editCurrentNote(note)} />
                            </AccordionDetails>        
                        </Accordion>
                    ))
                ) : (
                    <Accordion>
                        <AccordionDetails>
                        <Typography>
                            No notes Add new to view here
                        </Typography>
                    </AccordionDetails>    
                    </Accordion>    
                )} 
                {/*<Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography>Accordian 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Text Content 1
                        </Typography>
                    </AccordionDetails>
                </Accordion>*/}
                {/*<Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography>Accordian 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Text Content 2
                        </Typography>
                    </AccordionDetails>
                </Accordion>*/}
            </Container>
        </div>
    )
}
export default ViewItems