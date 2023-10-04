import { useState } from 'react';

function Education({id, school='', study='', dateFrom='', dateTo='', updateEducationItem, deleteEducationItem}) {
  const [schoolState, setSchoolState] = useState(school)
  const [studyState, setStudyState] = useState(study)
  const [dateFromState, setDateFromState] = useState(dateFrom)
  const [dateToState, setDateToState] = useState(dateTo)
  
  const [isDisabled, setIsDisabled] = useState(false)

  function handleCancel() {
    setSchoolState(school)
    setStudyState(study)
    setDateFromState(dateFrom)
    setDateToState(dateTo)
    setIsDisabled(true)
  }

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
          <button onClick={()=>handleCancel()}>Cancel</button>
          <button onClick={(e)=>handleSubmit(e, {id, school: schoolState, study: studyState, dateFrom: dateFromState, dateTo: dateToState})}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Education;
