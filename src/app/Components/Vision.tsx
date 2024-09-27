'use client'
import React from "react";
import { Button } from "@nextui-org/react";
import '@fontsource/roboto';
import BackNext from "./backNext";
export default function Vision() {
  return (
      <div className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-center w-full">
          <div className=" font font-bold text-6xl text-[#50C0FF]  dark:text-[#fae28b]">
            VISION
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-4/5 mt-4">
          <div>
            <div className=" font font-thin text-xl text-center text-black dark:text-white">
            We aim to excel in the technological field by achieving outstanding results in hackathons and competitive programming contests, both nationally and internationally. Furthermore
                <span className="dark:text-[#FFD850] text-[#FF5050] font-normal ml-1 mr-1">
                    we aspire to be pioneers in developing innovative projects
                </span>
                that tackle and solve real-world challenges, reflecting our commitment to technological advancement and the practical application of knowledge. 
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
