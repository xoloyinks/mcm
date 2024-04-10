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
                                <DialogTrigger className=' max-sm:hidden shadow-xl shadow-red-600/50 fixed right-10 cursor-pointer rounded-full p-5 bg-white z-50 bottom-8'>
                                <CgGirl className='text-xl' />
                                </DialogTrigger>
                                <DialogContent className='max-w-[550px]'>
                                    <DialogHeader>
                                    <DialogTitle>STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold py-3'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-center mb-4'><span>- {style} -</span></p>)}
                                        <span className='absolute text-xl bottom-5 right-4 italiana text-gray-300 z-50'>MCM</span>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            {/* Floating Styles Mobile */}
                            <Dialog>
                                <DialogTrigger className=' sm:hidden shadow-xl shadow-red-600/50 fixed right-5 cursor-pointer rounded-full p-4 bg-white z-50 bottom-10'>
                                    <CgGirl className='text-xl' />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle className='pb-6'>STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold relative text-left pt-5'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-center border-dotted mb-4 italiana'><span> - {style} -</span></p>)}
                                        <span className='absolute text-xl -bottom-5 -right-4 italiana text-gray-400 z-50'>MCM</span>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
    </>
  )
}
