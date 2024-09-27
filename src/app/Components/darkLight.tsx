import React from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes"
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../svg/Moon";
import {SunIcon} from "../svg/Sun";


export default function darkLight () {
    const { setTheme }= useTheme()
    const [Dark, setDark] = React.useState(true)
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (Dark) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
          }, 180);
        return () => clearInterval(interval);
    },[Dark])
    return (
        <div className="text-white flex-col space-y-5">
            <div>
            <Switch
                defaultSelected
                size="lg"
                color="success"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                onChange={() => setDark(!Dark)}
                >
            </Switch>
            </div>
        </div>
    )
}