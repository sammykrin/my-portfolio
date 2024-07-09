"use client";

import { useRef } from "react";
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

import { FaPhoneAlt,FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info=[
   {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 810 236 4785",
   },
   {
    icon: <FaEnvelope />,
    title: "Email",
    description: "olamilehinsamueloffical@gmail.com",
   },
   {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Peace Villa Papa Ajishan",
   },
]

import { motion } from "framer-motion";


const Contact = () => {
  const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_fhqrta5',
                'template_btnq9t8',
                refForm.current,
                'xCF8_9Il8kQRZ-nCg'
            )
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }} 
    className="py-6"
    >
       <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={refForm} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"><div>Let&apos;s</div> work together</h3>
              <p className="text-white/60">I am interested in freelance opportunities - especially large projects.
                    However, If you have other request or questions about Tech, Autos or Gadgets.
                    Please fill out the form below to discuss any work opportunities.
              </p>

              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name_id" type="name" placeholder="Your Name" required/>
                <Input name="email_id" type="email" placeholder="Email Address" required/>
                <Input name="phone_id" type="phone" placeholder="Phone Number" required/>
              </div>

              {/*select*/}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem  value="web_id">Web Development</SelectItem>
                      <SelectItem  value="cyber_id">Cyber Services</SelectItem>
                      <SelectItem  value="auto_id">Auto/Gadgets</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/*textarea*/}
                  <Textarea
                    name="message" 
                    className="h-[200px]" 
                    placeholder="Type your message here." 
                    required
                  />

                  {/*btn*/}  
                  <Button type="submit" size="md" className="max-w-40" value="send">
                    Send
                  </Button>
            </form>
          </div>

          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
       </div>
    </motion.section>
  )
}

export default Contact;
