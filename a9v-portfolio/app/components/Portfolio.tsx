"use client"

import React, {useState, useEffect} from "react";
import Image from "next/image";
import project1 from "../../public/assets/proj1.png";
import project2 from "../../public/assets/proj2.png";
import project3 from "../../public/assets/proj3.png";
import project4 from "../../public/assets/proj4.png";
import project5 from "../../public/assets/proj5.png";
import project6 from "../../public/assets/proj6.png";
import project7 from "../../public/assets/proj7.png";
import {motion} from "framer-motion";


const projects = [

    {
        id: 1, 
        year: 2025, 
        title: "Toronto Tamil Book Fair", 
        description: "Live-stream and photography coverage for the Toronto Tamil Book Fair 2025, delivering real-time event access and high-quality visual documentation that captured the energy and cultural significance of the fair.", 
        image: project1,
        projectLink: "https://torontotamilbookfair.com/gallery/"

    },

       {
        id: 2, 
        year: 2025, 
        title: "USSTM Holiday Fest", 
        description: "We captured the energy and festive spirit of Toronto Metropolitan University's annual Holiday Fest. From student club activities to giveaways and cozy winter vibes, this project highlights the day through dynamic videography and storytelling, bringing the campus celebration to life.", 
        image: project4,
        projectLink: "https://www.instagram.com/reel/DRlT05akZBb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },

     {
        id: 5, 
        year: 2025, 
        title: "Tamil Fest Promotional Designs", 
        description: "We served as the official Multimedia Design team for Tamil Fest 2025, Canada’s largest Tamil street festival. Our work included promotional video edits, social media launch content, poster design, and WordPress website updates, ensuring a cohesive and consistent visual identity across all platforms.", 
        image: project5,
        projectLink: "https://www.linkedin.com/posts/a9visuals_tamilfest-graphicdesign-photoshop-activity-7373479523574673408-9NVP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADydPQ0Bes5Z1khKA5lhdXHMKxbpAfeoZnU"
    },

    {
        id: 3, 
        year: 2025, 
        title: "TMU TSA Maaveerar Naal", 
        description: "Event photography coverage for Maaveerar Naal hosted by the TMU Tamil Students’ Association, documenting key moments and the atmosphere of remembrance through respectful visuals.", 
        image: project2,
        projectLink: "https://www.linkedin.com/feed/update/urn:li:activity:7397631133603094528"
    },

    {
        id: 4, 
        year: 2025, 
        title: "TMU TSA Vaanganna Vanakkanganna", 
        description: "We collaborated with the Toronto Metropolitan University Tamil Students Association to capture and produce a full event recap for their annual Fall Mixer. From on-site filming to post-production, this project focused on highlighting the energy, community, and atmosphere of the night through dynamic visuals and storytelling.", 
        image: project3,
        projectLink: "https://www.instagram.com/reel/DQaV5UoD8e7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },

    {
        id: 6, 
        year: 2025, 
        title: "Tamil Canadian Walkathon", 
        description: "The A9 Visuals was hired as the Design and Photography team for the Tamil Canadian Walk 2025, held on July 13, 2025, in support of York University. Our work spanned across graphic design, t-shirt design, event photography, videography, recap videos, and highlight reels, a rewarding opportunity to use creativity and visuals to support an important cause.", 
        image: project7,
        projectLink: "https://www.linkedin.com/posts/a9visuals_tamilcanadian-walkathon-poster-activity-7373503334663643137-ieT4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADydPQ0Bes5Z1khKA5lhdXHMKxbpAfeoZnU"
    },

     {
        id: 7, 
        year: 2025, 
        title: "Winter Glow - Sankofa Square Reel", 
        description: "A cinematic winter edit capturing the energy and warmth of Sankofa Square’s Winter Glow. Through dynamic motion, vibrant lighting, and atmospheric details, this piece highlights the contrast between the cold season and the lively spirit of the space, transforming a public square into an immersive visual experience.", 
        image: project6,
        projectLink: "https://www.instagram.com/reel/DSOOyccEY2Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },


  



];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    return (
        <section id="portfolio" className="py-32 text-white">
            <div className="mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-12"> 
                <div>
                    <h2 className="text-6xl font-bold mb-10">Featured <span className="text-blue-300">Projects</span></h2>
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group" >
                        
                            <p className="text-blue-400 text-lg mb-2">{project.year}</p>
                            <motion.h3 className={`text-3xl font-semibold group-hover:text-blue-400 transition-colors
                                ${selectedProject.id === project.id ? 'text-blue-500' : ''} duration-300`
                                } whileHover={{scale:1.01}}>{project.title}</motion.h3> {/* selection to change textcolor */}

                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-blue-200 my-4"></div> // shows white border under selected div 
                            )}

                            {selectedProject.id === project.id && (
                                <p className="text-gray-400">
                                    {project.description}
                                </p> // displays project desc 
                            )}

                            {selectedProject.id === project.id && (
                                <div className="flex justify-end py-2">
                                    <a href={project.projectLink} target="_blank">
                                        <motion.button className="px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-400/60 rounded-full font-bold hover:bg-blue-700 cursor-pointer transition-colors"
                                        whileHover={{scale:1.2}}>
                                            
                                            {(selectedProject.id === 2 || selectedProject.id === 4) ? "View Video" : "View More"}
                                        </motion.button> 
                                    </a>
                                    
                                </div>
                               
                            )}



                            

                        </div>

                    ))}

               

                </div>
                

                <Image 
                    src={selectedProject.image.src}
                    alt={selectedProject.title} 
                    width={800}
                    height={400}
                    className="rounded-xl shadow-xl my-auto">
                </Image>

                

             </div>
            

        </section>
    );
};