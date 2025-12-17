"use client";
import { motion } from "framer-motion";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

export const Hero = () => {
    return(
        <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#061426,#0D448C_35%,#2594D9_55%,#49C2F2_85%)]">
            <div className="absolute bg-black w-[3400] h-[1000] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#0D448C)] top-[450px]  border-[1px] border-[#2594D9]/30"/>

            <div className="container relative mx-auto px-4 px-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                   
                   
                    <motion.div
                        className="relative mb-8 mt-24"
                        initial={{opacity: 0, scale:0.5}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{duration: 1.5}}
                        whileTap={{transition:{duration: 1.5}, scale: 1.2}}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-trasparent rounded-full blur-3xl"></div>
                        <Image src={logo} alt="logo" className="w-[300px] relative z-10"></Image>
                    </motion.div>


                    <motion.div
                        className="max-w-2xl"
                        initial={{opacity:0, y:20}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1.5}}
                    >
                        <h1 className="hero-title text-6xl text-white/90 max-w-none mx-auto leading-snug mb-6">
                            Welcome to <br/> <span className="text-blue-300 text-8xl">The A9 Visuals</span>
                        </h1>
                        <p className="hero-p text-xl text-white/80 max-w-none mx-auto font-bold leading-relaxed mb-6">
                            A Toronto-based visual production studio specializing in videography and post-production, delivering cinematic visuals through thoughtful storytelling and clean, modern editing.
                        </p>

                        <div className="flex gap-8 justify-center">
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-400/60 rounded-full font-bold hover:bg-blue-700 transition-colors"
                                whileHover={{scale:1.2}}>
                                Contact Me
                            </motion.button>

                            <motion.button
                                className="px-6 px-3 border border-blue-200/20 border-[1px] rounded-full font-bold hover:bg-blue-700 transition-colors"
                                whileHover={{scale:1.2}}>
                                View Work
                            </motion.button>
                        </div>


                    </motion.div>



                   
                </div>
                <motion.div></motion.div>
            </div>

           
        </div>
    );
};
