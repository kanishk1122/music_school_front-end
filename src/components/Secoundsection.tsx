"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import allcontent from '../data/fakeapi.json' 
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";


const Secoundsection = () => {

  interface Course {
    id?: number;
    title?: string;
    description?: string;
    image: string;
    isFeatured?: boolean; // Make isFeatured property optional
    instructor?: string;
    price?: number;
  }


  const filterdata = allcontent.courses.filter(item=>item.isFeatured);

  

  return (
    <div className="h-[220vh] max-md:h-[600vh] overflow-hidden">
      <LampContainer >
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      <div className="w-[99.3vw] tracking-normal mt-[300px] overflow-hidden min-h-auto h-auto flex justify-center items-center">
      <div className="w-full h-fit flex flex-wrap justify-center items-center gap-5">
        {filterdata.map((courses:Course)=>(
          <div key={courses.id} className="w-1/4 min-w-[300px]  h-auto flex justify-center items-center">
          <CardContainer className="inter-var w-full h-full">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full min-w-[200px] h-full  rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
             {courses.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 h-fit text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {courses.description}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
             
              <Image
                src={courses.image}
                height="1000"
                width="1000"
                className="h-1/2 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
             <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Buy now →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {courses.price}$
              </CardItem>
            </div> 
          </CardBody>
        </CardContainer>
          </div>
        ))}
      </div>
   </div>
    </motion.h1>
  </LampContainer>
    </div>
   
  )
}

export default Secoundsection