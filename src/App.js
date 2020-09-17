import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import schema from './formSchema'
import * as yup from 'yup'

const defaultFormValues = {
  name: "",
  email: "",
  password: "",
  checkbox: false,
}

const defaultFormErrors = {
  name: "",
  email: "",
  password: "",
  checkbox: false,
}

const initialUsers = []

function App() {

  const [ formValues, setFormValues ] = useState(defaultFormValues)
  const [ users, setUsers ] = useState(initialUsers)
  const [ formErrors, setFormErrors] = useState(defaultFormErrors)

  const onSubmit = function(event){
    event.preventDefault()

    axios.post('https://reqres.in/api/users', formValues)
    .then(res=> {
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(defaultFormValues)
    })
  }

  const validation = function(name, value) {
    yup
      .reach(schema, name)
      .validate(value)
      .then(res => {
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.message})
      })
  }

  const inputChange = function(inputName, inputValue) {
    validation(inputName, inputValue)
    setFormValues({...formValues, [inputName]: inputValue})
  }

  // Once the users hits submit, if the current form values are accepted, formValues slice of state will be set to defaultFormValues
  // setFormValues(defaultFormValues)

  return (
    <div className="App">
      <Form formValues={formValues} inputChange={inputChange} onSubmit={onSubmit}/>
      <p>{formErrors.name}</p>
      <p>{formErrors.email}</p>
      <p>{formErrors.password}</p>
      <p>{formErrors.checkbox}</p>
    </div>
  );
}

export default App;
