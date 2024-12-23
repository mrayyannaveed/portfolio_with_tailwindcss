"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import rayyan from "../../../public/rayyan2.jpeg";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div className="">
      <section className="flex lg:justify-evenly flex-col-reverse lg:flex-row items-center h-[85vh] ">
        <section className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] gap-5 bg-blue-30 flex flex-col items-center lg:items-start">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-lime-500 font-serif font-bold hover:uppercase hover:text-lime-400">
                <div>
                <h1 className="flex items-center leading-relaxed">Hello,</h1>
                <Typewriter
                    options={{
                    strings: ['My Self Rayyan Naveed...', 'I am Web Developer...'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
            </h1>
            <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[60%] text-left">
                <p className="mb-8 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa quas perferendis voluptas corrupti minima voluptatem! Beatae, accusantium nihil odio omnis sunt pariatur?</p>
            </div>
            <div className="flex gap-12 animate-bounce">
                <Link className="bg-slate-700 rounded-3xl h-10 w-16 flex justify-center items-center text-center hover:bg-slate-400" href={"https://github.com/dashboard"} target="_blank">
                    <FaGithub className="text-2xl text-white"/>
                </Link>
                <Link className="bg-blue-600 rounded-3xl h-10 w-16 flex justify-center items-center text-center hover:bg-blue-400" href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target="_blank">
                <FaLinkedin className="text-2xl text-white"/>
                </Link>
            </div>
        </section>
            <div id="right-cont" className="border-[15px] rounded-full border-solid border-red-600 animate-bounce">
               <Image className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] sm:w-[220px] sm:h-[220px] object-cover rounded-full" src={rayyan} alt="Rayyan Naveed" width={300} height={300}></Image>
            </div>
      </section>
    </div>
  );
};

export default Hero;
