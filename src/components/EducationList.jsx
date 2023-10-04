import { useState } from 'react';
import EducationItem from './EducationItem';

function EducationList() {
  const [educationArr, setEducationArr] = useState([{id: crypto.randomUUID(), school: '', study: '', dateFrom: '', dateTo: ''},{id: crypto.randomUUID(), school: '', study: '', dateFrom: '', dateTo: ''}]);

  function updateDetails(item) {
    let newArr = [...educationArr]
    newArr.map(el => {
      if (el.id === item.id) {
        el = {...item}
        console.log(el)
      }
    })
    setEducationArr(newArr)
  }

  function addNew() {

  }

  return (
    <>
    {
      educationArr.map(el => {
        return (
          <EducationItem key={el.id} {...el} updateDetails={updateDetails}/>
        )
      })
    }
    <button>Add New</button>
    </>
  )

}

export default EducationList;
