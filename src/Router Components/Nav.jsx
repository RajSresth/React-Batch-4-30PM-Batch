import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-white text-[1.85rem] flex gap-[7rem] font-semibold'>
        <Link to={"/home/career"}>Career</Link>
        <Link to={"/home/about"}>About</Link>
        <Link to={"/home/contact"}>Contact</Link>
        
    </div>
  )
}

export default Nav