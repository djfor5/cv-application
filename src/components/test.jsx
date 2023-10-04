import { useState } from "react"

function General() {
  const [nameState, setNameState] = useState('')
  const [emailState, setEmailState] = useState('')
  const [phoneState, setPhoneState] = useState('')

  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <>
      <div className="data">
        <label>Name <input type='text' disabled={isDisabled} value={nameState} onChange={(e)=>setNameState(e.target.value)}/></label>
        <label>Email <input type='email' disabled={isDisabled} value={emailState} onChange={(e)=>setEmailState(e.target.value)}/></label>
        <label>Phone Number <input type='tel' disabled={isDisabled} value={phoneState} onChange={(e)=>setPhoneState(e.target.value)}/></label>
      </div>
      <div className='buttons'>
        <button onClick={()=>setIsDisabled(false)}>Edit</button>
        <button onClick={()=>setIsDisabled(true)}>Submit</button>
      </div>
    </>
  )
}

function Education({id, school, study, dateFrom, dateTo, updateEducationItem, deleteEducationItem}) {
  const [schoolState, setSchoolState] = useState(school)
  const [studyState, setStudyState] = useState(study)
  const [dateFromState, setDateFromState] = useState(dateFrom)
  const [dateToState, setDateToState] = useState(dateTo)
  
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e, item) {
    e.preventDefault();
    updateEducationItem(item)
    setIsDisabled(true)
  }

  return (
    <>
      <div className='education-item'>
        <div className='data'>
          <label>School <input type='text' disabled={isDisabled} value={schoolState} onChange={(e)=>setSchoolState(e.target.value)}/></label>
          <label>Study <input type='text' disabled={isDisabled} value={studyState} onChange={(e)=>setStudyState(e.target.value)}/></label>
          <label>Date From <input type='date' disabled={isDisabled} value={dateFromState} onChange={(e)=>setDateFromState(e.target.value)}/></label>
          <label>Date To <input type='date' disabled={isDisabled} value={dateToState} onChange={(e)=>setDateToState(e.target.value)}/></label>
        </div>
        <div className='buttons'>
          <button onClick={()=>deleteEducationItem(id)}>Delete</button>
          <button onClick={()=>setIsDisabled(false)}>Edit</button>
          <button onClick={(e)=>handleSubmit(e, {id, school: schoolState, study: studyState, dateFrom: dateFromState, dateTo: dateToState})}>Submit</button>
        </div>
      </div>
    </>
  )
}

function Practical({id, company, position, responsibilities, dateFrom, dateTo, updatePracticalItem, deletePracticalItem}) {
  const [companyState, setCompanyState] = useState(company)
  const [positionState, setPositionState] = useState(position)
  const [responsibilitiesState, setResponsibilitiesState] = useState(responsibilities)
  const [dateFromState, setDateFromState] = useState(dateFrom)
  const [dateToState, setDateToState] = useState(dateTo)
  
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e, item) {
    e.preventDefault();
    updatePracticalItem(item)
    setIsDisabled(true)
  }

  return (
    <>
      <div className='practical-item'>
        <div className='data'>
          <label>Company <input type='text' disabled={isDisabled} value={companyState} onChange={(e)=>setCompanyState(e.target.value)} /></label>
          <label>Position <input type='text' disabled={isDisabled} value={positionState} onChange={(e)=>setPositionState(e.target.value)} /></label>
          <label>Responsibilities <input type='text' disabled={isDisabled} value={responsibilitiesState} onChange={(e)=>setResponsibilitiesState(e.target.value)} /></label>
          <label>Date From <input type='date' disabled={isDisabled} value={dateFromState} onChange={(e)=>setDateFromState(e.target.value)} /></label>
          <label>Date To <input type='date' disabled={isDisabled} value={dateToState} onChange={(e)=>setDateToState(e.target.value)} /></label>
        </div>
        <div className='buttons'>
          <button onClick={()=>deletePracticalItem(id)}>Delete</button>
          <button onClick={()=>setIsDisabled(false)}>Edit</button>
          <button onClick={(e)=>handleSubmit(e, {id, company: companyState, position: positionState, responsibilities: responsibilitiesState, dateFrom: dateFromState, dateTo: dateToState})}>Submit</button>
        </div>
      </div>
    </>
  )
}

function Test() {
  // const [educationArr, setEducationArr] = useState([{id: crypto.randomUUID()}])
  const [educationArr, setEducationArr] = useState([])
  // const [practicalArr, setPracticalArr] = useState([{id: crypto.randomUUID()}])
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
      // console.log('item ID found in array, item now updated in array')
    } else {
      newArr.push(newItem)
      // console.log('item not found in array, now added to array')
    }
    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    // console.log(newArr)
    setEducationArr(newArr)
  }


  function updatePracticalItem(item) {
    let newArr = [...practicalArr]
    const newItem = {...item}
    const index = newArr.findIndex(el => el.id === newItem.id)
    if (index >= 0) {
      newArr[index] = {...newItem}
      // console.log('item ID found in array, item now updated in array')
    } else {
      newArr.push(newItem)
      // console.log('item not found in array, now added to array')
    }
    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    // console.log(newArr)
    setPracticalArr(newArr)
  }

  function deleteEducationItem(itemId) {
    let newArr = [...educationArr]
    newArr = newArr.filter(el => el.id !== itemId)

    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    // console.log(newArr)
    setEducationArr(newArr)
  }

  function deletePracticalItem(itemId) {
    let newArr = [...practicalArr]
    newArr = newArr.filter(el => el.id !== itemId)

    newArr.sort((a, b) => new Date(b.dateTo) - new Date(a.dateTo))
    // console.log(newArr)
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

export default Test;