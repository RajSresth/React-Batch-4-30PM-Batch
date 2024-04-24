import React from 'react'
import Child from "./Components/Props/Props_children/Child.jsx";

const App = () => {
  return (
    <div>      
          <Child user="props">
              <h1>Learing React</h1>
              <h2>Learning Props children</h2>  
              <h3>Thankyou</h3>
          </Child>
    </div>
  )
}

export default App