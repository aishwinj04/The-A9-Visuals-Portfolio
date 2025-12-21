"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import tmu from "../../public/assets/tmu.png";
import tsa from "../../public/assets/tsa.png";
import ctc from "../../public/assets/ctc.png";
import usstm from "../../public/assets/usstm.png";
import fest from "../../public/assets/fest.png";

// array to hold the images 
const imagesArr = [
    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},

    {src: tmu, alt: "tmu"},
    {src: tsa, alt: "tsa"},
    {src: ctc, alt: "ctc"},
    {src: usstm, alt: "usstm"},
    {src: fest, alt: "fest"},


]

export const LogoAnimation = () => {
    return(
        <div className="py-6 my-10 bg-blue-400/20">
            <div className="container mx-auto">
                <div className="overflow-hidden
                [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_75%,_transparent)] ">
                    
                    <motion.div className="flex gap-20"
                        animate={{translateX: "-50%"}}
                        transition={{duration: 35, ease: "linear", repeat: Infinity ,repeatType: "loop"}}
                       >
                            
                        {imagesArr.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.alt} className="h-[45px] hover:scale-115">

                            </Image>

                         )
                        )}

                    </motion.div>

                </div>
            </div>

        </div>

    );

};




