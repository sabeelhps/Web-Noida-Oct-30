import React,{Fragment} from 'react';
import Person from './components/Card';
import PersonList from './components/PersonList';
import './App.css';


const App = () => {
  return (
    <Fragment>
      <PersonList/>
    </Fragment>
  )
}

export default App;