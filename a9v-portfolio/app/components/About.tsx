import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import exp1 from "../../public/assets/expertise1.png";
import exp2 from "../../public/assets/expertise2.png";
import goals from "../../public/assets/goals.png";





export const About = () => {
    return(
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">About <span className="text-blue-300">Us</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">
                    At The A9 Visuals, we transform moments into stunning visual stories. Whether it’s capturing events, creating promotional content, or crafting cinematic experiences, our passion is bringing ideas to life through high-quality videography and photography.
                    We combine creativity, technical expertise, and a keen eye for detail to ensure every frame tells your story the way it deserves. From concept to final edit, The A9 Visuals is committed to delivering visuals that inspire, engage, and leave a lasting impression.
                   <br /> <br/> Your vision. Our lens. Infinite possibilities.
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <h1 className="text-blue-200/50"></h1>
                       
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
                    <p className="text-white/50">
                    Our expertise lies in crafting high-impact visual experiences through professional videography, photography, web design, and graphic design. 
                    We specialize in cinematic storytelling, precise editing, creative color grading, and clean, modern digital design to ensure every project feels polished, intentional, and on-brand. 
                    With hands-on experience working with high-profile clients across events, promotional campaigns, and creative projects, we transform ideas and raw assets into compelling visuals and digital experiences that captivate, communicate, and elevate your brand’s message.
                    
                    </p>
                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <Image src={exp1} alt="project1" className="rounded-lg" layout="fill" objectFit="cover"></Image>
                        

                    </div>
                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <Image src={exp2} alt="project2" className="rounded-lg" layout="fill" objectFit="cover"></Image>
                        

                    </div>
    
                    

                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                    <p className="text-white/50 mb-4">At The A9 Visuals, our skill set blends creative vision with technical precision. From advanced video editing and color grading to visual design and post-production workflows, we use industry-standard tools to deliver high-quality results efficiently and consistently. Each skill we bring to the table supports our goal of creating visuals that are polished, engaging, and tailored to your brand’s identity.</p>
                    <div className="grid lg:grid-cols-2 gap-5">

                        <div className="border border-white/20 rounded-lg p-3 wrap-break-word">
                            <h4 className="text-blue-300 text-lg font-medium mb-2">Videography</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Event Videography</li>
                                <li>Social Media Reels/Shorts</li>
                                <li>Live Stream Setups</li>
                                <li>Promotional Content</li>
                                <li>Brand Videos</li>
                                <li>Professional Audio Coverage</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 rounded-lg p-3 wrap-break-word">
                            <h4 className="text-blue-300 text-lg font-medium mb-2">Editing</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Video Post Production</li>
                                <li>Color Correction & Grading</li>
                                <li>Transitions & Visual Effects</li>
                                <li>Multi-Format Exports</li>
                                <li>Fast Turnaround</li>
                            </ul>
                        </div>

                        
                        <div className="border border-white/20 rounded-lg p-3 wrap-break-word">
                            <h4 className="text-blue-300 text-lg font-medium mb-2">Web Design</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Responsive Website Design</li>
                                <li>Modern Landing Page</li>
                                <li>Portfolio Page Designs</li>
                                <li>Creative Studio Sites</li>
                            </ul>
                        </div>


                         <div className="border border-white/20 rounded-lg p-3 wrap-break-word">
                            <h4 className="text-blue-300 text-lg font-medium mb-2">Graphic Design</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Social Media Graphics</li>
                                <li>Posters & Promotional Designs</li>
                                <li>Marketing and Campaign Visuals</li>
                                <li>Print-Ready Design Assets</li>
                                <li>Presentation Designs</li>
                            </ul>
                        </div>

                         

                        

                    </div>
                </div>

            </div> 

        <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="border border-white/20 rounded-lg p-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="videography">Videography</label>
                        <Progress value={95} className="bg-blue-300/20 [&>div]:bg-blue-300/80"></Progress>
                    </div>
                    <div>
                        <label htmlFor="editing">Editing</label>
                        <Progress value={90} className="bg-blue-300/20 [&>div]:bg-blue-300/80"></Progress>
                    </div>
                    <div>
                        <label htmlFor="editing">Web Design</label>
                        <Progress value={80} className="bg-blue-300/20 [&>div]:bg-blue-300/80"></Progress>
                    </div>
                    <div>
                        <label htmlFor="editing">Graphic Design</label>
                        <Progress value={75} className="bg-blue-300/20 [&>div]:bg-blue-300/80"></Progress>
                    </div>
                </div>

                
                <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
                <p className="text-white/50">
                Every project starts with a vision. By diving deep into your ideas, we translate them into visuals that engage and inspire.
                    From planning and shooting to post-production, precision and creativity guide every decision.
                </p>

            </div>
        

            <div className="border border-white/20 rounded-lg p-6">
                <div className="h-[200px] overflow-hidden p-4 border-white/20 relative">
                    <Image src={goals} alt="goalsImg" className="rounded-lg" layout="fill" objectFit="cover"></Image>

                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6">05. Vision</h3>
                    <p className="text-white/50">
                    Our goal is simple: to create visuals that inspire, engage, and leave a lasting impression. 
                    Every project is approached with creativity, precision, and a focus on storytelling across video, design, and web.
                    </p>

                </div>

            </div>
        </div>


        </section>
    );
};