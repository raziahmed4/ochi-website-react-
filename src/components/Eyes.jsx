import React, { useEffect,useRef,useState } from 'react'

function Eyes() {
    
const [rotate,setRotate]= useState(0);
useEffect(()=>{
   
    window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;
    

        let deltax=mouseX-window.innerWidth/2;
        let deltay=mouseY-window.innerWidth/2;
        var  angle=Math.atan2(deltay,deltax)*(180/Math.PI);
        setRotate(angle-180);
    })
})
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div  data-scroll data-scroll-speed="-0.7" className=' relative w-full h-full  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute w-3/3 flex gap-10  top-1/2 left-2/4 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[15vw]  flex items-center justify-center h-[15vw] rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3  flex items-center justify-center rounded-full bg-zinc-900'>
                        <div  style={{transform : ` rotate(${rotate}deg)`}} className='line w-full h-10  '> 
                        <div className='w-9 h-9 rounded-full bg-zinc-100'></div>
                        </div>
                        
                    
                    </div>
                </div>
                <div className='w-[15vw]  h-[15vw] rounded-full  flex items-center justify-center bg-zinc-100'>
                    
                <div className='w-2/3 h-2/3  flex items-center justify-center rounded-full bg-zinc-900'>
                <div  style={{transform : ` rotate(${rotate}deg)`}} className='line w-full h-10 '> 
                        <div className='w-9 h-9 rounded-full bg-zinc-100'></div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Eyes