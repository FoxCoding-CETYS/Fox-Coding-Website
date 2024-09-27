'use client'
import Fox from './svg/FoxAnimation.tsx'
import React from "react";
import '@fontsource/roboto';
import Menu from './Components/Menu.tsx'
import { Button } from '@nextui-org/react';
import Mission from './Components/Mission.tsx'
import Vision from './Components/Vision.tsx';
import { motion } from "framer-motion"
import BackNext from './Components/backNext.tsx';

export default function Home() {
  
  const [tipo, setTipo] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTipo(prev => {
        let nuevoContAn = prev + 1;
        if (nuevoContAn === 7) nuevoContAn = 1;
        return nuevoContAn;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [tipo]);

  React.useEffect(() => {
    const handleEvent = (event:any) => {
        console.log('Evento capturado:', event.detail.message);
        if (event.detail.message==='Next') {
          setIsVisible(false)
        }
        else {
          setIsVisible(true)
        }
    };

    window.addEventListener('nextClicked', handleEvent);
    window.addEventListener('backClicked', handleEvent);

    return () => {
        window.removeEventListener('nextClicked', handleEvent);
        window.removeEventListener('backClicked', handleEvent);
    };
  }, []);

  const [isVisible, setIsVisible] = React.useState(true)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-black">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start max-w-[1400px]">
        <div className='fixed -mt-20'>
          <Menu/>
        </div>
        <div className="flex w-full items-center justify-center">
          <Fox height={200} width={200} tipo={tipo}/>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="text-6xl font-thin text-black dark:text-white">
              HELLO WORLD,
          </div>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className="text-center">
            <span className=" font font-thin text-6xl mr-4 text-black dark:text-white">
              WE ARE
            </span>
            <span className=" font font-bold text-6xl text-[#FFD850]">
              FOX CODING
            </span>
        </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-4/5 mt-4">
            <div className=" font font-thin text-xl mr-4 text-center text-black dark:text-white">
              We excel in hackathons and competitive programming, both nationally and internationally. As pioneers in tech innovation, we tackle real-world challenges, demonstrating our commitment to advancing technology and practical solutions. 
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full mt-5">
          <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
            <Button
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#FFD850] text-background gap-2 hover:bg-[#c5a42a] dark:hover:bg-[#c5a42a] font-bold text-brown text-sm sm:text-2xl text-yellow-800 h-10 w-36 sm:h-12 px-4 sm:px-5"
            >
              START
            </Button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center flex-row mt-96'>
          <motion.div 
            className={`absolute ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'} w-9/12`}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              translateX: isVisible ? 0 : -500
            }} >
            <Mission/>
          </motion.div>
            <motion.div 
            className={`absolute ${isVisible ? 'pointer-events-none' : 'pointer-events-auto' } w-9/12`}
              animate={{ 
                opacity: isVisible ? 0 : 1, 
                translateX: isVisible ? 500 : 0
              }}>
            <Vision/>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full mt-32">
          <BackNext/>
        </div>
      </main>
    </div>
  );
}
