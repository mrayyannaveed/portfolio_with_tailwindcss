"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import rayyan from "../../../public/rayyan.png";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div>
      <section className="flex justify-evenly items-center h-[100vh]">
        <section className="w-[60%] grid gap-5">
            <h1 className="title-font text-5xl mb-5 text-lime-500 font-serif font-bold ml-5 hover:uppercase hover:text-lime-400">
                <div>
                <h1 className="flex items-center leading-relaxed">Hello,</h1>
                <Typewriter
                    options={{
                    strings: ['I am Rayyan Naveed...', 'I am Web Developer...'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
            </h1>
            <div className="w-[60%]">
                <p className="mb-8 leading-relaxed ml-10 text-white"
             data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa quas perferendis voluptas corrupti minima voluptatem! Beatae, accusantium nihil odio omnis sunt pariatur?</p>
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
               <Image className="w-[300px] h-[300px] object-cover rounded-full" src={rayyan} alt="Rayyan Naveed"></Image>
            </div>
      </section>
    </div>
  );
};

export default Hero;
