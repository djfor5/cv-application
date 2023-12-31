import { useState, useEffect } from 'react';

function General() {
  const [isDisabled, setIsDisabled] = useState(true)

  const [general, setGeneral] = useState(()=>{
    const localGeneral = localStorage.getItem("general")
    if (localGeneral == null) return {name: '', email: '', phone: ''}
    
    return JSON.parse(localGeneral)
  })

  useEffect(() => {
    localStorage.setItem("general", JSON.stringify(general))
  }, [general])

  const [nameState, setNameState] = useState(general.name)
  const [emailState, setEmailState] = useState(general.email)
  const [phoneState, setPhoneState] = useState(general.phone)


  function handleCancel() {
    setNameState(general.name)
    setEmailState(general.email)
    setPhoneState(general.phone)
    setIsDisabled(true)
  }

  function handleSubmit(e, item) {
    e.preventDefault();
    setGeneral(item)
    setIsDisabled(true)
  }

  return (
    <>
      <div className="data">
        <label>Name <input type='text' disabled={isDisabled} value={nameState} onChange={(e)=>setNameState(e.target.value)}/></label>
        <label>Email <input type='email' disabled={isDisabled} value={emailState} onChange={(e)=>setEmailState(e.target.value)}/></label>
        <label>Phone Number <input type='tel' disabled={isDisabled} value={phoneState} onChange={(e)=>setPhoneState(e.target.value)}/></label>
      </div>
      <div className='buttons'>
        <button onClick={()=>setIsDisabled(false)}>Edit</button>
        <button onClick={()=>handleCancel()}>Cancel</button>
        <button onClick={(e)=>handleSubmit(e, {name: nameState, email: emailState, phone: phoneState})}>Submit</button>
      </div>
    </>
  )
}

export default General;