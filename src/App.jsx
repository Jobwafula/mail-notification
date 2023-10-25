import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'
import Sidecontent from './components/sidecontent'
import Home from './components/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },{
    path:"contact",
    element:<Contact />
  }
])
  return (
    <>
     <RouterProvider router={router}/>
       
    </>
  )
}

export default App
