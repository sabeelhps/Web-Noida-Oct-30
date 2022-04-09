import React from 'react';
import useFormState from '../hooks/useFormState';

const Form = (props) => {

    const [taskInp, setTaskInp, resetTaskInp] = useFormState("");



    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.addTodo(taskInp);
        resetTaskInp();
    }


    return (
        <form onSubmit={formSubmitHandler}>
              <input  onChange={setTaskInp} type="text" placeholder="Add Todo" value={taskInp} />
              <button>Add</button>
      </form>
    )
}

export default Form