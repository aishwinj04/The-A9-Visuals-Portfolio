"use client"

import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {motion} from "framer-motion";

const navLinks =[
    {title: "↑", path:"#hero"},
    {title: "About", path: "#about"},
    {title: "Portfolio", path: "#portfolio"},
    {title: "Services", path: "#services"},
    {title: "Contact", path: "#contact"}

]

export const Navbar = () => {
    const [nav, setNav] = useState(false) // track if mobile menu is open and to update

    const toggleNav = () =>{
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className="z-20 fixed flex justify-center w-full text-white font-bold">

            <div className="border border-white/10 mt-8 backdrop-blur-lg rounded-3xl hidden md:flex items-center justify-center p-2  mx-auto">
                <ul className="flex flex-row p-2 gap-8">
                    {navLinks.map((link, index) => (
                        <motion.li key={index} whileHover={{scale:1.1}}>
                            <Link href={link.path} className="text-md transition-all duration-100 hover:text-blue-300">
                            {link.title}
                            
                            </Link>

                        </motion.li>

                    ))}
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden absolute mt-5 right-[15px] border rounded z-30 text-whte/70 border-white/70 p-2">
                    
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            
            </div>

            <div className={`z-20 fixed left-0 top-0 w-full h-full bg-black/90 duration-300
                ${nav ? "translate-x-0" : "-translate-x-full"}`}>

                    <ul className="flex flex-col items-center justify-center gap-12 h-full">
                        {navLinks.map((link, index) => (
                            <motion.li key={index}>
                                <Link href={link.path} onClick={closeNav} className="text-5xl transition-all duration100">
                                
                                    {link.title}</Link>

                            </motion.li>
                        ))}

                    </ul>
                    
                </div>




        </div>
    )

}