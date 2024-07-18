import React from 'react'
import one from '../assets/serhiy hipskyy.png'
import two from '../assets/Justus Menke.png'
import three from '../assets/Britain Eriksen.png'

const Testimonial = () => {
  return (
    <>
      <section class="w-full bg-gray-100 md:mt-[-150px]">
        <h1 class="text-center text-5xl font-bold text-zinc-700 p-10">Testimonials</h1>
        <div class="w-full flex flex-col md:flex-row justify-center gap-5 items-center flex-wrap md:justify-around p-5">
            <div class="w-full md:w-[25%] shadow-xl p-10 bg-white">
                <div class="text-center">
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <p class="pt-5 text-zinc-700">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                        impedit quo minus id quod maxime placeat possims.</p>
                </div>
                <div class="flex justify-center items-center gap-5 pt-10">
                    <img src={one} alt=""/>
                    <div>
                        <p class="font-bold text-zinc-700">Serhiy Hipskyy</p>
                        <p class="text-zinc-700">CEO Universal</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-[25%] border p-10">
                <div class="text-center">
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <p class="pt-5 text-zinc-700">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                </div>
                <div class="flex justify-center items-center gap-5 pt-10">
                    <img src={two} alt=""/>
                    <div>
                        <p class="font-bold text-zinc-700">Justus Menke</p>
                        <p class="text-zinc-700">CEO Eronaman</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-[25%] p-10 border">
                <div class="text-center">
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <i class="fas fa-star text-orange-400"></i>
                    <p class="pt-5 text-zinc-700">On the other hand, we denounce with rightous indignation and dislike
                        men who are so beguild and
                        demoralized by the charms of pleasure.</p>
                </div>
                <div class="flex justify-center items-center gap-5 pt-10">
                    <img src={three} alt=""/>
                    <div>
                        <p class="font-bold text-zinc-700">Britain Eriksen</p>
                        <p class="text-zinc-700">CEO Universal</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex ml-auto mr-auto text-center gap-6 justify-center p-20">
            <a href="#" class="w-[50px] border border-black p-3 rounded-full text-center">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <a href="#" class="w-[50px] text-white p-3 rounded-full text-center bg-zinc-700">
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </section>
    
    </>
  )
}

export default Testimonial
