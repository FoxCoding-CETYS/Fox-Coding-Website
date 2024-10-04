import React from "react";
import DarkLight from "./darkLight";


const secciones:string[] = [
    'About Us',
    'Hackatons',
    'Projects',
    'Sponsors',
    'Contact'
]
export default function menu () {
    const [actual, setActual] = React.useState(0)

    React.useEffect(() => {
        const handleEvent = (event:any) => {
            setActual(parseInt(event.detail.message))
            console.log('Evento capturado:', event.detail.message);
        };
        window.addEventListener('actual', handleEvent);
        
        return () => {
            window.removeEventListener('actual', handleEvent);
        };
    }, []);


    const seccionesMenu = secciones.map
    ((seccion, key) => 
        <div key={key} className="text-black dark:text-white">
            {actual===key ?  
            <button className="font text-xl mb-3 text-yellow-400 font-bold ">
                {seccion}
            </button>
            : 
            <button className="font text-xl mb-3">
                {seccion}
            </button>}
        </div>
    );

    return (
        <div>
            {seccionesMenu}
            <div className="mt-1">
                <DarkLight/>
            </div>
        </div>
    )
}