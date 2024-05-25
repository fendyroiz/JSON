'use client'

import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react';
import { PopoverButtonProps } from '@headlessui/react';
import CancelIcon from '@mui/icons-material/Cancel';

import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { BiCalendarEdit } from "react-icons/bi";
import {LuBadgeInfo} from 'react-icons/lu'


const Navbar = () => {

  return (
    <nav>
      <header>
    
      {/* Responsive Navbar  */}  
      <Popover className='hidden sm:flex justify-evenly p-4 bg-[#fadde1] items-center h-8'>

          {/* Primer div (enlaces) */}
          <div className='hidden  space-x-10 items-center sm:flex md:space-x-20 lg:space-x-28 '>
            
            <div className=' p-1   font-serif text-[#ff0a54] text-lg'>
                <Link href={'/'}>Inicio</Link>
            </div>
            
            <div className=' p-1   font-serif text-[#ff0a54] text-lg'>
               <Link href={'/info'}>Acerca de</Link>
            </div>
            <div className=' p-1   font-serif text-[#ff0a54] text-lg'>
               <Link href={'/analizadores'}>comenzar a analizar</Link>
            </div>
            <div className=' p-1   font-serif text-[#ff0a54] text-lg'>
               <Link href={'/toke'}>Encontrar Tokens</Link>
            </div>
           
          </div>

          
          
      </Popover>
      


      <Popover className='sm:hidden font-bold bg-slate-700 h-20 flex justify-between  '>

        <Popover.Button className='text-3xl  p-6 '>
          <AiOutlineMenu />
        </Popover.Button>

        <Popover.Overlay className="fixed inset-0 " />

        <Popover.Panel className=" absolute top-16 w-60 left-7  bg-slate-400 p-5 rounded-md shadow-2xl  ">
           <Popover.Button className='text-3xl  p-6 '>
          <CancelIcon/>
          </Popover.Button>
          <div className='flex flex-col gap-5 text-white'>
            <div className='flex items-center'>
              <AiFillHome className='text-2xl mr-2' />
              <Link href='/'>Inicio</Link>
            </div>
            <div className='flex items-center'>
              <BiCalendarEdit className='text-2xl mr-2' />
              <Link href='/informacion'>Acerca de</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/analizador'>Analizar</Link>
            </div>
        
          </div>
         
        </Popover.Panel>

        
      </Popover>


     
   </header>
    </nav>
  )
}

export default Navbar
