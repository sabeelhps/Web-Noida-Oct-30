import { useState } from 'react';
import Person from './Person';
import Card from './Card';
import Car from './components/Car';


function App() {

  const DUMMY_PERSONS = [
    {
      name: 'Kartik',
      age: 22,
      favColor: 'blue'
    },
    {
      name: 'Vivek',
      age: 27,
      favColor: 'green'
    },
    {
      name: 'Aqib',
      age: 22,
      favColor: 'blue'
    },
    {
      name: 'Aman',
      age: 24,
      favColor: 'purple'
    },
  ];


  const [persons, setPersons] = useState(DUMMY_PERSONS);

  const addPerson = () => {
    
    // Not recommended
    // setPersons([...persons,{ name: 'Akshit', age: 22, favColor: 'lightgreen' }]);
    
    // Good Practice to update the state
    setPersons((prevState) => {
      return [...prevState,{ name: 'Akshit', age: 22, favColor: 'lightgreen' }];
    })
  }


  const personList = persons.map((person) => {
    return <Person name={person.name} age={person.age} color={person.favColor} />
  });


  
  return <div>
     <button onClick={addPerson}>Add Person</button>
    {personList}
    <Card />
    <Car/>
  </div>
}



export default App;
