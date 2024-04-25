import React, { Fragment } from 'react'

const User = (props) => {
    const {property}=props;
  return (
    <Fragment>
             {property.map(val=>(
                <Fragment key={val.id}>
                  <p>Id is: {val.id}</p>   
                  <h1>Name: {val.userName}</h1>
                </Fragment>
            ))}
    </Fragment>
  )
}
export default User