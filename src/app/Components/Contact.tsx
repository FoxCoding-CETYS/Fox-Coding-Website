import ContactCard from "./ContactCard"
export default function Contact () {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="text-gray-400 text-3xl">
                DISCOVER THE ART OF 
            </div>
            <div className="text-9xl text-[#fad85f] font-bold mb-8">
                CODING
            </div>
            <div className="w-5/12">
                <ContactCard/>
            </div>
        </div>
    )
}