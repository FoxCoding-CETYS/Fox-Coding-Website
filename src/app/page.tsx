'use client'
import Fox from './svg/FoxAnimation.tsx'
import React from "react";
import '@fontsource/roboto';
import Menu from './Components/Menu.tsx'
import { Button } from '@nextui-org/react';
import Mission from './Components/Mission.tsx'
import Vision from './Components/Vision.tsx';
import { motion, AnimatePresence } from "framer-motion"
import BackNext from './Components/backNext.tsx';
import Card from './Components/Card.tsx';

export default function Home() {
  
  const [tipo, setTipo] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true)
  const [cardState, setCardState] = React.useState(0)
  const textPlaceholder:string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. '
  
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
        else if (event.detail.message==='Back') {
          setIsVisible(true)
        }

        if (event.detail.message==='NextNumber') {
            setCardState(prevCardState => prevCardState + 1);
          console.log(cardState)
        } else if (event.detail.message==='BackNumber'){
            setCardState(prevCardState => prevCardState - 1);
        }
    };


    window.addEventListener('nextClicked', handleEvent);
    window.addEventListener('backClicked', handleEvent);
    window.addEventListener('nextClickedPlus', handleEvent);
    window.addEventListener('backClickedMinus', handleEvent);

    return () => {
        window.removeEventListener('nextClicked', handleEvent);
        window.removeEventListener('backClicked', handleEvent);
        window.removeEventListener('nextClickedPlus', handleEvent);
        window.removeEventListener('backClickedMinus', handleEvent);
    };
  }, []);


  React.useEffect(()=> {
    if (cardState==4) setCardState(0) 
    if (cardState==-1) setCardState(3) 
  }, [cardState])

  const posCardActual = (cardState:number, currentCard:number) => {
    if (currentCard === cardState) {
      return { opacity: 1, translateX: 0 };
    } 
    else if (currentCard === cardState - 1) {
      return { opacity: 0.5, translateX: -200 };
    } 
    else if (currentCard === cardState + 1) {
      return { opacity: 0.5, translateX: 200 };
    } 
    else {
      return { opacity: 0 };
    }
  };

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
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className=' absolute w-9/12'
                initial={{ opacity: 0, translateX: -500 }}
                animate={{ opacity: 1, translateX: 0}}
                exit={{ opacity: 0, translateX: -500  }}
              > 
                <Mission/>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
              {!isVisible && (
                <motion.div
                  className=' absolute w-9/12'
                  initial={{ opacity: 0, translateX: 500 }}
                  animate={{ opacity: 1, translateX: 0}}
                  exit={{ opacity: 0, translateX: 500  }}
                > 
                  <Vision/>
                </motion.div>
              )}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center w-full mt-32">
          <BackNext id={1}/>
        </div>
        <div className='flex items-center justify-center mt-[570px] w-full'>
            <motion.div
              className={`absolute w-2/5 ${cardState == 0 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={cardState==3 ? posCardActual(cardState, 4) : posCardActual (cardState, 0)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="TalentLand 2023" Imagen="/TalentLand2023.png" Descripcion={textPlaceholder}/>
            </motion.div>

            <motion.div
              className={`absolute w-2/5 ${cardState == 1 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={posCardActual(cardState, 1)}
              transition={{type: "Tween", stiffness: 100}}
              > 
            <Card Titulo="NASA Space Apps 2023" Imagen="/NASASpaceApps2023.jpeg" Descripcion={textPlaceholder}/>
            </motion.div>

            <motion.div
              className={`absolute w-2/5 ${cardState == 2 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={posCardActual (cardState, 2)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="MediHacks 2023" Imagen="/Medihacks2023.jpg" Descripcion={textPlaceholder} />
            </motion.div>

            <motion.div
              className={`absolute w-2/5 ${cardState == 3 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={cardState==0 ? posCardActual(cardState, -1) : posCardActual (cardState, 3)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="IEEEXtreme 2023" Imagen="/IEEEXtreme.jpg" Descripcion={textPlaceholder} />
            </motion.div>

        </div>
        <div className="flex items-center justify-center w-full mt-72">
          <BackNext id={2}/>
        </div>
      </main>
    </div>
  );
}
