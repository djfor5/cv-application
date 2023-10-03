function Btn({ btnType, handleClick }) { // eslint-disable-line react/prop-types
  return (
    <button onClick={handleClick} >{btnType}</button>
  )
}

export default Btn;