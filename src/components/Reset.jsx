import React, { useContext } from 'react'
import AppContext from '../AppContext'

const Reset = () => {
    const {handleReset} = useContext(AppContext);
  return (
    <div className='reset-button' onClick={()=>handleReset()}>Reset</div>
  )
}

export default Reset