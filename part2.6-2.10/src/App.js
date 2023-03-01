import Person from "./Components/Person"
import Filter from "./Components/Filter"
import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './Services/persons'

const App = () => {
  const [persons, setPersons] = useState([
   /* { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }*/
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [newFilter, setNewFilter] = useState('')

  
//get data from server

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  //add name and number for person
  const addInfo = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

//send data to server      
  personService
  .create(personObject)
  .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
    setNewName('')
    setNewNumber('')
  })

  .catch(error => {
    alert(
      `the person '${personObject.name}' was already in server`
    )
    setPersons(persons.filter(n => personObject.id !== personObject.id))
  })

  console.log('nonii')


//alert when adding same name to list
/*
  let monesko;
    if(persons.length === 0){
        console.log('ei ketään listalla')
        setPersons(persons.concat(personObject))
    }
    else{
      for(let i = 0; i < persons.length; i++){
        let differentPerson = persons[i].name

        if(differentPerson !== newName){
          console.log('ennen', personObject)
          console.log('uus nimi', newName)
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
  
          }
      else{
        window.alert(`${newName} is already added to phonebook`)
        monesko = i;
      }
    }     
      }
     */


    }


//filter to see specific names and numbers
  const addFilter =(event) =>{
    event.preventDefault()
    let filter = document.getElementById("filter").value
    console.log(filter)
    let filteredPersons = []
    for(let i =0; i < persons.length;i++){
      if(persons[i].name.toLowerCase().includes(filter.toLowerCase())) 
      {
        console.log(persons[i].name, persons[i].number)
          filteredPersons = [].concat(persons[i])
          console.log('iff', filteredPersons)
      }
      else{
        console.log('else', filter)
      }   
    }
    showAll(filteredPersons)
/*
    return (
        <div>pokok</div> 
    )
    infoToShow = filteredPersons*/
    console.log('siita syntyi', infoToShow)
    setNewFilter('')
  }


            //delete name and number for person
  /*const deleteInfo = (event) =>{
    event.preventDefault()
    console.log(newName, persons[0].id)
    if(window.confirm(`Delete ${newName}?`)){
        console.log('taalla')*/

      // delete person from list
      /*  personService
        .remove(id)
        .then(returnedPerson => {
          console.log(personObject.id)
          console.log('delete')
          setPersons(persons.map(person => personObject.id !== personObject.id ? person : returnedPerson))
        })*/
    
  


  

  const handleNameChange = (event) =>{

    console.log('name change ', event.target.value)
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) =>{

    console.log('number change ', event.target.value)
    setNewNumber(event.target.value)

  }
  
  const handleFilterChange = (event) =>{

    console.log('filter ', event.target.value)
    setNewFilter(event.target.value)

  }
 
  let infoToShow = persons
  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addFilter}>
        <div>
          filter shown with: <input value ={newFilter}
          id="filter"
          onChange={handleFilterChange} />
        </div>
      </form>
      <h2>add new</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value ={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
      <h2>Numbers</h2>
      {infoToShow.map(name =>
          <Person key={name.id} name={name}/>
          )}

      </div>

    </div>
  )
  



}
export default App
