import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

const Person = () => {

    // const [toggle, setToggle] = useState(false);


    // const toggleEmojiHandler = () => {
    //     setToggle(!toggle);
    // }

    const [toggle,setToggle] = useToggle(true);

    return (
        <div style={{width:'360px',margin:'30px auto',border:'2px solid #ccc'}}>
            <h2 onClick={setToggle}> { toggle ? '😄' :'😢' }  </h2>
            
        </div>
    )
}

export default Person