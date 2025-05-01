import React from 'react'
import { DiHtml5 } from 'react-icons/di'
import SkillsComponent from './skillsComponent'
import { FaCss3Alt } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const SkillsCom = () => {
    type com = {
        heading: string,
        desc: string,
        bgcol?: string,
        atribute?: any
        ani?: any
    }
    let skillsCom: com[] = [
        {
            heading: "Html",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-pulse",
            atribute: <DiHtml5 className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-orange-700 to-orange-400"
        },
        {
            heading: "CSS",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-spin",
            atribute: <FaCss3Alt className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-blue-700 to-blue-400"
        },
        {
            heading: "Tailwind CSS",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-bounce",
            atribute: <RiTailwindCssFill className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-lime-400 to-zinc-800"
        },
        {
            heading: "Typescript",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-pulse",
            atribute: <SiTypescript className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-blue-700 to-blue-800"
        },
        {
            heading: "NextJs",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-pulse",
            atribute: <RiNextjsFill className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-slate-400 to-zinc-800"
        }
    ]
  return (
    <div className='text-white'>
        <section className='flex justify-around items-center flex-col h-[80vh] bg-yellow-5 mb-10'>
            <h1 className="ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase text-center mt-20 mb-10">
                Skills
            </h1>
            <section className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-10  lg:w-[95vw] w-[80vw] gap-5 mb-14'>
                {skillsCom.map((skills) => {
                    return(
                        <SkillsComponent head={skills.heading} desc={skills.desc} atr={skills.atribute} bg={skills.bgcol} ani={skills.ani}/>
                    )
                })}
            </section>
        </section>
    </div>
  )
}

export default SkillsCom