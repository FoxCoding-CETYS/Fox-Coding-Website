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
    const [marcado, setMarcado]= React.useState(true)
    const seccionesMenu = secciones.map
    ((seccion, key) => 
        <div key={key} className="text-black dark:text-white">
            {marcado ?  
            <button className="font font-light text-xl mb-3 ">
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