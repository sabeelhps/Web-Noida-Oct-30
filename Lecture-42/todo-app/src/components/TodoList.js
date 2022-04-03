import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {



    const todoList = props.todos.map((todo) => {
        return <Todo 
            id={todo.id}
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            deleteTodo={props.deleteTodo}
            toggleCompleted={props.toggleCompleted}
        />
    })

    return (
        <ul>
            {todoList}
      </ul>
    )
}

export default TodoList