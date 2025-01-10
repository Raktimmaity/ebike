import React from 'react'

const FormatPassword = () => {
  return (
    <>
      <section class="w-full p-10 pt-28">
        <h1 class="text-center text-5xl font-bold text-zinc-700 p-5">Reset Password</h1>
        <p class="text-center text-lg p-5 pt-0 text-zinc-700">Enter your email and then enter neww password</p>
        <div class="w-full flex flex-wrap flex-col justify-center items-center gap-2">
            <input class="w-full md:w-[40%] p-3 border border-gray-300 rounded-md bg-gray-100 outline-none" type="email"
                placeholder="Enter your email"/>
            <input class="w-full md:w-[40%] p-3 border border-gray-300 rounded-md bg-gray-100 outline-none" type="email"
                placeholder="Enter your new password"/>
            <input class="w-full md:w-[40%] p-3 border border-gray-300 rounded-md bg-gray-100 outline-none" type="email"
                placeholder="Confirm your password"/>
            <button class="w-full md:w-[40%] bg-zinc-700 p-3 font-bold rounded-md text-white hover:bg-white hover:text-zinc-700 hover:border hover:border-zinc-700 transition duration-150 ease-out hover:ease-in">Reset Password</button>
        </div>
    </section>
    </>
  )
}

export default FormatPassword
