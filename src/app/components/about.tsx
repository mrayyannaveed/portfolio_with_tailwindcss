"use client"
import Image from 'next/image'
import React from 'react'
// import rayyan from "../../../public/rayyan.png"
import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Aboutcom = () => {
  return (
    <div>
        <section className='flex flex-col justify-center h-[100vh] items-center text-center lg w-full mt-10'>
            <div id="right-cont" className="border-[15px] mb-14 rounded-full border-solid border-red-600 animate-pulse">
               <Image className="w-[350px] h-[350px] object-cover rounded-full" src="/rayyan.png" alt="Rayyan Naveed" width={200} height={200}></Image>
            </div>
            <div className='text-lime-600 text-5xl font-serif'>
            <h1 className="ml-3 text-4xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase">
              <span className="text-lime-600 text-5xl hover:text-white">A</span>bout Me
            </h1>
          <h3
              className="title-font sm:text-4xl text-3xl mb-4 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >

            <Typewriter
                options={{
                    strings: ['Exploring My Passion for Technology and Business!...'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </h3>
        </div>
        </section>
    </div>
  )
}

export default Aboutcom