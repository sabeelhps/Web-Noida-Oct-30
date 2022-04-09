import {useState} from 'react'

const useFormState = (initialVal = "") => {
    

    const [value, setValue] = useState(initialVal);


    const inputValue = (e) => {
        setValue(e.target.value);
    }

    const resetValue = () => {
        setValue("");
    }

    return [value, inputValue, resetValue];
}

export default useFormState;