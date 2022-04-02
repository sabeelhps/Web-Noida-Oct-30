import React,{useRef} from 'react';
import styles from './Form.module.css';
import useFormState from '../hooks/useFormState';

const Form = (props) => {

    // const [name, setName, resetName] = useFormState("");
    // const [age, setAge, resetAge] = useFormState("");

    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        props.addPerson({ name, age });
        nameInputRef.current.value = "";
        ageInputRef.current.value=""
        // resetName();
        // resetAge();
    }


    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <div >
                <input
                    className={styles["form-control"]}
                    type="text" placeholder="Name"
                    // onChange={setName}
                    // value={name}
                    ref={nameInputRef}
                   
                />
            </div>
            <div >
                <input
                    className={styles["form-control"]}
                    type="text" placeholder="Age"
                    min="0"
                    // onChange={setAge}
                    // value={age}
                    ref={ageInputRef}
                   
                />
            </div>
           <button type='submit' className={styles.btn}>Add</button>
        </form>
  )
}

export default Form;