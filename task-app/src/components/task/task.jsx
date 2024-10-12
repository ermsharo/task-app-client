import { useState } from 'react'
import styled from 'styled-components'


const Dashboard = styled.div`
display: flex;
flex-direction: column;
gap:1rem; 
width: 60vw;
margin: auto;
padding: 1rem;
`


const TaskBox = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 0.5rem;
padding: 1rem;

`
const TaskButtonBox = styled.div`
display: flex;
gap: 1rem;

`



const DefaultTextBox = styled.input`

`



function Task() {


    return (
        <TaskBox>

            <h2>Task name</h2>
            <p>Task description</p>
            <TaskButtonBox>
                <div> Confirm</div>
                <div> Edit</div>
                <div> Delete</div>

            </TaskButtonBox>

        </TaskBox>
    )
}

export default Task
