import React from 'react'
import Card from './Components/Props/Props2/Card'
import "./App.css";
import dhoni from "./assets/Ms Dhoni.webp";
import hrithik from "./assets/Hrithik-Roshan.webp";
import thor from "./assets/Thor.jpg"

const App = () => {
  let actor1={
    actorName:'Hrithik Roshan',
    about:' Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills.',
    movie1:'krrish',
    movie2:'War',
    movie3:'Lakshya',
    image:hrithik
  }
  let actor2={
    actorName:'Chris Hemsworth',
    about:'Christopher Hemsworth AM is an Australian actor. He rose to prominence playing Kim Hyde in the Australian television series Home and Away before beginning a film career in Hollywood.',
    movie1:'Thor',
    movie2:'Extraction',
    movie3:'MIB',
    image:thor
  }
  let actor3={
    actorName:'MS Dhoni',
    about:'M.S. Dhoni Indian cricketer whose rise to prominence in the early 21st century culminated in his captaincy of the Indian national team that .',
    movie1:'ICC',
    movie2:'T-20',
    movie3:'Test',
    image:dhoni
  }

  return (
    <div className='flex items-center justify-center gap-[3rem]'>
      <Card user={actor1}></Card>
      <Card user={actor2}></Card>
      <Card user={actor3}></Card>
    </div>
  )
}

export default App