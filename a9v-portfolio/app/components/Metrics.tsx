"use client"
import React from "react";
import {motion, useInView} from "framer-motion";


const metricsArr = [
    {
        id: 1,
        value: "40",
        label: "Creative Projects Delivered",
        description: "Delivered a wide range of creative projects across videography, photography, editing, graphic design tailored to client's vision and audience."


    },

    {
        id: 2,
        value: "15+",
        label: "Events Documented",
        description: "Captured a wide range of events, from student-led initiatives to client events, focusing on key moments, atmosphere, and authentic storytelling across diverse environments."

        
    },

    {
        id: 3,
        value: "45K",
        label: "Social Media Views",
        description: "Generated over 30,000 views across Instagram content within a three-month period, reflecting strong audience engagement and visual reach."
        

    },

    {
        id: 4,
        value: "4+",
        label: "Creative Disciplines",
        description: "Videography, photography, editing, graphic design, and web, ensuring cohesive visuals across platforms."

       
    },

    {
       
         id: 5,
        value: "100%",
        label: "Hands-On Production",
        description: "Every project personally filmed, edited, and delivered to maintain consistency and creative control."


    },
    {
       
        id: 6,
        value: "100+",
        label: "Hours of Footage Edited",
        description: "Cumulatively edited and refined over 70 hours of raw footage across multiple events and creative projects."


    }

];

export const Metrics = () => {
    const ref = React.useRef<HTMLElement>(null);

    const isInView = useInView(ref, {once: false}); // ref attached with section tag 
    return(

       <motion.section
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
            transition={{duration: 0.8}}
            className="container mx-auto px-4 py-5 text-white"
            
            >
                <motion.h2 
                className="text-6xl font-bold mb-12 "
                initial={{opacity:0, y:20}}
                animate={isInView ? {opacity:1, y:0} : {opacity:0, y:20}}
                transition={{duration: 0.6}}>
                    Key <span className="text-blue-300">Metrics</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metricsArr.map((metric, index) => (
                      <motion.div 
                        key={metric.id}
                        className="flex flex-col"
                        initial={{opacity:0, y: 20}}
                        animate={isInView ? {opacity:1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration:4}}>
                            
                            <motion.h3
                                className="text-5xl font-bold text-blue-300 mb-2"
                                initial={{scale: 0.5}}
                                animate={isInView ? {scale: 1} : {scale: 0.5}}
                                transition={{delay: 0.3 + index  * 0.1, duration: 0.5}}>

                                    {metric.value}
                            </motion.h3>

                            <motion.p
                                className="text-2xl font-semi-bold text-gray-300 mb-2"
                                initial={{opacity: 0}}
                                animate={isInView ? {opacity: 1} : {opacity: 0}} 
                                transition={{delay:0.5 + index * 0.1, duration: 0.5 }}>
                                    
                                    {metric.label}
                            </motion.p>

                            <motion.p
                                className="font-light text-gray-200 mt-4"
                                initial={{opacity: 0}}
                                animate={isInView ? {opacity:1} : {opacity:0}}
                                transition={{delay: 0.5 + index * 0.1, duration: 0.5}}>
                                    
                                    {metric.description}
                            </motion.p>



                           

                      </motion.div>  
                        

                    ))}

                </div>

       </motion.section>
        
        
    );
};