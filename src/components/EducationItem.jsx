import { useState } from "react";

function EducationItem({id, school, study, dateFrom, dateTo, updateDetails}) {

  const [item, setItem] = useState({id, school, study, dateFrom, dateTo});



  return (
    <div>
      <label>ID <p>{id}</p></label>
      <label>School <input type='text' value={item.school} onChange={(e)=>setItem({...item, school: e.target.value})} /></label>
      <label>Study <input type='text' value={item.study} onChange={(e)=>setItem({...item, study: e.target.value})} /></label>
      <label>Date From <input type='date' value={item.dateFrom} onChange={(e)=>setItem({...item, dateFrom: e.target.value})} /></label>
      <label>Date To <input type='date' value={item.dateTo} onChange={(e)=>setItem({...item, dateTo: e.target.value})} /></label>
      <button>Edit</button>
      <button onClick={()=>updateDetails({id, school: item.school, study: item.study, dateFrom: item.dateFrom, dateTo: item.dateTo})}>Submit</button>
    </div>
  )
}

export default EducationItem;