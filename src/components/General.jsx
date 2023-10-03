import { useState } from 'react';
import Btn from './Btn';

function General() {
  const [person, setPerson] = useState({name: '', email: '', phone: ''});
  const [status, setStatus] = useState('editing');

  const updatePerson = (e, input) => {
    setPerson({...person, [input]: e.target.value});
  }

  if (status === 'editing') {
    return (
      <>
        <label>Name <input type='text' value={person.name} onChange={(e)=>updatePerson(e, 'name')} /></label>
        <label>Email <input type='email' value={person.email} onChange={(e)=>updatePerson(e, 'email')} /></label>
        <label>Phone Number <input type='tel' value={person.phone} onChange={(e)=>updatePerson(e, 'phone')} /></label>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  } else {
    return (
      <>
        <label>Name: </label><p>{person.name}</p>
        <label>Email: </label><p>{person.email}</p>
        <label>Phone: </label><p>{person.phone}</p>
        <Btn btnType='Edit' handleClick={()=>setStatus('editing')} />
        <Btn btnType='Submit' handleClick={()=>setStatus('submitted')} />
      </>
    )
  }
}

export default General;