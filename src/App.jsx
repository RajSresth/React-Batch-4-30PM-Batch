import React, { Fragment } from 'react'
import User from './Components/Props/Map_Props/User'

const App = () => {
  let skills=['sql','Java','web']
  return (
    <Fragment>
      <User property={skills}></User>
    </Fragment>
  )
}

export default App