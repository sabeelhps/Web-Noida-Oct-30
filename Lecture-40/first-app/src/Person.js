import { useState } from 'react';
import './Person.css';

function Person(props) {

    // console.log(props);

    const [name,setName] = useState(props.name);


    const nameChangeHanlder = () => {
        setName('Anonymous');
    }

    return <article onClick={nameChangeHanlder} className="person">
        <h2>Name : { name }</h2>
        <h3>Age : { props.age }</h3>
        <p>Fav Color : { props.color }</p>
    </article>
}


export default Person;