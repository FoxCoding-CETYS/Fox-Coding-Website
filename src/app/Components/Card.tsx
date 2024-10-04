import Image from 'next/image'
import GitHubLogo from './../../../public/github-mark'
interface Props {
    Titulo:string, 
    Imagen:string,
    Descripcion:string
}
export default function Card({ Titulo, Imagen, Descripcion }: Props) {
    return (
        <div className={`p-7 dark:bg-zinc-900 bg-white rounded-2xl flex-col `} >
            <div className=" text-black dark:text-[#FFD850] text-2xl mb-4 font-bold">
                {Titulo}
            </div>
                <div className="w-full h-80 relative">
                <Image
                    className="rounded-2xl"
                    src={Imagen}
                    fill
                    alt="Fox Coding Hackaton Image"
                    loading="lazy"
                    style={{ objectFit: 'cover' }} 
                />
                </div>
            <div className="text-black dark:text-white mt-4">
            {Descripcion} 
            </div>
                <div className="flex justify-end -mb-4 -mr-4 ">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GitHubLogo/>
                </a>
                </div>
        </div>
    )
}