import React from 'react'
import { createContext } from 'react'

export const context=createContext()
const Mycontext = ({children}) => {
    const user={
        name:'Shri Ram',
        city:'Ayodhya'
    }
  return (
    <context.Provider value={user}>{children}</context.Provider>
  )
}

export default Mycontext