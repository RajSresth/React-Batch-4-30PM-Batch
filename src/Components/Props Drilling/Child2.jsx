import React, { useContext } from 'react'
import { context } from '../../Mycontext'

const Child2 = () => {
  const property = useContext(context)
  console.log(property)
  return (
    <div>Child2</div>
  )
}

export default Child2