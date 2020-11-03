
import { useState } from 'react';
import './App.css';
import AddTodos from './View/AddTodos';
import EditTodos from './View/EditTodos';
import Todos from './View/Todos';


function App() {
  // initial data for users
  const usersData = [
    {id:1,name:'Arvind',username:'Arvind08'},
    {id:2,name:'Nambi',username:'Nambi08'},
    {id:3,name:'Thirumalai',username:'Thiru08'},
    {id:4,name:'Iradhi',username:'Iradhi28'}
  ]
  // initial form state
  const initialFormState = { id: null, name: '', username: '' }
  // state for users
  const [users,setUsers] = useState(usersData)
  // state for editing for default keep the mode in false
  const [editing,setEditing] = useState(false)
  // state for user who is doing current edit operation
  const [currentUser,setCurrentUser] = useState(initialFormState)
  // adduser function
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users,user])
  }
  // deluser function
  const delUser = (id) => {
    setUsers(users.filter((user)=>user.id !== id))
  }
  // edituser function
  const editCurrentUser = (user) => {
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  // update user function
  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  return(
    <div>
      <h2>Todoist App</h2>
      <div>
        {editing ? (
          <div>
          <h3>Edit User</h3>
          <EditTodos setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
          </div>
        ) : (
          <div>
          <h3>Add User</h3>
          <AddTodos addUser={addUser} />
          </div>
        )}
      </div>
      <div>
        <h3>View Users</h3>
        <Todos users={users} delUser={delUser} editCurrentUser={editCurrentUser} />
      </div>
    </div>
  )
  }
export default App;
