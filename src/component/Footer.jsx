import React from 'react'
import scooter from '../assets/footer scooter.png'

const Footer = () => {
  return (
    <>
      <section class=" bg-zinc-700">
        <div class="w-full flex flex-col md:flex-row justify-between mt-20">
            <img class="relative bottom-20" src={scooter} alt=""/>
            <div class="w-full flex flex-col md:flex-row justify-center gap-10 md:gap-0 md:justify-around items-center md:items-start md:pt-36 text-white">
                <div class="flex flex-col gap-8 justify-center items-center">
                    <h1 class="text-4xl font-bold">About</h1>
                    <ul class="leading-10 text-center">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="flex flex-col gap-8 justify-center items-center">
                    <h1 class="text-4xl font-bold">Resources</h1>
                    <ul class="leading-10 text-center">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Application</a></li>
                        <li><a href="#">FAQ Features</a></li>
                    </ul>
                </div>
                <div class="flex flex-col gap-8 justify-center items-center ">
                    <h1 class="text-4xl font-bold">Legals</h1>
                    <ul class="leading-10 text-center">
                        <li><a href="#">Copyright Privacy</a></li>
                        <li><a href="#">Policy Disclaimer</a></li>
                        <li><a href="#">Terms</a></li>
                        <div class="flex gap-9 pt-5">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
        <p class="text-white text-center pb-3 mt-5">&copy; Copyright 2024. All rights reserved.</p>
    </section>
    </>
  )
}

export default Footer
