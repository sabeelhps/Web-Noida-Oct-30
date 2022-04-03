import React, { Fragment,useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {


    const DUMMY_TODOS = [
        {   
            id:uuidv4(),
            task: 'Go to Gym',
            completed:false
        },
        {
            id:uuidv4(),
            task: 'Learn Web',
            completed:true
        },
        {
            id:uuidv4(),
            task: 'Learn React',
            completed:false
        },
        {
            id:uuidv4(),
            task: 'Buy Groceries',
            completed:true
        },
    ]

    const [todos,setTodos] = useState(DUMMY_TODOS);

    const addTodo = (task) => {
        return setTodos((prevState) => {
            return [...prevState, {id:uuidv4(),task:task,completed:false}];
        })
    }

    const deleteTodo=(id)=>{
        return setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }

    const toggleCompleted = (id) => {
        
        return setTodos((prevState) => prevState.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }


    return (
        <Fragment>
            <section>
                <Form addTodo={ addTodo }/>
            </section>
            <section>
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
            </section>
      </Fragment>
    )
}

export default TodoApp;