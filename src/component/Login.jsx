import React from 'react'
import scooter from '../assets/footer scooter.png'
import { NavLink } from 'react-router-dom'
        
function Login() {
  return (
    <>
      <div class="h-screen flex mt-16">
        <img class="hidden lg:block w-1/" src={scooter} alt="image"/>
        <div class="flex flex-col justify-start items-center pt-5 w-full lg:w-1/2">
            <div>
                <div class="ml-10 md:ml-0 mt-8 font-bold text-3xl lg:text-left">
                    <h2>Hello,</h2>
                    <h2>Welcome Back</h2>
                </div>
                <form class="mt-5 w-[80%] lg:w-96 mx-auto space-y-4">
                    <h4 className="font-bold">Login to manage your account</h4>
                    <input type="email" class="border w-full px-4 py-2 outline-none" placeholder="Email"/>
                    <input type="password" class="border w-full px-4 py-2 outline-none" placeholder="Password"/>
                    <div class="text-blue-600 hover:text-blue-400 cursor-pointer font-bold">
                        Forgot your password
                    </div>
                    <button class="w-full mt-2 bg-zinc-700 py-2 rounded font-bold text-white hover:bg-zinc-800">
                        Login
                    </button>
                    <div class="text-center space-y-4 mt-4">
                        <span className='font-bold'>OR</span>
                        <div class="flex gap-8 justify-center items-center">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div class="mt-4 text-sm text-center font-bold">
                            don't have an account? 
                            <span class="text-sm text-blue-600 hover:text-blue-400 cursor-pointer">
                                <NavLink to="/signup">Sign Up here</NavLink></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
