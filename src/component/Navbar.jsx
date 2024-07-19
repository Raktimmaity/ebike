import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="z-40 bg-white fixed top-0 left-0 right-0 w[100%] h-auto pl-9 pt-3 pb-3 md:flex justify-between border-b-2 hidden">
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <ul className="w[50%] flex gap-10 justify-between pt-3 font-bold ">
            <li className="p-2 hover:bg-zinc-700 hover:text-white hover:rounded-lg hover:transition hover:duration-300"><NavLink className={(e)=>{return e.isActive? "black":""}} to="/">HOME</NavLink></li>
            <li className="p-2 hover:bg-zinc-700 hover:text-white hover:rounded-lg hover:transition hover:duration-300"><NavLink className={(e)=>{return e.isActive? "black":""}} to="/products">PRODUCTS</NavLink></li>
            <li className="p-2 hover:bg-zinc-700 hover:text-white hover:rounded-lg hover:transition hover:duration-300"><NavLink className={(e)=>{return e.isActive? "black":""}} to="/gallery">GALLERY</NavLink></li>
            <li className="p-2 hover:bg-zinc-700 hover:text-white hover:rounded-lg hover:transition hover:duration-300"><NavLink className={(e)=>{return e.isActive? "black":""}} to="/contacts">CONTACT</NavLink></li>
        </ul>
        <div className="flex justify-evenly w-[20%]">
            <li className="list-none shadow-xl p-2 rounded-lg font-bold hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">
             <NavLink to="/login"> LOG IN</NavLink></li>
            <li className="list-none p-2 bg-zinc-700 text-white w-20 rounded-lg shadow-xl font-bold hover:bg-white hover:text-zinc-700 hover:border hover:border-zinc-700 transition duration-150 ease-out hover:ease-in"><NavLink to="/signup">SIGN UP</NavLink></li>
        </div>
        </nav>
        <div className="md:hidden fixed bottom-0 w-full flex justify-around bg-white z-50 text-zinc-700 hover:text-zinc-800 text-xl">
          <NavLink className={(e)=>{return e.isActive? "bg-zinc-700 text-white p-2 rounded-lg":""}} to="/"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-solid fa-house text-xl"></i>Home</div></NavLink>
          <NavLink className={(e)=>{return e.isActive? "bg-zinc-700 text-white p-2 rounded-lg":""}} to="/products"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-brands fa-product-hunt text-xl"></i>Products</div></NavLink>
          <NavLink className={(e)=>{return e.isActive? "bg-zinc-700 text-white p-2 rounded-lg":""}} to="/gallery"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-solid fa-images text-xl"></i>Gallery </div> </NavLink>
          <NavLink className={(e)=>{return e.isActive? "bg-zinc-700 text-white p-2 rounded-lg":""}} to="/contacts"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-solid fa-envelope text-xl"></i>Contact</div> </NavLink>
          <NavLink className={(e)=>{return e.isActive? "bg-zinc-700 text-white p-2 rounded-lg":""}} to="/login"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-solid fa-user text-xl"></i>Account</div> </NavLink>
        </div>
    </>
  )
}

export default Navbar
