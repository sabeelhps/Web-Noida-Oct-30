import React from 'react'

const Todo = ({task,completed}) => {
  return (
      <li>
          <input type="checkbox" defaultChecked={completed} />
          <span>{ task }</span>
    </li>
  )
}

export default Todo