import React from 'react'
import AddItems from './Items/AddItems'
import EditItems from './Items/EditItems'
import GetItems from './Items/GetItems'

function Main(){
    return(
        <div>
            <h1>Main Component</h1>
            <GetItems />
            <AddItems />
            <EditItems />
        </div>
    )
}
export default Main