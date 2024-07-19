import React from 'react'
import headerPlay from '../assets/header play button.png'
import headerImg from '../assets/header image.png'
import one from '../assets/01.png'


function Home() {
  return (
    <>
      <main className="w-full flex justify-center md:justify-around md:p-3 md:mt-20 flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2 p-3 md:p-6">
            <h1 className="text-6xl mr-3 my-10 p-0">LET'S RIDE</h1>
            <h1 className="relative text-7xl text-zinc-700 font-bold">THE FUTURE.</h1>
            <p className="pt-8 font-sans border-t-4 my-16 w-2/5 border-zinc-700 text-zinc-700">Simple and sleek design with users in mind.
            </p>
            <div className="flex justify-between items-stretch md:justify-center md:w-3/5 md:items-center ">
                <div className="flex justify-around items-center w-4/5 h-10 gap-0">
                    <button className="bg-zinc-700 w-1/4 p-2 text-white hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">&rarr;</button>
                    <button className="w-[50%] font-bold text-sm ">Buy Now</button>
                </div>
                <div className="flex justify-center w-[100%]">
                    <p className="w-1/2 text-zinc-700 font-bold">Watch our video how it works</p>
                    <img src={headerPlay} className='animate-bounce' alt="play-button"/>
                </div>
            </div>
        </div>
        <img src={headerImg} className="w-1/2 mt-5 md:mt-0" alt="bike-image"/>
    </main> 
    <div className="w-full flex justify-end pr-24">
        <img src={one} alt="01" class="relative right-6"/>
        <div className="flex justify-between items-center w-1/5">
            <div className="flex w-full justify-center border rounded-l-full p-6 cursor-pointer hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">
                <button className="">
                    <i className="fa-solid fa-angle-left"></i>
                </button>
            </div>
            <div className="flex w-full justify-center border rounded-r-full p-6 cursor-pointer hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">
                <button class="">
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
