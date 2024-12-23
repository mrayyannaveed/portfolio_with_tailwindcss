"use client"
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Aboutcom = () => {
  return (
    <div>
        <section className='flex flex-col gap-5 justify-center h-[100vh] items-center text-center lg  mt-10
        w-[90%] sm:w-[70%] md:w-[65%] lg:w-[60%] m-auto'>
            <div id="right-cont" className="border-[15px] mb-14 rounded-full border-solid border-red-600 animate-pulse">
               <Image className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full" src="/rayyan2.jpeg" alt="Rayyan Naveed" width={500} height={500}></Image>
            </div>
            <div className='text-lime-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif'>
            <h1 className="ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase mb-1">
              <span className="text-lime-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-white">A</span>bout Me
            </h1>
          <h3
              className="title-font sm:text-4xl text-3xl mb-4 font-serif font-semibold relative overflow-hidden">

            <Typewriter
                options={{
                    strings: ['Exploring My Passion for Technology and Business!...'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </h3>
        </div>
        <div className="text-left w-[90%]">
                <p className="mb-8 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa quas perferendis voluptas corrupti minima voluptatem! Beatae, accusantium nihil odio omnis sunt pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque explicabo dignissimos quam ad maiores at enim quisquam excepturi hic accusamus!</p>
            </div>
            <div className="flex gap-12 animate-bounce">
                <Link className="bg-blue-700 rounded-3xl h-10 w-16 flex justify-center items-center text-center hover:bg-blue-400" href={"https://www.facebook.com/rayyan.naveed.33?mibextid=ZbWKwL"} target="_blank">
                    <FaFacebook className="text-2xl text-white"/>
                </Link>
                <Link className="bg-pink-600 rounded-3xl h-10 w-16 flex justify-center items-center text-center hover:bg-pink-400" href={"https://www.instagram.com/rayyan_naveed_10/profilecard/?igsh=dHdiN2hraGZuNm44"} target="_blank">
                <FaInstagram className="text-2xl text-white"/>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Aboutcom