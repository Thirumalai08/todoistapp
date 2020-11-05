import React from 'react'
import AddItems from './Items/AddItems'
import GetItems from './Items/GetItems'

function Main(){
    return(
        <div>
            <h1>Main Component</h1>
            <GetItems />
            <AddItems />
        </div>
    )
}
export default Main