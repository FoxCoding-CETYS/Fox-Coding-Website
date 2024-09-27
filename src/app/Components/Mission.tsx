'use client'
import React from "react";
import { Button } from "@nextui-org/react";
import '@fontsource/roboto';
import BackNext from "./backNext";
export default function Mission() {
  return (
      <div className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-center w-full">
          <div className=" font font-bold text-6xl text-[#50C0FF]  dark:text-[#fae28b]">
            MISION
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-4/5 mt-4">
          <div>
            <div className=" font font-thin text-xl text-center text-black dark:text-white">
                To establish a benchmark in software development and the exploration of emerging technologies, 
                <span className="dark:text-[#FFD850] text-[#FF5050] font-normal ml-1 mr-1">
                  fostering an environment of innovation and continuous learning. 
                </span>
                We focus on empowering students to innovate and develop software solutions that address real-world needs, actively participating in hackathons and competitive programming contests. Additionally, we are dedicated to carrying out projects that directly apply the knowledge acquired.   
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
