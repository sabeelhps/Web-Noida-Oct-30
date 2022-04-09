import React,{useRef} from 'react'

const Form = (props) => {


    const nameInputRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(nameInputRef.current.value);
        props.fetchProfile(nameInputRef.current.value);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <input
                type="text"
                placeholder="Enter Username!"
                ref={nameInputRef}
            />
            <button>Submit</button>
      </form>
    )
}

export default Form