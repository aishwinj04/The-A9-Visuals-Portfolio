"use client"

import React, {useState, useEffect} from "react"
import Image from "next/image"
import project1 from "../../public/assets/proj1.png"
import project2 from "../../public/assets/proj2.png"
import project3 from "../../public/assets/proj3.png"


const projects = [
    {
        id: 1, 
        year: 2025, 
        title: "Toronto Tamil Book Fair 2025", 
        description: "Live-stream and photography coverage for the Toronto Tamil Book Fair 2025, delivering real-time event access and high-quality visual documentation that captured the energy and cultural significance of the fair.", 
        image: project1
    },

    {
        id: 2, 
        year: 2025, 
        title: "TMU TSA Maaveerar Naal 2025", 
        description: "Event photography coverage for Maaveerar Naal hosted by the TMU Tamil Students’ Association, documenting key moments and the atmosphere of remembrance through respectful visuals.", 
        image: project2
    }


];

export const Portfolio = () => {
    const [selectedProject, setSelectProject] = useState(projects[0])
    return (
        <section id="portfolio" className="py-32 text-white">
            <h2 className="text-6xl font-bold">Selected <span className="text-blue-300">Projects</span></h2>
        </section>
    );
};