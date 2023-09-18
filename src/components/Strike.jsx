import React, { useContext } from 'react'
import AppContext from '../AppContext'

const Strike = () => {

  const {strikeClass} = useContext(AppContext);

  return (
    <div className={`strike ${strikeClass}`}>

    </div>
  )
}

export default Strike