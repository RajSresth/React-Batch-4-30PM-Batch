import React from 'react'

const Card = (props) => {
  
  return (
    <div className='shadow-[2px_2px_12px_3px_rgba(125,125,125)] w-[350px] h-[450px] bg-slate-100 rounded-md text-center pb-5'>

          <div className='h-[200px] w-[100%]'>
          <img src={props.user.image}
            className='rounded-md h-[100%] w-[100%] object-cover object-top'
          />
          </div>

          <h2 className='text-[1.5rem] font-semibold my-2'>{props.user.actorName}</h2>

          <p className='text-justify px-5 mb-4 text-[1rem]'>
          {props.user.about}
          </p>

          <div className='flex gap-4 justify-center'>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.15rem] px-5 w-[fit-content]'>
           {props.user.movie2}
          </p>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.25rem] px-5 w-[fit-content]'>
          {props.user.movie1}
          </p>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.25rem] px-5 w-[fit-content]'>
            {props.user.movie3}
          </p>
          </div> 
    </div>
  )
}

export default Card