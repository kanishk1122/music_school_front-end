"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
   const [active, setActive] = useState<string | null>(null);
  return (
  <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
  <Menu setActive={setActive} >
    <Link href='/Home'>
    <MenuItem setActive={setActive} active={active} item='Home'>
    
    </MenuItem></Link>
    <Link href='allproduct'>
    <MenuItem setActive={setActive} active={active} item='All Product'>
    <div className=" flex flex-col gap-2  ">
      <HoveredLink  href='/allcourses'> ALL courses </HoveredLink>
      <HoveredLink  href='/basicmusic'> Basic music theory </HoveredLink>
      <HoveredLink  href='advencedcomposition'> Advanced composition  </HoveredLink>
      <HoveredLink  href='/songwriting'> songwriting </HoveredLink>
      <HoveredLink  href='/musicproductio'> Music production </HoveredLink>
    </div>
    </MenuItem>
    </Link>
  </Menu>
  </div>
  )
}

export default Navbar