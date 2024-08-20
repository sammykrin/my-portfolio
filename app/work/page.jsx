"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, 
         TooltipContent, 
         TooltipTrigger, 
         TooltipProvider 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects=[
  {
    num: "01",
    category: "fullstack",
    title: "Velocity-auotz",
    description: "Velocity-Autos: A modern car showcase platform that leverages all of the latest and greatest cars in the world.",
    stack: [{name: "Html 5"}, {name: "TypeScript"}, {name: "Tailwind CSS"},],
    image: "/assets/work/hero.png",
    live: "https://velocity-autoz.vercel.app/",
    github: "https://github.com/sammykrin/velocity_autos",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Ònkà Yorùbá: Numbers And Numbering System In Yorùbá ",
    stack: [{name: "HTML"}, {name: "JavaScript"}, {name: "Css 3"},],
    image: "/assets/work/thumb2.png",
    live: "https://onka.netlify.app/",
    github: "https://github.com/sammykrin/onka",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "A task tracker is an intelligent version of a to-do list that can help manage tasks and assignments. Team members can use task trackers individually or together as a team.",
    stack: [{name: "React.js"}, {name: "Css 3"}, {name: "JavaScript"},],
    image: "/assets/work/thumb3.png",
    live: "https://tasks-tracker-pro.netlify.app/",
    github: "https://github.com/sammykrin/react-task-tracker",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper) =>{
  // get current slide index
  const currentIndex = swiper.activeIndex;
  //update project state based on current slide index
  setProject(projects[currentIndex]);
}

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2
        xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">

            {/*outline num*/}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>

            {/*project category*/}
            <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize">
                 {project.category} project
            </h2>

            {/*projects description*/}
            <p className="text-white/60">{project.description}</p>

            {/*stack*/}
            <ul className="flex gap-4">
              {project.stack.map((item,index) =>{
                return(
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/*last comma removal*/}
                    {index !== project.stack.length -1 && ","}
                  </li>
                )
              })}
            </ul> 

            {/* border*/}
            <div className="border border-white/20"></div>

            {/*btn*/}
             <div className="flex items-center gap-4">

              {/*live btn*/}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p> 
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/*github btn*/}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p> 
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
             </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
            spaceBetween={30} 
            slidePreView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >

            {projects.map((project, index) => {
              return(
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                    {/*overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/*image*/}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill className="object-cover"
                        alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/*slider btn*/}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20
              w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center
              items-center transition-all"  />
          </Swiper>
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
