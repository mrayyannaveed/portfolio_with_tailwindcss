import React from 'react'
import ProjectsComponent from './projectsComponent'

const ProjectsCom = () => {
    let projectsCom= [
        {
            heading: "Pak Wheels",
            desc: "A website for a car rental company",
            image: "/pakwheels.png",
            link: "https://my-pakwheels-app.vercel.app/"
        },
        {
            heading: "Panacloud Company Porfolio",
            desc: "A panacloud Website",
            image: "/panacloud.png",
            link: "https://company-portfolio-indol.vercel.app/"
        },
        {
            heading: "Static Resume Builder",
            desc: "My personal static resume",
            image: "/resume.png",
            link: "https://resume-builder-phi-red.vercel.app/"
        },
        {
            heading: "Chairs E-commerce Website",
            desc: "A e-commerce website for chairs",
            image: "/chairWeb.png",
            link: "https://ui-ux-hackathon-8.vercel.app/"
        },
        {
            heading: "Dynamic Editable Resume",
            desc: "My Personal Dynamic resume you can also generate your resume with it.",
            image: "/dynamicEditableResume.png",
            link: "https://unique-path-and-shareable-link-nu.vercel.app/"
        },
        {
            heading: "Portfolio With Simple Css",
            desc: "A personal porfolio using nextjs with vanilla css",
            image: "/cssPortfolio.png",
            link: "https://portfolio-with-css-8.vercel.app/"
        }
    ]
  return (
    <div className='text-white'>
        <section className='flex justify-around items-center flex-col h-[80vh] mb-10'>
            <h1 className="ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase text-center mt-20 mb-10">
                Projects
            </h1>
            <section className='grid xl:grid-cols-3 md:grid-cols-2 md:gap-y-14 md:gap-x-20  xl:w-[90vw] md:w-[85vw] w-[70vw] gap-5 mb-14'>
                {projectsCom.map((project: any) => {
                    return(
                        <ProjectsComponent head={project.heading} desc={project.desc} image={project.image} link={project.link} bg={project.bgcol} ani={project.ani}/>
                    )
                })}
            </section>
        </section>
    </div>
  )
}

export default ProjectsCom