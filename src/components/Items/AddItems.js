import axios from 'axios'
import React, { useState } from 'react'

function AddItems(){
    // Base url
    const BASE_URL = "https://crudcrud.com/api/a75a7d00af9f4a788bec1e034f2545af/todos"
    // initial form state
    const initialFormState = {
        title: '',
        content: ''
    }
    // state for todo to add
    const [todo,setTodo] = useState(initialFormState)
    // on change event
    const inputChange = (event) => {
        const {name,value} = event.target
        setTodo({...todo,[name]:value})
    }
    const handleClick = async(event) => {
        event.preventDefault()
        if(!todo.title || !todo.content) {
            return alert('Enter All Fields!!!')
        }
        const info = {
            title: todo.title,
            content: todo.content
        }
        console.log(info)
        const result = await axios.post(`${BASE_URL}`,info)
        console.log(result.data)
        setTodo(initialFormState)
    }
    return(
        <div>
            <h2>Add New Items</h2>
            <input type="text" placeholder="Enter title"
            name="title"
            value={todo.title}
            onChange={inputChange}  /><br />
            <input type="text" placeholder="Enter content"
            name="content"
            value={todo.content}
            onChange={inputChange} /><br />
            <button onClick={handleClick}>Add New Items</button>
        </div>
    )
}
export default AddItems