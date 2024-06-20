import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: "https://github.com/sammykrin/"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/samuel-olamilehin-984888250/"},
  {icon: <FaTwitter />, path: "https://twitter.com/Olapapzy/"},
  {icon: <FaWhatsapp />, path: "http://wa.me/2348102364785"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index)=>{
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      )
    })}
      
    </div>
  );
};

export default Socials;
