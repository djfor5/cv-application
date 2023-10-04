import { useState } from 'react';

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

export default General;