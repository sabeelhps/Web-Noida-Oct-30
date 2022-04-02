import { useState } from 'react'

const useToggle = (intialValue=false) => {

    const [value, setValue] = useState(intialValue);

    const toggle=() => {
        setValue(!value);
    }

    return [value, toggle];
}

export default useToggle