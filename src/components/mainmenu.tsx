"use client"
import { useMediaQuery } from './hooks/use-media-query';
import React from 'react'
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { MenuIcon } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import Image from 'next/image';
import rayyan from "../../public/rayyan.png"

const MainMenu = () => {
    const isDesktop = useMediaQuery("(min-width: 860px)");
  return isDesktop ? (
  <div><Navbar/></div>
  ) : (
  <div>
    <header>Muhammad Rayyan Naveed</header>
    <Drawer direction='right'>
        <DrawerTrigger>
            <MenuIcon className='text-3xl text-white'/>
        </DrawerTrigger>
        <DrawerContent>
        <nav className="bg-orange-900 h-full py-2 font-[poppins] flex flex-col flex-wrap justify-evenly items-cente">
        <section className="flex items-start sm:items-center gap-4 sm:flex-row flex-col">
          <div className="border-solid border-red-600 
          border-4 rounded-full " >
            <Image className="object-cover h-20 w-20 rounded-full" src={rayyan} alt="Rayyan Naveed" 
            width={100} height={100}></Image>
          </div>
          <div className="animate-bounce">
            <h1 className="text-5xl text-white font-bold ">Portfolio</h1>
          </div>
        </section>
        <section className="">
            <ul className="flex flex-col flex-wrap justify-between h-[50vh] animate-pulse text-white text-2xl font-medium">
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/about"}>About</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/skills"}>Skills</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/projects"}>Projects</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/services"}>Services</Link></li>
                <li className="hover:text-red-400 hover:text-[30px]"><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </section>
      </nav>
        </DrawerContent>
    </Drawer>
  </div>
  ); 
}

export default MainMenu