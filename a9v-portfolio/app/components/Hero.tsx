"use client";
import { motion } from "framer-motion";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

export const Hero = () => {
    return(
        <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#061426,#0D448C_35%,#2594D9_55%,#49C2F2_85%)]">
            <div className="absolute bg-black w-[3400] h-[1000] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#0D448C)] top-[450px]  border-[1px] border-[#2594D9]/30"/>

            <div className="container relative mx-auto px-4 pt-5 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                   
                  
                    <motion.div
                        className="relative mb-8 mt-5"
                        initial={{opacity: 0, scale:0.5}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{duration: 1.5}}
                        whileTap={{transition:{duration: 1.5}, scale: 1.2}}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/10 to-trasparent rounded-full blur-3xl"></div>
                        <Image src={logo} alt="logo" className="w-[300px] md:w-[350px] relative mt-10 z-10"></Image>
                    </motion.div>


                    <motion.div
                        className="max-w-2xl"
                        initial={{opacity:0, y:20}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1.5}}
                    >
                        <motion.h1 className="hero-title text-5xl md:text-7xl text-white/90 max-w-none mx-auto leading-snug mb-6" whileHover={{scale: 1.12}}>
                            Welcome to <br/> <span className="text-blue-300 text-6xl md:text-8xl">The A9 Visuals</span>
                        </motion.h1>
                        <p className="hero-p text-lg md:text-2xl text-white/80 max-w-none mx-auto font-bold leading-relaxed mb-6">
                            We are a Toronto-based visual production team specializing in videography and post-production, crafting engaging visuals through storytelling and precise editing. 
                            Our services also include web and graphic design, ensuring a cohesive brand experience.
                        </p>

                        <div className="flex gap-8 justify-center">
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400/60 rounded-full font-bold hover:bg-blue-700 transition-colors"
                                whileHover={{scale:1.2}}>
                                Contact Us
                            </motion.button>

                            <motion.button
                                className="px-6 py-3 border border-blue-100/20 border-[1px] rounded-full font-bold hover:bg-blue-700 transition-colors"
                                whileHover={{scale:1.2}}>
                                View Work
                            </motion.button>

                            <a href="https://www.instagram.com/thea9visuals/" target="_blank">
                             <motion.button
                                    className="px-6 py-3 border border-blue-100/20 hover:bg-[linear-gradient(to_right,#ec0075_15%,#ff6903_55%,#ffd366_85%)] rounded-full font-bold transition-colors"
                                    whileHover={{scale:1.2}}>
                                    Follow Us
                                </motion.button>
                                
                            </a>
                           
                             
                        </div>


                    </motion.div>



                   
                </div>
                <motion.div></motion.div>
            </div>

           
        </div>
    );
};
