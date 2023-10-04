import { useState } from 'react';

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

export default Practical;