import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/Thor.jpg"


const LandingPage = () => {
  return (
    <div>
        <section className='flex w-[100vw] h-[100vh]'>
            <div className='w-[45%] h-[100%]'>
                <img src={img} className='w-[100%] h-[100%]'/>
            </div>
            <div className='w-[55%] h-[100%] text-[1.5rem] flex flex-col gap-9 p-[5rem] font-semibold text-justify'>
                <p>
                Thor Odinson is a superhero appearing in American comic books published by Marvel Comics. Created by artist Jack 
                </p>
                <p>
                Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the Germanic expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, emblems of his hammer, Mjölnir, were worn and Norse pagan personal names containing the name of the god bear witness to his popularity. 
                </p>
                <p className='mt-8'>
                    <Link to={"/home"} className='bg-blue-500 text-white py-3 px-[5rem] text-[2rem] '>Get Started </Link>
                </p>
            </div>
        </section>
    </div>
  )
}

export default LandingPage