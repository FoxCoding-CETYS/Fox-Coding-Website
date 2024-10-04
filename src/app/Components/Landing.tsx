import { Button } from "@nextui-org/react"
export default function Landing () {
    return (
        <div>
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
                    <div className=" font font-thin text-xl mr-4 text-center text-black dark:text-white ">
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
        </div>
    )
}