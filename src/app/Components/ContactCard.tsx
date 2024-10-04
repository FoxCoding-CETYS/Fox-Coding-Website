import {Divider} from "@nextui-org/divider";
import { Button } from "@nextui-org/react";
export default function ContactCard () {
    return (
        <div className=" bg-opacity-5 bg-yellow-300 rounded-3xl backdrop-blur-3xl p-6 w-full shadow-2xl">
            <div className="flex justify-start text-xl text-gray-400 w-full">
                Name
            </div>
            <div className="mb-6">
                <input 
                className="bg-transparent w-full"
                type="text" />
                <Divider/>
            </div>
            <div className="flex justify-start text-xl text-gray-400 w-full">
                Email
            </div>
            <div className="mb-6">
                <input 
                className="bg-transparent w-full"
                type="text" />
                <Divider/>
            </div>
            <div className="flex justify-start text-xl text-gray-400 w-full">
                Message
            </div>
            <div className="mb-6">
                <input 
                className="bg-transparent w-full"
                type="text" />
                <Divider/>
            </div>
            <div className="w-full flex items-center justify-center">
                <Button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-transparent border-yellow-400 text-background gap-2 hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-black text-white font-bold text-brown text-sm sm:text-xl h-10 w-32 sm:h-12 px-4 sm:px-5 mb-5">
                    SEND
                </Button>
            </div>
        </div>
    )
}