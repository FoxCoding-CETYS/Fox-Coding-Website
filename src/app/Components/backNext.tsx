import { Button } from "@nextui-org/react"
export default function BackNext () {

    const handleNext = () => {
        const event = new CustomEvent('nextClicked', { detail: { message: 'Next' } });
        window.dispatchEvent(event);
    };
    const handleBack = () => {
        const event = new CustomEvent('backClicked', { detail: { message: 'Back' } });
        window.dispatchEvent(event);
    };

    const code = '< / >'
    return (
        <div>
            <div className="flex justify-center items-center">
            <Button
                className="bg-transparent w-2 font-thin text-2xl"
                onClick={handleBack}
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
                onClick={handleNext}
            >
                Next
            </Button>
            </div>
        </div>
    )

}