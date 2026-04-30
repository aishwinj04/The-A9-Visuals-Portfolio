"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import tmu from "../../public/assets/tmu.png";
import tsa from "../../public/assets/tsa.png";
import ctc from "../../public/assets/ctc.png";
import usstm from "../../public/assets/usstm.png";
import fest from "../../public/assets/fest.png";
import laof from "../../public/assets/laof.png";
import tedx from "../../public/assets/tedxlogo.png";
import gdg from "../../public/assets/gdglogo.png";

// array to hold the images 
const imagesArr = [
    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},
    {src: laof, alt: "legislative"},
    {src: tedx, alt: "tedx"},
    {src: gdg, alt: "google"},


]

export const LogoAnimation = () => {
    return(
        <div className="py-10 my-15 bg-blue-400/20">
            <div className="container mx-auto">
                <div className="overflow-hidden
                [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_75%,_transparent)] ">
                    
                    <motion.div className="flex gap-20"
                        animate={{translateX: "-50%"}}
                        transition={{duration: 35, ease: "linear", repeat: Infinity ,repeatType: "loop"}}
                       >
                            
                        {imagesArr.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.alt} 
                          className={`hover:scale-105 ${
                            image.alt === "tedx" || image.alt === "google"
                                ? "h-[35px]"
                                : "h-[70px]"
                            }`}>

                            </Image>

                         )
                        )}

                    </motion.div>

                </div>
            </div>

        </div>

    );

};




