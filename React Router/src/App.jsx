import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './componets/Home'
import Contact from './componets/Contact'
import About from './componets/About'
import User from './componets/User'

function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<> <Navbar/><Home/></>
    },
    {
      path:"/contact",
      element:<> <Navbar/><Contact/></>
    },
    {
      path:"/about",
      element:<> <Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<User/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
