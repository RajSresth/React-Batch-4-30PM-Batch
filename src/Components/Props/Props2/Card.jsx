import React from 'react'

const Card = () => {
  return (
    <div className='w-[350px] bg-slate-100 rounded-md text-center pb-5'>

          <img src='https://assets.gqindia.com/photos/5fdc6eb81c519f6c10ba2d2f/16:9/w_2560%2Cc_limit/Hrithik-Roshan%2520(2).jpg'
            className='rounded-md'
          />

          <h2 className='text-[1.65rem] font-semibold my-2'>Hrithik Roshan</h2>

          <p className='text-justify px-5 mb-4 text-[1.15rem]'>
          Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills.
          </p>

          <div className='flex gap-4 justify-center'>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.25rem] px-5 w-[fit-content]'>
            Krrish
          </p>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.25rem] px-5 w-[fit-content]'>
            War
          </p>
          <p className='rounded font-semibold py-1 bg-[#1581ab] text-white text-[1.25rem] px-5 w-[fit-content]'>
            lakshya
          </p>
          </div> 
    </div>
  )
}

export default Card