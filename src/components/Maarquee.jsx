import { motion } from 'framer-motion'
import React from 'react'

function Maarquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden pr-20'>
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 pb-10 '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 pb-10 '>We are Ochi</motion.h1>
        </div>

    </div>
  )
}

export default Maarquee