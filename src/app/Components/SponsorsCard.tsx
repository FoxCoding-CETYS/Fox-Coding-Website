import { Button } from "@nextui-org/react"
import {Divider} from "@nextui-org/divider";


interface cardContent {
    Titulo:string,
    Descripcion:string,
    Precio:string,
    Beneficios:string[],
    totalBeneficios:number
}

export default function SponsorsCard ({Titulo, Descripcion, Precio, Beneficios, totalBeneficios}: cardContent) {
    return (
        <div className="bg-opacity-5 bg-yellow-300  rounded-3xl backdrop-blur-3xl p-6 shadow-2xl ">
            <div className="w-full flex justify-start text-[#FFD850] text-3xl mb-2 font-bold">
                {Titulo}
            </div>
            <div className="w-full flex justify-start text-white text-lg mb-5">
                {Descripcion}
            </div>
            <div className="w-full flex justify-center text-white text-5xl mb-5">
                {Precio}
            </div>
            <Button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-transparent border-yellow-400 text-background gap-2 hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-black text-white font-bold text-brown text-sm sm:text-xl h-10 w-60 sm:h-12 px-4 sm:px-5 mb-5">
                GET STARTED
            </Button>
            <div >
            {Beneficios.map((element:string, key:number)=> (
                <div>
                <li key={key} className="text-white text-lg mt-2 mb-2 ml-2">
                    {element}
                </li>
                {key<totalBeneficios-1 && (
                    <Divider/>
                )}
                </div>
            ))}
            </div>
        </div>
    )
}