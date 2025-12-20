
export const Services = () => {
    const servicesArr = [
        {
            id: 1,
            title: "Event Videography",
            description: "Video coverage for student events, mixers, and client gatherings. From capturing key moments to crowd energy and atmosphere, we create recaps that reflect the true vibe of each event.",

        },

        {
            id: 2,
            title: "Highlight and Recap Videos",
            description: "High-energy highlight reels and recap videos designed for social media and digital platforms, turning events into shareable visual stories.",

        },
        
         {
            id: 3,
            title: "Promotional Content",
            description: "Short-form promotional videos and visuals for clubs, brands, and organizations to help market events, launches, and initiatives.",

        },

        {
            id: 4,
            title: "Video Editing & Creative Edits",
            description: "Clean, engaging edits with color grading, pacing, and music selection to elevate raw footage into polished final content.",

        },
        {
            id: 5,
            title: "Graphic Design",
            description: "Design of posters, digital flyers, and promotional graphics that support events and campaigns across social media.",

        },
        {
            id: 6,
            title: "Social Media Content",
            description: "Content tailored for Instagram and digital platforms (posts, stories, reels), optimized for engagement, storytelling, and visual consistency.",

        },
        {
            id: 7,
            title: "Web Design",
            description: "Visually driven frontend websites for creatives and studios, designed to showcase portfolios, projects, and brand identity through clean layouts and thoughtful interactions.",

        },
        
    ]
    return(
        <section className="text-white py-32">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
                <div className=" md:w-1/4 mb-12 md:mb-20 mr-20">
                    <h2 className="text-6xl font-bold sticky top-30">Services</h2>

                
                </div>

                <div className="md: w-3/4">
                    {servicesArr.map((service) => (
                        <div 
                        key={service.id}
                        className="mb-14 flex items-start">
                            <div>
                                <h3 className="text-blue-300 font-bold text-5xl mr-6">{service.id}</h3>
                                

                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                                

                            </div>

                        </div>

                    ))}
                
                </div> 


              

            </div>

        </section>
    

    )
   
}