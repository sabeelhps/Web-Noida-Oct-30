import React, { useState } from 'react'
import Person from './Person';
import Form from './Form';


const PersonList = () => {

    const DUMMY_PERSONS = [
        {
            name: 'Aman',
            age: 22
        },
        {
            name: 'Mayank',
            age: 21
        },
        {
            name: 'Sabeel',
            age: 23
        }
    ];


    const [persons, setPersons] = useState(DUMMY_PERSONS);

    const addPerson=(person)=>{

        return setPersons((prevState) => {
            return [...persons, person];
        })
    }


    const personList = persons.map((person,idx) => {
        return <Person key={idx} name={person.name} age={person.age} />
    })


    return (
        <div>
            <Form addPerson={addPerson} />
            {personList}
      </div>
    )
}

export default PersonList