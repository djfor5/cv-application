import { useState } from 'react';
import Btn from './Btn';

function Education() {
  const [education, setEducation] = useState({school: '', study: '', dateFrom: '', dateTo: ''});
  const [status, setStatus] = useState('editing');

  const updateEducation = (e, input) => {
    setEducation({...education, [input]: e.target.value});
  }

  if (status === 'editing') {
    return (
      <>
        <label>School <input type='text' value={education.school} onChange={(e)=>updateEducation(e, 'school')} /></label>
        <label>Study <input type='text' value={education.study} onChange={(e)=>updateEducation(e, 'study')} /></label>
        <label>Date From <input type='date' value={education.dateFrom} onChange={(e)=>updateEducation(e, 'dateFrom')} /></label>
        <label>Date To <input type='date' value={education.dateTo} onChange={(e)=>updateEducation(e, 'dateTo')} /></label>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  } else {
    return (
      <>
        <label>School: </label><p>{education.school}</p>
        <label>Study: </label><p>{education.study}</p>
        <label>Date From: </label><p>{education.dateFrom}</p>
        <label>Date To: </label><p>{education.dateTo}</p>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  }
}

export default Education;