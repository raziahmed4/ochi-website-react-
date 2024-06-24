import React from 'react';
import Naavbar from './components/Naavbar';
import Landingpage from './components/Landingpage';
import Maarquee from './components/Maarquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featturred from './components/Featturred';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
 

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
    <Naavbar/>
    <Landingpage/>
    <Maarquee/>
    <About/>
    <Eyes/>
    <Featturred/>
    < Cards/>
    <Footer/>
   
     
      </div>
    
    
  )
}


export default App





