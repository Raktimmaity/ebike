import React from 'react'
import productInfo from '../assets/product information image.png'
import icon from '../assets/Icon.png'
import motor from '../assets/high efficiency motor.png'
import golf from '../assets/golf bag rock.png'
import shopping from '../assets/shopping rack.png'

function Products() {
  return (
<>
     <section class="ml-0 pt-24">
        <h1 class="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">Product Information</h1>
        <p class="md:text-center text-start text-lg p-3 md:p-5 pt-0">Our Scooter has following unique design and technology Features:</p>
        <div class="w-full flex flex-col md:flex-row justify-between items-center">
            <img className='w-1/2' src={productInfo} alt=""/>
            <div class="pr-32 flex flex-col justify-center items-start gap-8">
                <div class="w-full flex justify-center items-center gap-5">
                    <img src={icon} alt=""/>
                    <p class="text-zinc-700">Lightweight aircraft grade aluminium frame</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon} alt=""/>
                    <p class="text-zinc-700">Car grade lithium battery</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon} alt=""/>
                    <p class="text-zinc-700">Self-balanced</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon} alt=""/>
                    <p class="text-zinc-700">Quick release</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon} alt=""/>
                    <p class="text-zinc-700">RFID key card</p>
                </div>
            </div>
        </div>
    </section> 
    <section className="flex justify-center items-center mt-6">
        <img className="md:w-3/5 w-4/5" src={motor} alt=""/>
    </section>
    <section>
        <h1 className="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">Product Information</h1>
        <p className="md:text-center text-start text-lg p-3 md:p-5 pt-0">Our Scooter has following unique design and technology
            Features:</p>
        <div class="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:justify-around p-20">
            <div class="w-[50%] flex flex-col justify-start gap-8">
                <h1 class="w-full text-3xl md:text-5xl font-semibold text-zinc-700">Golf Bag Rock</h1>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Material : Aluminium alloy</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Color : Black</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Capacity : 45lbs</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Ease : Steady & adjustable</p>
                </div>
            </div>
            <img src={golf} alt=""/>
        </div>

        <div class="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:justify-between">
            <img src={shopping} alt=""/>
            <div class="w-[50%] flex flex-col gap-8 md:pl-20">
                <h1 class="w-full text-5xl font-bold text-zinc-700">Shopping Rack</h1>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Material : Aluminium alloy</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Color : Black</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Capacity : 45lbs</p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <img src={icon}alt=""/>
                    <p class="text-zinc-700">Ease : Steady & adjustable</p>
                </div>
            </div>
        </div>
        <div class="flex w-full p-20 justify-center items-center">
            <button class="border-2 border-zinc-700 p-5 w-full md:w-[40%] rounded-lg text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white transition duration-150 ease-out hover:ease-in">More Accessories
                Coming Soon</button>
        </div>
    </section>
    </>
  )
}

export default Products
