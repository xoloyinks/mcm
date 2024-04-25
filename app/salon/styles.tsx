"use client"
import React from 'react'
import { CgGirl } from "react-icons/cg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PiCaretUp } from 'react-icons/pi';

const hair_styles = [
    "Braids",
    "Dread Locks",
    "Crotchet",
    "Didi",
    "Weaving",
    "Wiggin",
    "Kinky"
 ]

export default function Styles() {
  return (
    <>
                            {/* Floating Styles Desktop */}
                            <Dialog>
                                <DialogTrigger className=' max-sm:hidden shadow-xl shadow-red-600/50 fixed right-16 cursor-pointer rounded-full p-3 bg-gray-700 z-50 bottom-5'>
                                <CgGirl className='text-2xl text-white' />
                                </DialogTrigger>
                                <DialogContent className='max-w-[550px]'>
                                    <DialogHeader>
                                    <DialogTitle>HAIR STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold py-3'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-center mb-4'><span>- {style} -</span></p>)}
                                        <span className='absolute text-xl bottom-5 right-4 italiana text-gray-300 z-50'>MCM</span>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            {/* Floating Styles Mobile */}
                            <Dialog>
                                <DialogTrigger className=' sm:hidden shadow-xl shadow-red-600/50 fixed right-16 cursor-pointer rounded-full p-3 bg-gray-700 z-50 bottom-5'>
                                    <CgGirl className='text-2xl text-white' />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle className='pb-6'>HAIR STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold relative text-left pt-5'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-center border-dotted mb-4 italiana'><span> - {style} -</span></p>)}
                                        <span className='absolute text-xl -bottom-5 -right-4 italiana text-gray-400 z-50'>MCM</span>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <a href='#top' className='shadow-xl shadow-red-600/50 fixed right-2 cursor-pointer rounded-full p-3 bg-white z-50 bottom-5'>
                                <PiCaretUp className='text-2xl'/>
                            </a>
    </>
  )
}
