import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  
  return (
    <div className='w-full  h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-48 mb-10 px-20'>
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                return <div className='masker'>
                <div className='w-fit flex  item-end overflow-hidden '> 
                {index === 1 && (<motion.div
                 initial={{width:0}}
                  animate={{width: "9vw" }} 
                  transition={{ease:[0.76,0,0,4,1],duration: 1}}
                   className=' mr-1vw w-[8vw] h-[5.7vw] top-[.7vw] relative rounded-md bg-red-500'>

                   </motion.div>
                   ) }   
                <h1 className='uppercase leading-[6vw] tracking-tighter text-[7vw]  font-[Founders_Grotesk] font-medium'>{item}</h1>
                </div>
            </div>
            })}
            
            
            
        </div>
       <div className='border-t-[1px] border-zinc-700 mt-19 flex justify-between item-center py-5 px-20'>
        {[" For Public and Private Companies "," From the first pitch to IPO "].map((item ,index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
       
        <div className='start flex item-center gap-5'>
           <div className=' px-5 py-1 border-2 border-zinc-700 rounded-full font-light text-sm '>START THE PROJECT</div>
           <div className='w-8 h-8 px-1.5 py-1 border-2 border-zinc-700 rounded-full'>
          <span className='rotate-[45deg]'>
            <FaArrowUpLong />
            </span>
           </div>
        </div>
       </div>
      
    </div>
  )
}

export default Landingpage