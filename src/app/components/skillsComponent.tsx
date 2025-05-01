import React from 'react'

const SkillsComponent = (props:any) => {
  return (
    <div>
        <section className={`text-white w-full lg:w-[90%] flex flex-col items-center rounded-xl gap-5 mb-10 bg-slate-700 py-10 ${props.bg}`}>
            <div className={`rounded-full border-4 hover:rotate-[25deg] h-20 w-20 flex justify-center items-center ${props.ani}`}>
                {props.atr}   
            </div>
            <h1 className='text-2xl font-semibold'>{props.head}</h1>
            <p className='text-lg text-center'>{props.desc}</p>
        </section>
    </div>
  )
}

export default SkillsComponent