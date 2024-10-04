import Mission from "./Mission";
import Vision from "./Vision";
import BackNext from "./backNext";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Vimission () {
    const [isVisible, setIsVisible] = React.useState(true)

React.useEffect(() => {
    const handleEvent = (event:any) => {
        console.log('Evento capturado:', event.detail.message);
        if (event.detail.message==='Next') {
          setIsVisible(false)
        }
        else if (event.detail.message==='Back') {
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



    return (
        <div className='w-full flex items-start justify-center flex-row' >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='absolute w-10/12  max-w-[1200px] '
              initial={{ opacity: 0, translateX: -500 }}
              animate={{ opacity: 1, translateX: 0}}
              transition={{type: "spring", damping:15}}
              exit={{ opacity: 0, translateX: -500  }}
            > 
              <Mission/>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
            {!isVisible && (
              <motion.div
                className=' absolute w-10/12  max-w-[1200px]'
                initial={{ opacity: 0, translateX: 500 }}
                animate={{ opacity: 1, translateX: 0}}
                transition={{type: "spring", damping:15}}
                exit={{ opacity: 0, translateX: 500  }}
              > 
                <Vision/>
              </motion.div>
            )}
        </AnimatePresence>
        <div className={`flex items-start justify-center w-full mt-64  max-w-[1200px]`}>
          <BackNext id={1}/>
        </div>
      </div>
    )
}