import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetItems(){
    const BASE_URL = "https://crudcrud.com/api/a75a7d00af9f4a788bec1e034f2545af/todos"
    // state for todos
    const [todos,setTodos] = useState([])
    // useeffect fetching the data from backend...
    useEffect(()=>{
    // function for get data
    const getData = async() => {
        const result = await axios.get(`${BASE_URL}`)
        setTodos(result.data) 
    }
    getData()
    },[])

    return(
        <div>
            <h2>List of Items</h2>
            <ol>
                {todos.length > 0 ? (
                    todos.map((todo)=>(
                        <li key={todo._id}>{todo.title}</li>
                    ))
                ) 
                : (<p>No items in your list</p>)}
            </ol>
        </div>
    )
}
export default GetItems