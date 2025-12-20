"use client"
import {AiFillInstagram} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

import Image from "next/image";
import logo from "../../public/assets/logo.png";

import {motion} from "framer-motion";

const socialLinks = [
    {href: "https://www.instagram.com/thea9visuals/", Icon: AiFillInstagram, label: "Instagram" },
    {href: "https://www.instagram.com/thea9visuals/", Icon: FaLinkedin, label: "Linkedin" },
    
]

export const Footer = () => {
    return(
        <footer className="px-4 py-0">
           <motion.div className="container mx-auto"
            initial={{opacity:0, x:-20}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: 1.2}}
            viewport={{once:false}}>
            <Image src={logo} alt="logo" className="w-[300px] mx-auto"></Image>
                
           
           </motion.div>
            <h3 className="text-md text-white font-light text-center">© 2025 The A9 Visuals. All Rights Reserved</h3>

        </footer>
        

    );
};