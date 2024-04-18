import React from 'react'

const Child = (props) => {
    console.log(props.userName)
    console.log(props.city)
  return (
    <div>
        <h1>Name is : {props.userName}</h1>
        <h3>City is : {props.city}</h3>  
    </div>
  )
}

export default Child