import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({id, task, completed,deleteTodo ,toggleCompleted}) => {

    return (
        <li style={{textDecoration: completed ? 'line-through':'none' }}>
            <input onChange={()=>toggleCompleted(id)} type="checkbox" defaultChecked={completed} />
            <span>{task}</span>
            <span onClick={()=>deleteTodo(id)}><FaTrashAlt/></span>
      </li>
    )
}

export default Todo