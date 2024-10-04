import { before } from "node:test";
import SponsorsCard from "./SponsorsCard";

const list:string[] = [
    'Shaping the next generation of software developers.',
    'Solving real-world problems through technology.',
    'Promoting collaboration between students and businesses.',
    'Positioning CETYS University as a leader in the technology field.'
]

const Beneficios1:string[] = [
    'Tax-deductible',
    'Logo in t-shirt',
    'Tax-deductible',
]


const ListElements = list.map
((element, key) => 
    <li key={key} className="text-black dark:text-white ml-10">
        {element}
    </li>
);

export default function Sponsors () {
    return (
        <div>
            <div className=" text-amber-400 text-6xl font-bold mb-4">
                Dear Sponsor
            </div>
            <div className=" text-white text-lg">
            <span className="dark:text-[#FFD850] text-[#FF5050] font-normal mr-1">
                Fox Coding
            </span>
            is a student team at CETYS University dedicated to fostering innovation and developing technological skills through hackathon participation. By supporting us, you will be contributing to
            </div>
            <div className=" text-white text-lg mt-3">
                {ListElements}
            </div>
            <div className="flex flex-row items-center justify-start space-x-6">
                <div className=" flex w-4/12 mt-6">
                    <SponsorsCard Titulo="MEGA" Descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit." Precio="500" Beneficios={Beneficios1} totalBeneficios={3}/>
                </div>
                <div className=" flex w-4/12 mt-6">
                    <SponsorsCard Titulo="MEGA" Descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit." Precio="500" Beneficios={Beneficios1} totalBeneficios={3}/>
                </div>
                <div className=" flex w-4/12 mt-6">
                    <SponsorsCard Titulo="MEGA" Descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit." Precio="500" Beneficios={Beneficios1} totalBeneficios={3}/>
                </div>
            </div>
        </div>
    )
}