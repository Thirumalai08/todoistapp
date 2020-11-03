import React, { useState } from 'react'

function AddTodos(props){
    // initial State
    const initialFormState = {
        id: null,
        name: '',
        username: ''
    }
    // state for user
    const [user,setUser] = useState(initialFormState)
    const inputChange = (event) => {
        const {name,value} = event.target
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!user.name || !user.username) { return alert('Enter all Fields') }
        props.addUser(user)
        setUser(initialFormState)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={inputChange} /><br />
                <label>UserName</label>
                <input type="text" name="username" value={user.username} onChange={inputChange} /><br />
                <button>Add New User</button>
            </form>
        </div>
    )
}
export default AddTodos