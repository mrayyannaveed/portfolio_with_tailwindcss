import React from 'react'
import ServeComponent from './serveComponent'
import { Brush, CodeXml, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ServicesCom = () => {
    type com = {
        heading: string,
        desc: string,
        bgcol: string,
        atribute: any
    }
    let servesCom: com[] = [
        {
            heading: "Web Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias voluptate consequatur ea tempore soluta, quasi nisi autem qui odit.",
            bgcol: "bg-gradient-to-br from-blue-500 to-yellow-400",
            atribute: <CodeXml className='text-white h-16 w-16 p-2'/> 
        },
        {
            heading: "Web Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias voluptate consequatur ea tempore soluta, quasi nisi autem qui odit.",
            bgcol: "bg-gradient-to-br from-pink-500 to-yellow-400",
            atribute: <Brush className='text-white h-16 w-16 p-2'/> 
        },
        {
            heading: "Responsive Web Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias voluptate consequatur ea tempore soluta, quasi nisi autem qui odit.",
            bgcol: "bg-gradient-to-br from-green-500 to-yellow-400",
            atribute: <Smartphone className='text-white h-16 w-16 p-2'/> 
        }
    ]
  return (
    <div>
        <section className='flex justify-around items-center flex-col h-[100vh] bg-yellow-5 mb-10'>
            <h1 className="ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase text-center mt-20">
                Services
            </h1>
            <section className='grid lg:grid-cols-3 w-[90vw] gap-5 mb-14'>
                {servesCom.map((servives) => {
                    return(
                        <ServeComponent head={servives.heading} desc={servives.desc} atr={servives.atribute} bg={servives.bgcol}/>
                    )
                })}
            </section>
        <Link className='flex justify-center mb-20' href={"/contact"}>
            <Button className='bg-gradient-to-br from-pink-600 to-yellow-400
             md:text-2xl text-xl md:px-6 md:py-5 hover:bg-gradient-to-tr hover:from-slate-700 hover:to-green-400'>Contact Me</Button>
        </Link>
        </section>
    </div>
  )
}

export default ServicesCom