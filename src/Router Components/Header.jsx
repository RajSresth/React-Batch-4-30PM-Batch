import React from 'react'
import Nav from './Nav'
import Logo from './Logo';

const Header = () => {
  return (
    <div className='w-[100vw] h-[10vh] bg-[#890889] flex justify-around items-center'>
        <Logo></Logo>
        <Nav></Nav>
    </div>
  )
}

export default Header