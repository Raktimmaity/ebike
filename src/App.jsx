import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Products from './component/Products'
import Gallery from './component/Gallery'
import Contacts from './component/Contacts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Information from './component/Information'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <>
              <Navbar/>
              <Home/>
              <Information/>
              <Products/>
              <Gallery/>
              <Testimonial/>
              <Contacts/>
              <Footer/>
              </>
    },
    {
      path: "/products",
      element: <><Navbar/><Products/><Footer/></>
    },
    {
      path: "/gallery",
      element: <><Navbar/><Gallery/><Footer/></>
    },
    {
      path: "/contacts",
      element: <><Navbar/><Contacts/><Footer/></>
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
