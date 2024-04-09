"use client"
import React from 'react'
import { MdOutlineMenuBook } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const proteins = [
    "Grilled Chicken",
    "Fried Chicken",
    "Peppered Beef",
    "Fried Beef",
    "Peppered Fish",
    "Fried Fish"
]

const foods = [
    "Nigerian Jollof Rice",
    "Nigerian Fried Rice",
    "Ofada Rice & Sauce(Ayamase)",
    "Amala with Gbegiri & Ewedu",
    "Yam Porridge",
    "Ekuru",
    "Ewa Aganyin with Sauce",
    "Moi-Moi",
    "Meat Pies",
    "Sussage Rolls",
    "Bread Rolls",
    "Egusi Soup",
    "Vegetables Soup(Efo-riro)",
    "Plain Rice Stew",
    "Okra Soup",
    "Pepper Soup"
]

export default function Menu() {
  return (
    <>
                        {/* Floating Menu Desktop */}
                        <Dialog>
                            <DialogTrigger className=' max-sm:hidden shadow-xl shadow-red-600/50 fixed right-10 cursor-pointer rounded-full p-5 bg-white z-50 bottom-8'>
                                    <MdOutlineMenuBook className='text-xl' />
                            </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle>MENU</DialogTitle>
                                    <DialogDescription className='text-black text-[14px] font-semibold flex justify-between py-5'>
                                    <div className='w-6/12 px-3'>
                                        {foods.map((food, key) => <p key={key} className='flex items-center justify-center mb-4'><span>- {food} -</span></p>)}
                                    </div>
                                    <div className='w-5/12 px-3 text-center'>
                                        <span className='pb-6'>PROTEINS</span>
                                        {proteins.map((protein, key) => <p key={key} className='flex items-center justify-center  mb-4 mt-6'><span>- {protein} -</span></p>)}
                                    </div>
                                        <span className='absolute text-xl bottom-5 right-4 italiana text-gray-300 z-50'>MCM</span>
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                        </Dialog>

                        {/* Floating Menu Mobile view */}
                            <Dialog>
                                <DialogTrigger className=' sm:hidden shadow-xl shadow-red-600/50 fixed right-5 cursor-pointer rounded-full p-4 bg-white z-50 bottom-10'>
                                    <MdOutlineMenuBook className='text-xl' />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle className='text-left mb-2'>MENU</DialogTitle>
                                    <DialogDescription className='text-black text-sm font-semibold relative text-left'>
                                    <div>
                                        {foods.map((food, key) => <p key={key} className='flex items-center justify-center mt-4 mb-4'><span>- {food} -</span></p>)}
                                    </div> 
                                    <div>
                                        <span className='justify-center w-full py-4 font-bold mx-auto flex'>PROTEINS</span>
                                        {proteins.map((protein, key) => <p key={key} className='flex items-center justify-center mb-4'><span>- {protein} -</span></p>)}
                                    </div>
                                        
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
    </>
  )
}
