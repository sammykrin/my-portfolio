"use client";

import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs, 
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMicrosoftazure,} from "react-icons/si";
import { DiWindows } from "react-icons/di";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiFirewall } from "react-icons/gi";

//about 
const about = {
  title: "About me",
  description: "I am an innovative front-end developer with solid years of experience building and maintaining responsive websites and apps in collaborative enivroments with passion for teamwork and results.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Samuel Olamilehin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 7867 218625",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "olamilehinsamueloffical@gmail.com",
    },
  ]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "The illiterate of the future will not be the person who cannot read. It will be the person who does not know how to learn.",
  items: [
    {
      company: "Digit Info & Software Tech",
      position: "Frontend Developer",
      duration: "2022-2024",
    },
    {
      company: "E-commerce.",
      position: "Freelance",
      duration: "2021",
    },
    {
      company: "Editior General.",
      position: "Front-End Developer Intern",
      duration: "2019-2020",
    },
    {
      company: "SQI.",
      position: "Full-Stack Intern",
      duration: "Summer 2018",
    },
  ]
};

//experience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education / Certificate",
  description: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  items: [
    {
      institution: "La plage Meta verse",
      degree: "Certified Intro to Cybersecurity",
      duration: "2023",
    },
    {
      institution: "Oke-Mosan, Abeokuta Ogun State",
      degree: "NYSC",
      duration: "2019-2020",
    },
    {
      institution: "Adeleke University",
      degree: "B.Sc(Hons) Computer Science",
      duration: "2015-2019",
    },
    {
      institution: "Federal Government College Ogbomoso",
      degree: "GCSE",
      duration: "2011-2014",
    },
  ]
};

//skills
const skills ={
  title: "My Skills",
  description: "I'm quietly confident, naturally curious and perpetually working on improving my chops one design problem at a time.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Booststrap",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwaind.css",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "Microsoft Azure",
    },
    {
      icon: <DiWindows />,
      name: "Windows",
    },
    {
      icon: <GiFirewall />,
      name: "Firewall",
    },
    {
      icon: <RiCustomerService2Line />,
      name: "Customer Interaction",
    }
    
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1, 
        transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
         className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
      >
        <div className="container mx-auto">
          <Tabs 
            defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            {/*contents*/}
            <div className="min-h-[70vh] w-full">
              {/*experience*/}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) =>{
                         return  (
                            <li key={index} className="bg-[#232329] h-[178px] py-6 px-10 rounded-xl 
                                        flex flex-col items-center justify-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                {/*dot*/}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>


                {/*education*/}
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) =>{
                         return  (
                            <li key={index} className="bg-[#232329] h-[178px] py-6 px-10 rounded-xl 
                                        flex flex-col items-center justify-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                {/*dot*/}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                
                {/*skills*/}
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:grid-[30px]">
                      {skills.skillList.map((skill, index)=>{
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded:xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>

                {/*about*/}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[710px] mx-auto xl:mx-0">
                      {about.info.map((item,idex)=>{
                        return(
                          <li key={idex} className="flex items-center justify-center xl:justify-start gap-4">
                             <span className="text-white/60">{item.fieldName}</span> 
                             <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume;
