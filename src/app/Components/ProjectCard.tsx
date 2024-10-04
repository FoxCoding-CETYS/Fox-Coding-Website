import Image from "next/image";
import { Button } from "@nextui-org/react";
import React from "react";

interface Props {
    Titulo: string;
    Imagen: string;
    Descripcion: string;
}

export default function ProjectCard({ Titulo, Imagen, Descripcion }: Props) {
    return (
        <div className="flex flex-row items-center justify-center bg-[#FFD850] bg-opacity-20 rounded-3xl">
            <div className="p-4 flex w-3/12 h-full">
                <div className="w-full h-full relative">
                    <Image
                        className="rounded-3xl"
                        src={Imagen}
                        fill
                        alt="TalentLandImage"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="flex w-9/12 pl-4 pt-4 pb-4 pr-6 flex-col">
                <div className="text-3xl text-[#FFD850] font-bold">
                    {Titulo}
                </div>
                <div className="pb-2 dark:text-white text-black">
                    {Descripcion}
                </div>
                <div>
                    <Button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#FFD850] text-background gap-2 hover:bg-[#c5a42a] dark:hover:bg-[#c5a42a] font-bold text-brown text-sm sm:text-sm text-black h-9 w-28 sm:h-18 px-4 sm:px-5"
                    >
                        Visit
                    </Button>
                </div>
            </div>
        </div>
    );
}