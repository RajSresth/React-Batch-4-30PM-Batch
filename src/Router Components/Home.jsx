import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import Homemain from './Homemain'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
        <Header>Header</Header>
        <section className='w-[100vw] h-[80vh] flex'>
            <Aside>Aside</Aside>            
            <div className="w-[80vw] h-[80vh] flex justify-center items-center text-[3.5rem] font-semibold">
                <Outlet></Outlet>
            </div>
        </section>
        <Footer>Footer</Footer>
    </div>
  )
}

export default Home