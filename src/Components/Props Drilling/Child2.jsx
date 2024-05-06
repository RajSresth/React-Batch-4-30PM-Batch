import React from 'react'

const Child2 = (props) => {
    console.log(props.propC1.property.image)
  return (
    <>
            <div className='border-[1px] border-black py-5 px-3 w-[300px] h-[350px] rounded-md flex flex-col items-center'>

                        <img src={props.propC1.property.image} className='h-[150px] w-[150px] rounded-full'/>
                        <h2 className='text-[1.5rem] mt-2 font-semibold'>{props.propC1.property.userName}</h2>
                        <p className='my-2'><strong>User Id:</strong> {props.propC1.property.userId}</p>
                        <p> <strong>Email Id:</strong> <a href="https://www.google.com" target='_blank' className='text-[blue] underline'>{props.propC1.property.emailId}</a></p>
            </div>
    </>
  )
}

export default Child2