import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className='container w-1/2 h-[50vh] '>
            <div className=' relative card rounded-2xl w-full h-full bg-[#004D43]  flex items-center justify-center '>
                <img className='w-32 mb-10' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt=''/>
                <button className='absolute  rounded-full px-5 py-1 border-2 left-10 bottom-10'>&copy;OCO-2022</button>
            </div>
        </div>
        <div className='container  w-1/2 h-[50vh] flex gap-5'>
          <div className=' relative card w-1/2 rounded-2xl  h-full bg-[#192826]  flex items-center justify-center'>
                <img className='w-32 py-10 mb-10' src='	https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt=''/>
                <button className='absolute  rounded-full px-5 py-1 border-2 left-10 bottom-10'>RATINGS CLUTCH</button>
          </div>
                    
          <div className=' relative card w-1/2 rounded-2xl  h-full bg-[#192826]  flex items-center justify-center '>
                 <img className='w-32 py-10 mb-10' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt=''/> 
                 <button className='absolute   rounded-full px-5 py-1 border-2 left-10 bottom-10'>BUSSINESS BOOT</button>
          </div>
        </div>
    </div>
  )
}

export default Cards