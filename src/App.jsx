import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import LandingPage from './Router Components/LandingPage';
import Home from './Router Components/Home';
import Career from './Router Components/Career';
import Contact from './Router Components/Contact';
import About from './Router Components/About';
import Homemain from './Router Components/Homemain';

  const first=createBrowserRouter([
    {
      path:"/",
      element:<LandingPage></LandingPage>
    },
    {
        path:"/home",
        element:<Home></Home>,
        children:[
          {
            path:"/home/",
            element:<Homemain></Homemain>
          },
          {
            path:"/home/career",
            element:<Career/>
          },
          {
            path:"/home/about",
            element:<About></About>,
          },
          {
            path:"/home/contact",
            element:<Contact></Contact>,
          }
        ]
    }
  ])
const App = () => {
  return (
    <RouterProvider router={first}></RouterProvider>
  )
}

export default App