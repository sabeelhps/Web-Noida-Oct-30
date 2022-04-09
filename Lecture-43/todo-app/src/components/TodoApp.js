import React, { Fragment,useState,useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

    console.log('Starting the render');
    const DUMMY_TODOS = JSON.parse(window.localStorage.getItem('todos') || '[]'); 

    const [todos, setTodos] = useState(DUMMY_TODOS);

  
    
    useEffect(() => {
        // console.log('Inside Use Effect');
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        return setTodos((prevState) => {
            return [...prevState, { id: uuidv4(), task: task, completed: false }];
        })
    }

    const deleteTodo=(id)=>{
        return setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }

    const toggleCompleted = (id) => {
        
        return setTodos((prevState) => prevState.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }



    console.log('Render Ends!!!');
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