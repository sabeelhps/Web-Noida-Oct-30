import React, { useState } from 'react'

const useFormState = (initialValue="") => {
  
    const [value, setValue] = useState(initialValue);
    

    const inputValue = (e) => {
        setValue(e.target.value);
    }

    const resetInputValue = (e) => {
        setValue("");
    }
  
  
    return [value, inputValue, resetInputValue];
}

export default useFormState;