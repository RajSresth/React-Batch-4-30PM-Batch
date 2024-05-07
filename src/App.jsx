import React, { useContext } from 'react'
import { context } from './Mycontext'
import Child2 from './Components/Props Drilling/Child2'

const App = () => {
  const first = useContext(context)
  
  return (
    <>
      <Child2></Child2>
    </>
  )
}

export default App