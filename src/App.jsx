import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  const [educationArr, setEducationArr] = useState([])
  const [practicalArr, setPracticalArr] = useState([])

  function addNewEducation() {
    setEducationArr([...educationArr, {id: crypto.randomUUID()}])
  }

  function addNewPractical() {
    setPracticalArr([...practicalArr, {id: crypto.randomUUID()}])
  }

  function updateEducationItem(item) {
    let newArr = [...educationArr]
    const newItem = {...item}
    const index = newArr.findIndex(el => el.id === newItem.id)
    if (index >= 0) {
      newArr[index] = {...newItem}
    } else {
      newArr.push(newItem)
    }
    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    setEducationArr(newArr)
  }


  function updatePracticalItem(item) {
    let newArr = [...practicalArr]
    const newItem = {...item}
    const index = newArr.findIndex(el => el.id === newItem.id)
    if (index >= 0) {
      newArr[index] = {...newItem}
    } else {
      newArr.push(newItem)
    }
    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    setPracticalArr(newArr)
  }

  function deleteEducationItem(itemId) {
    let newArr = [...educationArr]
    newArr = newArr.filter(el => el.id !== itemId)

    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    setEducationArr(newArr)
  }

  function deletePracticalItem(itemId) {
    let newArr = [...practicalArr]
    newArr = newArr.filter(el => el.id !== itemId)

    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    setPracticalArr(newArr)
  }

  return (
    <>
      <h1>CV Generator</h1>
      <h2>General Information</h2>
      <section className='general'>
        <General />
      </section>
      <section className='education'>
        <h2>Educational Experience</h2>
        {educationArr.map(el=>{
          return (
            <Education key={el.id} {...el} updateEducationItem={updateEducationItem} deleteEducationItem={deleteEducationItem}/>
          )
        })}
        <button onClick={()=>addNewEducation()}>Add New</button>
      </section>
      <section className='practical'>
        <h2>Practical Experience</h2>
        {practicalArr.map(el=>{
          return (
            <Practical key={el.id} {...el} updatePracticalItem={updatePracticalItem} deletePracticalItem={deletePracticalItem}/>
          )
        })}
        <button onClick={()=>addNewPractical()}>Add New</button>
      </section>
    </>
  )
}

export default App;

