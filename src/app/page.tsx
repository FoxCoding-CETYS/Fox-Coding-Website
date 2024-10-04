'use client'
import Fox from './svg/FoxAnimation.tsx'
import Circles from './svg/Circles.tsx'
import React from "react";
import '@fontsource/roboto';
import Menu from './Components/Menu.tsx'
import { motion } from "framer-motion"
import BackNext from './Components/backNext.tsx';
import Card from './Components/Card.tsx';
import Vimission from './Components/Vimission.tsx';
import ProjectCard from './Components/ProjectCard.tsx';
import Landing from './Components/Landing.tsx';
import { useInView } from "framer-motion"
import Sponsors from './Components/Sponsors.tsx';
import Contact from './Components/Contact.tsx';
import Footer from './Components/Footer.tsx';


export default function Home() {

  const [tipo, setTipo] = React.useState(0);
  const [cardState, setCardState] = React.useState(-1)
  const textPlaceholder:string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. '
  const refLanding = React.useRef(null)
  const refVimission = React.useRef(null)
  const refCard = React.useRef(null)
  const refProjectCard = React.useRef(null)
  const refSponsors = React.useRef(null)
  const refContact = React.useRef(null)

  

  const isInViewLanding = useInView(refLanding, {
       margin:'-200px 0px 0px 0px'
  })

  const isInViewMission = useInView(refVimission, {
    margin:'-150px 0px 0px 0px'
  })

  const isInViewCard = useInView(refCard, {
    margin:'0px 0px 0px 0px'
  })

  const isInViewProjectCard = useInView(refProjectCard, {
    margin:'-150px 0px 0px 0px'
  })

  const isInViewSponsors = useInView(refSponsors, {
    margin:'-150px 0px 0px 0px'
  })

  const isInViewContact = useInView(refContact, {
    margin:'-150px 0px 0px 0px'
  })


  React.useEffect(()=> {
    if (isInViewLanding) {
      const event = new CustomEvent('actual', { detail: { message: '-1' } });
      window.dispatchEvent(event);
    }
    if (!isInViewLanding && isInViewMission) {
      const event = new CustomEvent('actual', { detail: { message: '0' } });
      window.dispatchEvent(event);
    }
    if (!isInViewMission && isInViewCard) {
      const event = new CustomEvent('actual', { detail: { message: '1' } });
      window.dispatchEvent(event);
    }
    if (!isInViewCard && isInViewProjectCard) {
      const event = new CustomEvent('actual', { detail: { message: '2' } });
      window.dispatchEvent(event);
    }
    if (!isInViewProjectCard && isInViewSponsors) {
      const event = new CustomEvent('actual', { detail: { message: '3' } });
      window.dispatchEvent(event);
    }
    if (!isInViewSponsors && isInViewContact) {
      const event = new CustomEvent('actual', { detail: { message: '4' } });
      window.dispatchEvent(event);
    }
  }, [isInViewLanding, isInViewMission, isInViewCard, isInViewProjectCard, isInViewSponsors, isInViewContact])


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

        if (event.detail.message==='NextNumber') {
            setCardState(prevCardState => prevCardState + 1);
          console.log(cardState)
        } else if (event.detail.message==='BackNumber'){
            setCardState(prevCardState => prevCardState - 1);
        }
    };


    window.addEventListener('nextClickedPlus', handleEvent);
    window.addEventListener('backClickedMinus', handleEvent);

    return () => {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start max-w-[1400px]">
        <div>
          
          {isInViewLanding && (
            <motion.div
            className='fixed -z-10'
            initial={{ opacity: 1, translateX:-700, translateY:-150}}
            animate={{ opacity: 1, translateX:150, translateY:-600}}
            transition={{type: "Tween"}}
            >
              <Circles color='#FFD850' radius={200} blur={600}/>
            </motion.div>
          )}
          {!isInViewLanding && isInViewMission && (
            <motion.div
            className='fixed -z-10'
            initial={{ opacity: 1, translateX:150, translateY:-600}}
            animate={{ opacity: 1, translateX:-700, translateY:-150}}
            transition={{type: "Tween"}}
            >
              <Circles color='#FFD850' radius={200} blur={600}/>
            </motion.div>
          )}
        </div>

        <div className='fixed -mt-20'>
          <Menu/>
        </div>

        <motion.div 
        className="flex w-full items-center justify-center"
          >
          <Fox height={200} width={200} tipo={tipo}/>
        </motion.div>

        {isInViewMission && !isInViewLanding &&(

            <motion.div
            className='fixed -z-10'
            initial={{ opacity: 1, translateX:1000, translateY:-1200}}
            animate={{ opacity: 1, translateX:500, translateY:-800}}
            transition={{type: "Tween"}}
            >
              <Circles color='red' radius={200} blur={600}/>
            </motion.div>
          )}

          
        <div 
        className='w-full flex justify-center items-center flex-col' 
        ref={refLanding}
          >
          <Landing/>
          <div className='w-full flex items-center justify-end'>
          </div>
        </div>

        <motion.div
          ref={refVimission}
          className='flex justify-center items-center w-full mt-[250px]'
          initial={{ opacity: 0, translateX:-500}}
          whileInView={{opacity:1, translateX:0}}
          viewport={{ once: true }}
          >
          <Vimission/>
        </motion.div>

        {!isInViewMission && isInViewCard && (
            <div className='absolute'>
              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:500, translateY:-800}}
                animate={{ opacity: 1, translateX:-700, translateY:-150}}
                transition={{type: "Tween"}}
              >
                <Circles color='red' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:-700, translateY:-150}}
                animate={{ opacity: 1, translateX:-1000, translateY:500,
                  transitionEnd:{
                    opacity:0
                  }
                }}
                transition={{type: "Tween"}}
              >
                <Circles color='#FFD850' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:1000, translateY:-1000}}
                animate={{ opacity: 1, translateX:500, translateY:-800}}
                transition={{type: "Tween"}}
              >
                <Circles color='#50C0FF' radius={200} blur={600}/>
              </motion.div>
            </div>
          )}

        <motion.div
         ref={refCard}
         className='flex items-center justify-center mt-[520px] w-full'
         initial={{ opacity: 0, translateX:500}}
         whileInView={{opacity:1, translateX:0}}
         transition={{type: "spring", damping:15}}
         viewport={{ once: true }}
         >
            <motion.div
              className={`absolute  w-2/5 max-w-[650px] ${cardState == 0 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={cardState==3 ? posCardActual(cardState, 4) : posCardActual (cardState, 0)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="TalentLand 2023" Imagen="/TalentLand2023.png" Descripcion={textPlaceholder}/>
            </motion.div>

            <motion.div
              className={`absolute max-w-[650px] w-2/5 ${cardState == 1 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={posCardActual(cardState, 1)}
              transition={{type: "Tween", stiffness: 100}}
              > 
            <Card Titulo="NASA Space Apps 2023" Imagen="/NASASpaceApps2023.jpeg" Descripcion={textPlaceholder}/>
            </motion.div>

            <motion.div
              className={`absolute max-w-[650px] w-2/5 ${cardState == 2 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={posCardActual (cardState, 2)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="MediHacks 2023" Imagen="/Medihacks2023.jpg" Descripcion={textPlaceholder} />
            </motion.div>

            <motion.div
              className={`absolute max-w-[650px] w-2/5 ${cardState == 3 ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0.5, translateX: -200 }}
              animate={cardState==0 ? posCardActual(cardState, -1) : posCardActual (cardState, 3)}
              transition={{type: "Tween", stiffness: 100}}
              > 
              <Card Titulo="IEEEXtreme 2023" Imagen="/IEEEXtreme.jpg" Descripcion={textPlaceholder} />
            </motion.div>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center w-full mt-72"
          >
          <BackNext id={2}/>
        </motion.div>

        {isInViewProjectCard && !isInViewCard && (
            <div className='absolute'>
              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:-700, translateY:-150}}
                animate={{ opacity: 1, translateX:-1000, translateY:500, 
                  transitionEnd:{
                    opacity:0
                  }
                }}
                transition={{type: "Tween"}}
              >
                <Circles color='red' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:1000, translateY:-1000}}
                animate={{ opacity: 1, translateX:500, translateY:-800}}
                transition={{type: "Tween"}}
              >
                <Circles color='#E650FF' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:500, translateY:-800}}
                animate={{ opacity: 1, translateX:-700, translateY:-150}}
                transition={{type: "Tween"}}
              >
                <Circles color='#50C0FF' radius={200} blur={600}/>
              </motion.div>
            </div>
          )}

        <motion.div 
        ref = {refProjectCard}
        className=' flex justify-center items-center w-full mt-60 flex-col space-y-12 ml-20 '
        initial={{ opacity: 0, translateX:-500}}
        whileInView={{opacity:1, translateX:0}}
        transition={{type: "spring", damping:15}}
        viewport={{ once: true }}
          >
          <div className=' flex w-[63%]'>
            <ProjectCard Titulo='Trascendencias - Engineering Congress' Descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' Imagen='/TrascendenciasWebsite.png'/>
          </div>
          <div className=' flex w-[63%]'>
            <ProjectCard Titulo='CETYS Public Relations Website' Descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' Imagen='/TrascendenciasWebsite.png'/>
          </div>
          <div className='flex w-[63%]'>
            <ProjectCard Titulo='Celulas - Business Congress' Descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' Imagen='/TrascendenciasWebsite.png'/>
          </div>
        </motion.div>

        {isInViewSponsors && !isInViewProjectCard && (
            <div className='absolute'>
              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:1000, translateY:-1000}}
                animate={{ opacity: 1, translateX:500, translateY:-800}}
                transition={{type: "Tween"}}
              >
                <Circles color='#98084D' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:1000, translateY:-1000}}
                animate={{ opacity: 1, translateX:-700, translateY:-150}}
                transition={{type: "Tween"}}
              >
                <Circles color='#E650FF' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:-700, translateY:-150}}
                animate={{ opacity: 1, translateX:-1000, translateY:150,
                  transitionEnd:{
                    opacity:0
                  }
                }}
                transition={{type: "Tween"}}
              >
                <Circles color='#50C0FF' radius={200} blur={600}/>
              </motion.div>
            </div>
          )}
  
        <div 
        className=' w-full flex justify-center items-center mt-64'
        ref={refSponsors}
          >
          <div className='w-8/12'>
            <Sponsors/>
          </div>
        </div>


        {!isInViewSponsors && isInViewContact && (
            <div className='absolute'>
              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:500, translateY:-800}}
                animate={{ opacity: 1, translateX:-700, translateY:-150
              }}
                transition={{type: "Tween"}}
              >
                <Circles color='#98084D' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:-700, translateY:-150}}
                animate={{ opacity: 1, translateX:-1000, translateY:300, 
                  transitionEnd:{
                    opacity:0
                  }
                }}
                transition={{type: "Tween"}}
              >
                <Circles color='#E650FF' radius={200} blur={600}/>
              </motion.div>

              <motion.div
                className='fixed -z-10'
                initial={{ opacity: 1, translateX:1000, translateY:-1000}}
                animate={{ opacity: 1, translateX:500, translateY:-800}}
                transition={{type: "Tween"}}
              >
                <Circles color='#FFD850' radius={200} blur={600}/>
              </motion.div>
            </div>
          )}

        <div 
          className='mt-64 w-full flex items-center justify-center'
          ref={refContact}
          >
            <div className='w-full'>
                <Contact/>
            </div>
        </div>
      </main>
    </div>
  );
}