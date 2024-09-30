import { Button } from "@nextui-org/react"

interface Identificador {
    id:number
}

export default function BackNext ({id}: Identificador) {

        const handleNext = () => {
            const event = new CustomEvent('nextClicked', { detail: { message: 'Next' } });
            window.dispatchEvent(event);
        };
        const handleBack = () => {
            const event = new CustomEvent('backClicked', { detail: { message: 'Back' } });
            window.dispatchEvent(event);
        };

        const handleNumberPlus = () => {
            const event = new CustomEvent('nextClickedPlus', { detail: { message: 'NextNumber' } });
            window.dispatchEvent(event);
        };

        const handleNumberMinus = () => {
            const event = new CustomEvent('backClickedMinus', { detail: { message: 'BackNumber' } });
            window.dispatchEvent(event);
        };
    

    const code = '< / >'
    return (
        <div>
            <div className="flex justify-center items-center">
            <Button
                className="bg-transparent w-2 font-thin text-2xl"
                onClick={id==1 ? handleBack : handleNumberMinus}
            >
                Back
            </Button>
            <div>
                <span className="text-4xl font-thin text-black dark:text-white">
                {code}
                </span>
            </div>
            <Button
                className="bg-transparent font-thin text-2xl"
                onClick={id==1 ? handleNext : handleNumberPlus}
            >
                Next
            </Button>
            </div>
        </div>
    )

}