import React from 'react'
const User = (props) => {
    const {property}=props;
    console.log(property)
  return (
    <div>
        <ul>
            {property.map((val,i)=>{
                return (
                    <li key={i}>{val}</li>   
                )
            })}
        </ul>
    </div>
  )
}
export default User