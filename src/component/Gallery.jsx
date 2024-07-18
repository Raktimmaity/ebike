import React from 'react'
import scooter from '../assets/gallery scooter.png'
import build from '../assets/gallery built quality.png'
import parts from '../assets/gallery parts.png'
import scooter1 from '../assets/color-scooter-1.png'
import scooter2 from '../assets/color-scooter-2.png'
import scooter3 from '../assets/color-scooter-3.png'
import scooter4 from '../assets/color-scooter-4.png'

function Gallery() {
  return (
    <>
        <section className="mt-20 p-5">
        <h1 className="text-center text-5xl font-bold text-zinc-700 p-5">Gallery</h1>
        <p className="text-center text-lg p-5 pt-0 text-zinc-700">View gallery of our products and make yourself satisfied
            with our creatio.</p>
        <div className="w-full flex justify-evenly">
            <div className="flex flex-col gap-5 relative top-24">
                <h1 className="relative text-zinc-700 text-xl font-bold top-14 left-5">Scooter</h1>
                <img className="z-0" src={scooter} width="400px" alt=""/>
                <button className="border-2 border-zinc-700 p-5 w-[80%] rounded-lg text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">Battery
                    Images</button>
                <button className="border-2 border-zinc-700 p-5 w-[80%] rounded-lg text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">Spare
                    Parts</button>
                <button className="border-2 border-zinc-700 p-5 w-full md:w-[80%] rounded-lg text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">Charging Cable
                    Images</button>
            </div>
            <div className=" pl-10 p-10">
                <h1 className="relative text-zinc-700 text-xl font-bold top-6 md:top-14 md:left-5">Built Quality</h1>
                <img src={build} width="400px" alt=""/>
                <h1 className="relative text-zinc-700 text-xl font-bold top-10 left-6 md:top-14 md:left-5">Parts</h1>
                <img src={parts} width="400px" alt=""/>
            </div>
        </div>
    </section>
    <section className="mt-20">
        <h1 className="text-center text-5xl font-bold text-zinc-700 p-5">Colors</h1>
        <p class="text-center text-lg p-5 pt-0 text-zinc-700">Checkout our products colors.</p>
        <div className="flex justify-center items-center">
            <img src={scooter} class="w-1/2" alt=""/>
        </div>
        <div class="w-[100%] flex flex-col md:flex-row justify-center md:pl-16 md:relative md:bottom-[200px]">
            <img src={scooter1} width="280px" height="100px" alt=""/>
            <h1 class="relative font-bold text-7xl top-40 right-36">01</h1>
            <img src={scooter2} width="280px" height="100px" alt=""/>
            <h1 class="relative font-bold text-7xl top-40 right-36">02</h1>
            <img src={scooter3} width="280px" height="100px" alt=""/>
            <h1 class="relative font-bold text-7xl top-40 right-36">03</h1>
            <img src={scooter4} width="280px" height="100px" alt=""/>
            <h1 class="relative font-bold text-7xl top-40 right-36">04</h1>
        </div>
    </section>
    </>
  )
}

export default Gallery
