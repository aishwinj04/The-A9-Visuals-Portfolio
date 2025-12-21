"use client"

import {motion} from "framer-motion";


export const Contact = () => {
    return(
        <section id="contact" className="py-32 text-whtie max-w-[1200px] mx-auto px-4">
            <motion.div
                className="grid lg:grid-cols-2 gap-16"
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.1}}
                viewport={{once:true}}>

                <div className="space-y-12">
                    <motion.h2
                        className="text-6xl font-bold text-white"
                        initial={{opacity:0, x: -20}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.6}}> 

                        Contact <span className="text-blue-300">Us</span>
                    </motion.h2>

                    <motion.div
                        className=" p-8 rounded-2xl space-y-8"
                        initial={{opacity:0, x: -20}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.6}}>

                            <div className="space-y-2">
                                <p className="text-lg text-gray-300">Email</p>
                                <a href="mailto:thea9visuals@gmail.com" className="text-2xl font-semibold hover:text-blue-300 transition-all duration-300">
                                    thea9visuals@gmail.com <span className="text-blue-300/60 pl-2">↗</span>
                                </a>

                            </div>

                            <div className="space-y-2">
                                <p className="text-lg text-gray-300">Instagram</p>
                                <a href="https://www.instagram.com/thea9visuals/" target="_blank" className="text-2xl font-semibold hover:text-blue-300  transition-all duration-300">
                                    @thea9visuals <span className="text-blue-300/60 pl-2">↗</span>
                                </a>

                            </div>

                    </motion.div>

                </div>

                <motion.div
                    className="min-h-[500px] rounded-2xl"
                    initial={{opacity:0, x:20}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration:0.6}}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.536949746959!2d-79.38288942413061!3d43.65780145640121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb35431c1395%3A0xe8ed8bd69125d6f4!2sToronto%20Metropolitan%20University!5e0!3m2!1sen!2sca!4v1766214385534!5m2!1sen!2sca"
                        width="100%" height="100%" style={{border:16}} allowFullScreen loading="lazy"></iframe>

                </motion.div>



              
          

                

                


            </motion.div>

        </section>

    );
   
};

/* Google maps embed 

*/