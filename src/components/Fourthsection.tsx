"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import feedback from '../data/fakefeedback.json'

const Fourthsection = () => {
  return (

    <div className="h-screen w-screen overflow-x-hidden dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center">
      <p className="mt-20 md:mt-0   text-2xl
        font-bold bg-clip-text text-transparent
        max-md:text-sm
        bg-gradient-to-b from-neutral-50 to-neutral-400">he
      Hear our Harmony: Voices of success</p>
      <div className="h-full rounded-md flex flex-col antialiased bg-white dark:bg-transparent  items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={feedback}
      direction="right"
      speed="slow"
    />
  </div>
      </div>
    </div>

  )
}

export default Fourthsection