import React, { useState } from 'react'
import { createContext } from 'react'

export const contextResponseGet = createContext();
export const ContextForm = ({children}) => {
  
    const [responseGet, setResponseGet] = useState([]);
    const [visibilitiModal, setVisibilitiModal] = useState(false);

  return (
    <contextResponseGet.Provider value={{valueGet: [responseGet, setResponseGet], valueModal:[visibilitiModal,setVisibilitiModal]}}>
        {children}
    </contextResponseGet.Provider>
  )
}
