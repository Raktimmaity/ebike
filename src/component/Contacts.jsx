import React from 'react'

function Contacts() {
  return (
    <>
      <section class="w-full p-10 pt-16">
        <h1 class="text-center text-5xl font-bold text-zinc-700 p-5">Subscribe To Newsletter</h1>
        <p class="text-center text-lg p-5 pt-0 text-zinc-700">Subscribe to our newsletter to get amazing offers in
            future.</p>
        <div class="w-full flex flex-col md:flex-row justify-center items-center gap-2">
            <input class="w-full md:w-[20%] p-3 border border-gray-300 rounded-md bg-gray-100 outline-none" type="email"
                placeholder="Enter your email...."/>
            <button class="w-1/2 md:w-[10%] bg-zinc-700 p-3 font-bold rounded-md text-white hover:bg-white hover:text-zinc-700 hover:border hover:border-zinc-700 transition duration-150 ease-out hover:ease-in">Get start</button>
        </div>
    </section>
    </>
  )
}

export default Contacts
