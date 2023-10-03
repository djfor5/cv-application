import { useState } from 'react';
import Btn from './Btn';

function Practical() {
  const [practical, setPractical] = useState({company: '', position: '', responsibilities: '', dateFrom: '', dateTo: ''});
  const [status, setStatus] = useState('editing');

  const updatePractical = (e, input) => {
    setPractical({...practical, [input]: e.target.value});
  }

  if (status === 'editing') {
    return (
      <>
        <label>Company <input type='text' value={practical.company} onChange={(e)=>updatePractical(e, 'company')} /></label>
        <label>Position <input type='text' value={practical.position} onChange={(e)=>updatePractical(e, 'position')} /></label>
        <label>Responsibilities <input type='text' value={practical.responsibilities} onChange={(e)=>updatePractical(e, 'responsibilities')} /></label>
        <label>Date From <input type='date' value={practical.dateFrom} onChange={(e)=>updatePractical(e, 'dateFrom')} /></label>
        <label>Date To <input type='date' value={practical.dateTo} onChange={(e)=>updatePractical(e, 'dateTo')} /></label>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  } else {
    return (
      <>
        <label>Company: </label><p>{practical.company}</p>
        <label>Position: </label><p>{practical.position}</p>
        <label>Responsibilities: </label><p>{practical.responsibilities}</p>
        <label>Date From: </label><p>{practical.dateFrom}</p>
        <label>Date To: </label><p>{practical.dateTo}</p>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  }
}

export default Practical;