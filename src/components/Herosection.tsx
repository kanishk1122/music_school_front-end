import Link from 'next/link';
import React from 'react';
import { Button } from "./ui/moving-border";
import { Spotlight } from './ui/Spotlight';


const Herosection = () => {
  return (
    <div className='flex py-20 w-screen overflow-hidden  min-h-screen flex-col gap-11 justify-center   h-auto items-center relative '>
        <div><Spotlight
        className="-top-40 max-md:top-[14vh] left-0 md:left-60 md:-top-20"
        fill="white"
      /></div>
        <div className='flex flex-col gap-8 justify-center items-center '>
        <div><h1
        className="mt-20 md:mt-0  md: text-7xl
        font-bold bg-clip-text text-transparent
        bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Master the art of music </h1></div>
        <div className='max-md:w-full '><p
        className="mt-4 font-normal text-center md:text-lg
        text-neutral-300 max-w-lg mx-auto">
Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to
unlock your true potential.
Explore courses</p></div>
        </div>
        <Button
        borderClassName='rgb(74, 74, 72)'
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-[rgb(79, 79, 78)]"
      >
        <Link href='/courses'>Expore courses</Link>
        
      </Button>
    </div>
  )
}

export default Herosection

