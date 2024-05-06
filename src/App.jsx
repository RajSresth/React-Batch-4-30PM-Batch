import React from 'react'
import img from "./assets/Hrithik-Roshan.webp";
import Child1 from "./Components/Props Drilling/Child1";
import "./App.css"
const App = () => {
  const user={
        userId:1122,
        userName:'Hrithik Roshan',
        emailId:'hrx@gmail.com',
        image:img
  }
  return (
    <>
      <Child1 property={user}></Child1>
    </>
  )
}

export default App