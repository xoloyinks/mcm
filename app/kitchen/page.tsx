'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { MdOutlineMenuBook } from "react-icons/md";
import { motion } from 'framer-motion';
import model from "../images/gallery/WhatsApp Image 2024-02-21 at 20.23.03_c896ff52.jpg"
import rate from "../images/IMG-20240210-WA0007.jpg"
import freenzy from "../images/pexels-nathan-cowley-1153372-removebg-preview.png"
import card from "../images/WhatsApp Image 2024-02-22 at 19.13.15_1927c9bs.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, EffectCards, Pagination, Navigation } from 'swiper/modules'
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-cards';
import swiper_1 from "../images/pexels-chan-walrus-958545.jpg"
import swiper_2 from "../images/pexels-ella-olsson-1640777.jpg"
import swiper_3 from "../images/pexels-robin-stickel-70497.jpg"

import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { FaBars } from 'react-icons/fa';
  
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
  

const effectImages = [
    swiper_2,
    swiper_1,
    swiper_3
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

const proteins = [
    "Grilled Chicken",
    "Fried Chicken",
    "Peppered Beef",
    "Fried Beef",
    "Peppered Fish",
    "Fried Fish"
]

export default function Kitchen(){

   
    const [formattedTime, setFormattedTime] = useState('');
    const [isMounted, setIsMounted] = useState(false);
   

 
    

    const daysOfTheWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek : number = currentDate.getDay();
    const options : any = { month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    const currentYear = new Date();
    const year = currentYear.getFullYear();


    useEffect(() => {
        const updateTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  
        const formattedTimeString = `${hours}:${minutes}:${seconds}`;
        setFormattedTime(formattedTimeString);

        setIsMounted(true);
      };
  
      // Update time every 100 milliseconds (adjust as needed)
      const intervalId = setInterval(updateTime, 100);
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, []);

    if (!isMounted) {
        return null;
    }



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
                       
        <section className='w-screen h-fit overflow-x-hidden bg-gray-950 relative'>
            {/* Banner */}
            <div className='w-screen h-screen overflow-y-hidden relative pb-5'>
                {/* Mobile view Brand title */}
                <div className="italiana font-semibold text-yellow-400 absolute z-20 text-center w-full py-2 sm:hidden max-[380px]:text-sm">MCM KITCHEN</div>

                
                <nav className={` flex justify-between items-center px-20 py-8 text-yellow-400 absolute z-40 w-full max-sm:px-5 max-sm:py-12`}>
                    <Link href='/' className="italiana text-4xl w-[35%] max-[380px]:text-3xl max-xl:w-[20%]">MCM</Link>
                    <div className="italiana font-semibold max-sm:hidden">MCM KITCHEN</div>
                    <div className="flex gap-5 w-[35%] justify-end max-sm:hidden max-xl:hidden">
                        <Link href='/'>Home</Link>
                        <Link href='/kitchen/gallery'>Gallery</Link>
                        <Link href='#about'>About</Link>
                        <span>
                            <Drawer>
                                <DrawerTrigger>Reach us</DrawerTrigger>
                                <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Reach us</DrawerTitle>
                                    <DrawerDescription>
                                    <div className="text-center mt-5">
                                        <h1 className="italiana text-xl font-semibold mb-5">MCM Kitchen & Hair Beauty Saloon</h1>
                                        <div>Email: <button className="underline text-blue-400 font-semibold tracking-wide">mcm.kitchens2024@gmail.com</button></div>
                                        <br />
                                        <div>Call us: <a href="tel:+12094609825"  className="underline text-blue-400 tracking-wide font-semibold">+1 209-460-9825</a></div>
                                    </div>
                                    <form method='POST' action="https://formspree.io/f/myyrekjv" className='mt-5 flex flex-col gap-5 w-3/12 mx-auto max-sm:w-full max-xl:w-full'>
                                        <Input type='text' placeholder='Your Name' name='Name' />
                                        <Input type='text' name='Email' placeholder='Your Email' required />
                                        <Textarea name='Message' placeholder='Your Message' required />
                                        <Button type='submit' className='sacramento xl:w-full max-sm:w-full px-20 text-white font-bold'>Send Message</Button>
                                    </form>
                                    </DrawerDescription>
                                </DrawerHeader>
                                </DrawerContent>
                            </Drawer>
                        </span>
                    </div>
                    <div className='text-2xl xl:hidden max-xl:w-[20%] max-xl:flex max-xl:justify-end'>
                        <DropdownMenu>
                            <DropdownMenuTrigger> <FaBars /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href='/'>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/kitchen/gallery'>Gallery</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='#about'>About </Link>
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>

                <span className='absolute z-10 w-full h-full bg-black/50'></span>

                {/* Banner content */}
                <motion.div className='absolute z-20 w-screen h-screen flex flex-col justify-center items-center'
                initial={{opacity: 0, translateY: 30}}
                whileInView={{opacity: 1, translateY: 0}}
                transition={{
                    duration: 1,
                    delay: 0.5
                }}
                >
                        <span className='text-[80px] sacramento text-white gap-3 max-sm:text-[50px] max-[380px]:text-5xl'>Savor Every Bite</span>
                        <div className='max-xl:hidden'>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className="w-fit px-16 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px]">OUR MENU</Button>
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
                        </div>

                        {/* Mobile Display */}
                        <div className='gap-5 hidden max-xl:flex max-xl:flex-col'>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className="w-fit px-12 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px] bg-transparent border-2 border-yellow-400">OUR MENU <MdOutlineMenuBook className='text-xl ml-2' /></Button>
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

                            <Drawer>
                            <DrawerTrigger><Button className="w-fit px-16 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px]">Reach us</Button></DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle>Reach us</DrawerTitle>
                                <DrawerDescription>
                                  <div className="text-center mt-5">
                                      <h1 className="italiana text-xl font-semibold mb-5">MCM Kitchen & Hair Beauty Saloon</h1>
                                      <div>Email: <button className="underline text-blue-400 font-semibold tracking-wide">mcm.kitchens2024@gmail&#46;com</button></div>
                                      <br />
                                      <div>Call us: <a href="tel:+12094609825"  className="underline text-blue-400 tracking-wide font-semibold">+1 209-460-9825</a></div>
                                  </div>
                                  <form method='POST' action="https://formspree.io/f/myyrekjv" className='mt-5 flex flex-col gap-5 w-3/12 mx-auto max-sm:w-full max-xl:w-full'>
                                    <Input type='text' placeholder='Your Name' name='Name' />
                                    <Input type='text' name='Email' placeholder='Your Email' required />
                                    <Textarea name='Message' placeholder='Your Message' required />
                                    <Button type='submit' className='sacramento xl:w-full max-sm:w-full px-20 text-white font-bold'>Send Message</Button>
                                  </form>
                                </DrawerDescription>
                              </DrawerHeader>
                            </DrawerContent>
                          </Drawer>
                         </div>

                </motion.div>

                {/* Tags */}
                <motion.div className='absolute left-0 top-36 rounded-br-full rounded-tr-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-[380px]:text-4xl'
                initial={{ translateX:-50}}
                animate={{translateX:0}}
                transition={{
                    type:"just",
                    duration:1
                }}
                >
                    <h6>Main</h6>
                </motion.div>

                
                <Swiper
                      spaceBetween={30}
                      modules={[EffectFade, Autoplay]} 
                      slidesPerView={1}
                      effect={"fade"}
                      speed={1500}
                      autoplay= {{
                          delay: 10000,
                          disableOnInteraction: false,
                      }}
                      className='absolute z-0 max-sm:h-full max-xl:h-full'
                      >
                      {effectImages.map((el : any, i : number) => {
                          return <SwiperSlide key={i}><Image src={el} alt={`Slide ${i} `} className='max-sm:h-full max-sm:min-w-[1000px] max-sm:-translate-x-44 max-xl:h-full max-xl:min-w-[1200px] max-xl:-translate-x-32' /></SwiperSlide>;
                      })}
              </Swiper>
            </div>
            
            {/* About */}
            <div id='about' className='w-screen h-screen overflow-x-hidden bgs-gray-950 relative flex items-center px-20 justify-center gap-20 max-sm:flex-col max-sm:px-10 max-[380px]:h-[120vh] max-xl:px-10 max-xl:h-fit max-xl:pb-16 max-xl:justify-evenly'
           
            >
                <div className='text-6xl absolute left-36 sacramento -rotate-90 text-slate-900 max-sm:left-64 max-sm:w-fit max-xl:-left-10'>
                    About us
                </div>
                <motion.div
                initial={{ translateX:50}}
                animate={{translateX:0}}
                transition={{
                    type:"just",
                    duration:1
                }}
                className='absolute right-0 top-0 rounded-bl-full rounded-tl-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-sm:text-2xl max-xl:text-4xl'>
                    <h6 className=''>About MCM</h6>
                </motion.div>
                    <motion.div className='text-white w-[30%] flex flex-col gap-5  max-sm:w-full max-xl:mt-32 max-xl:w-[40%] max-sm:mt-5'
                     initial={{opacity: 0, translateX:30}}
                     whileInView={{opacity: 1, translateX: 0}}
                     transition={{
                         duration: 1
                     }}
                    >
                        <h1 className='text-4xl italiana text-yellow-400 max-sm:text-2xl max-sm:pt-16'>About MCM Kitchen</h1>
                        <p>At MCM Kitchen&#44; we deliver classy and high-quality foods made with the freshest African ingredients and using traditional recipes passed down through generations&#46; This ensures that our foods are not only delicious but also the healthiest option available&#46;
                        <br />
                        <br />
                        Our menu is so authentic that you can taste it in your soul&#46; We offer delivery and catering services&#44; catering to both individuals/household consumption and events&#46; Let your appetite take over at MCM Kitchen!</p>
                        <Link href='/catering/gallery' className="w-fit px-16 py-3 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px] bg-yellow-400 rounded-xl text-slate-800 font-semibold max-sm:py-3">Our Gallery</Link>
                    </motion.div>
                    <motion.div className='w-fit rounded-3xl border border-yellow-600/50  max-sm:w-[80%] max-xl:w-[30%] max-sm:mt-0 max-xl:mt-32 '
                     initial={{opacity: 0, translateX:30}}
                     whileInView={{opacity: 1, translateX: 0}}
                     transition={{
                         duration: 1,
                         delay:0.5
                     }}
                    >
                        <Image src={model} alt='Model' width={0} height={500} className=' -translate-x-10 translate-y-5 rounded-3xl max-sm:-translate-x-5' />
                    </motion.div>
            </div>

            {/* Services */}
            {/* <div id='services' className='h-[70vh] w-screen overflow-y-hidden relative max-sm:h-[120vh] max-sm:overflow-x-hidden max-[380px]:h-[155vh] max-xl:h-[50vh]'>
                <motion.div
                initial={{translateX:-50}}
                whileInView={{translateX:0}}
                transition={{
                    type:"spring",
                    duration:1
                }}
                className='absolute left-0 top-0 rounded-br-full rounded-tr-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-sm:text-2xl max-xl:text-4xl'>
                    <h6 className=''>Our services</h6>
                </motion.div>

                <span className='absolute z-10 w-full h-full bg-black/70 max-xl:h-'></span>
                <Image src={services} alt='Services background' width={0} height={0} className='absolute max-sm:h-[120vh] max-sm:min-w-[1200px] max-sm:-translate-x-44 max-[380px]:h-[165vh] max-[380px]:min-w-[1400px] max-[380px]:-translate-x-72 max-xl:h-[50vh]' />
                <div className='w-full h-full absolute z-20 flex items-center justify-evenly max-sm:flex-col max-sm:mt-24 max-sm:gap-8 max-sm:justify-start max-xl:mt-0 max-xl:justify-between max-xl:text-[14px]'>
                      <motion.div
                      initial={{opacity: 0, translateY:50}}
                      whileInView={{opacity: 1, translateY:0}}
                      transition={{
                          type:"just",
                          duration:1,
                          delay: 0.5
                      }}
                      className='flex flex-col gap-10 items-center text-yellow-400 w-[30%] max-sm:w-full max-sm:gap-5 max-xl:w-[33%] max-xl:gap-5'>
                        <Image src={seafood} alt='seafood' width={60} height={60} />
                        <span className='text-2xl font-semibold'>Sea Foods</span>
                        <span className='w-[80%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit&#46; Nisi&#44; cum sint repellat sequi dolores corrupti quia temporibus impedit&#44; praesentium&#44; tenetur maxime dolore provident consequatur necessitatibus alias iste corporis libero ratione&#33;
                        </span>
                      </motion.div>
                      <motion.div
                      initial={{opacity: 0, translateY:50}}
                      whileInView={{opacity: 1, translateY:0}}
                      transition={{
                          type:"just",
                          duration:1,
                          delay: 0.8
                      }}
                      className='flex flex-col gap-10 items-center text-yellow-400 w-[30%] max-sm:w-full max-sm:gap-5 max-xl:w-[33%] max-xl:gap-5'>
                        <Image src={vegetables} alt='highlight' width={60} height={60} />
                        <span className='text-2xl font-semibold'>Vegetables</span>
                        <span className='text-center w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit&#46; Nisi&#44; cum sint repellat sequi dolores corrupti quia temporibus impedit&#44; praesentium&#44; tenetur maxime dolore provident consequatur necessitatibus alias iste corporis libero ratione&#33;
                        </span>
                      </motion.div> 
                      <motion.div
                      initial={{opacity:0, translateY:50}}
                      whileInView={{opacity:1,translateY:0}}
                      transition={{
                          type:"just",
                          duration:1,
                          delay: 1
                      }}
                      className='flex flex-col gap-10 items-center text-yellow-400 w-[30%] max-sm:w-full max-sm:gap-5 max-xl:w-[33%] max-xl:gap-5'>
                        <Image src={meat} alt='meat' width={60} height={60} />
                        <span className='text-2xl font-semibold'>Meat</span>
                        <span className='text-center w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit&#46; Nisi&#44; cum sint repellat sequi dolores corrupti quia temporibus impedit&#44; praesentium&#44; tenetur maxime dolore provident consequatur necessitatibus alias iste corporis libero ratione&#33;
                        </span>
                      </motion.div>
                </div>
            </div> */}

            {/* Frenzy */}
            <motion.div
            initial={{ opacity:0}}
            whileInView={{opacity: 1}}
            transition={{
                type:"spring",
                duration:1,
                delay: 0.5
            }}
            className=' bg-gray-950 flex items-center text-white text-[100px] sacramento gap-10 max-sm:flex-col max-sm:pb-5'>
                <Image alt='Freenzy model' src={freenzy} width={0} height={0} className=' ' />
                <span className='max-sm:text-5xl  max-[380px]:text-5xl max-[380px]:pb-5 max-xl:text-[70px] max-xl:pr-24 max-sm:pr-0'>Extraordinary Taste</span>
                
            </motion.div>
        
            {/* Kitchen Prices */}
            {/* <div className='w-screen relative h-screen bg-gray-950 flex items-center justify-center max-sm:h-fit max-[380px]:mb-5 max-xl:items-start max-xl:h-fit'>
                <motion.div
                initial={{ translateX:50}}
                whileInView={{translateX:0}}
                transition={{
                    type:"spring",
                    duration:1
                }}
                className='absolute right-0 top-0 rounded-bl-full rounded-tl-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-sm:text-4xl max-xl:text-4xl'>
                    <h6 className=''>Rates</h6>
                </motion.div>

                <div className='flex max-sm:flex-col-reverse max-xl:mt-32 max-xl:px-5 max-sm:mt-0 max-sm:px-0'>
                    <motion.div
                    initial={{opacity:0, translateX:-50}}
                    whileInView={{opacity:1, translateX:0}}
                    transition={{
                        type:"spring",
                        duration:1,
                        delay: 0.5
                    }}
                    className='border p-4 border-dotted border-yellow-600/50 w-[50%] max-sm:w-[78%] max-sm:mt-3 max-sm:mx-auto max-sm:px-5'>
                        <Image src={rate} alt='Haircut image' width={400} height={0} />
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, translateX:50}}
                    whileInView={{opacity:1, translateX:0}}
                    transition={{
                        type:"spring",
                        duration:1,
                        delay:1
                    }}
                    className='w-[50%] max-sm:mt-32 max-sm:w-full max-sm:px-5 max-xl:mt-0'>
                        <div className='w-fit'>
                            <div className='relative text-right'>
                                <span className='absolute font-bold sacramento text-[80px] right-0 text-gray-900 -top-10'>Prices</span>
                                <span className='text-white text-2xl absolute right-0 italiana'>Kitchen Prices</span>
                            </div>
                            <div className='flex w-full justify-evenly'>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-20 flex flex-col gap-5'>
                                    <Image src={seafood} alt='seafood' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Sea Food with Ketchup</span>
                                </div>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-20 flex flex-col gap-5'>
                                     <Image src={seafood} alt='seafood' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Sea Food with Ketchup</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-evenly w-fit'>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-5 flex flex-col gap-5'>
                                    <Image src={seafood} alt='seafood' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Sea Food with Ketchup</span>
                                </div>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-5 flex flex-col gap-5'>
                                    <Image src={seafood} alt='seafood' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Sea Food with Ketchup</span>
                                </div>
                        </div>
                    </motion.div>
                </div>
            </div> */}

            {/* Working hours */}
            <div className='w-full bg-gray-950 h-fit py-10 relative pt-36 px-[350px] max-sm:px-5 max-sm:pt-28 max-xl:px-5' >
                <motion.div
                initial={{ translateX:-50}}
                whileInView={{translateX :0}}
                transition={{
                    type:"spring",
                    duration:1
                }}
                className='absolute left-0 top-0 rounded-br-full rounded-tr-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-sm:text-2xl max-xl:text-4xl'>
                    <h6 className=''>Working Hours</h6>
                </motion.div>
                
                <motion.div
                
                className='relative '>
                    <span className='absolute font-bold sacramento text-[80px] left-0 text-gray-900 -top-10'>Working</span>
                    <span className='text-white text-2xl absolute left-0 italiana'>Working Hours</span>
                </motion.div>

                <motion.div
                initial={{ opacity:0}}
                whileInView={{opacity:1}}
                transition={{
                    type:"spring",
                    duration:1,
                    delay: 0.5
                }}
                className='w-full mt-20 flex gap-5 max-sm:flex-col-reverse '>
                    <div className='text-white inter w-6/12 text-lg flex flex-col gap-5 max-sm:w-full max-[380px]:text-sm' >
                        <div className='flex justify-between items-center'>
                            <span>Working Days</span>
                            <span>9AM&#8211;9PM</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Saturday</span>
                            <span>9AM&#8211;9PM</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Sunday</span>
                            <span>9AM&#8211;9PM</span>
                        </div>
                    </div>

                    {/* Time and Date */}
                    <div className='w-6/12 bg-gray-900 border-l-4 text-yellow-400 border-yellow-600/50 px-5 py-3 flex flex-col justify-between max-sm:w-full max-sm:gap-5'>
                        <span className='text-3xl inter'>
                            {formattedDate}&#44; {daysOfTheWeek[dayOfWeek]}
                        </span>
                        <span className='text-2xl'>
                            {formattedTime}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Contact */}
            <Image src={card} width={0} height={0} alt='Our Card' className='mx-auto' />
            <div className='h-[60vh] bg-gray-950 py-10 mt-10 relative flex max-sm:flex-col-reverse max-sm:h-fit max-xl:px-5'>
                <motion.div
                initial={{ translateX:50}}
                whileInView={{translateX:0}}
                transition={{
                    type:"just",
                    duration:1
                }}
                className='absolute right-0 top-0 rounded-bl-full rounded-tl-xl z-20 bg-yellow-400 px-16 py-5 text-6xl italiana text-slate-800 max-sm:text-4xl'>
                    <h6 className=''>Contact</h6>
                </motion.div>
                <motion.div
                initial={{ opacity:0}}
                animate={{opacity:1}}
                transition={{
                    type:"just",
                    duration:1,
                    delay: 0.5
                }}
                className='text-black w-[50%] h-full max-sm:w-full max-sm:px-5 max-sm:py-3 max-sm:mt-10 max-sm:h-[250px] max-xl:h-[35vh] max-xl:mt-20'>
                    <Map 
                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
                        initialViewState={{
                            longitude: -121.680478,
                            latitude:37.995735 ,
                            zoom: 10
                        }}
                        style={{width: '100%', height: '100%' }}
                        mapStyle='mapbox://styles/mapbox/streets-v9'
                    />
                </motion.div>

                {/* Contact Form */}
                <motion.div
                initial={{ opacity:0}}
                animate={{opacity:1}}
                transition={{
                    type:"just",
                    duration:1,
                    delay: 1
                }}
                className='w-6/12 px-5 max-sm:w-full max-sm:mb-5 max-[395px]:mt-16 max-xl:mt-20'>
                    <div className='relative text-right'>
                        <span className='absolute font-bold sacramento text-[80px] left-0 text-gray-900 -top-10'>Contact</span>
                        <span className='text-white text-2xl absolute left-5 italiana'>Get In Touch</span>
                    </div>

                    <form method='POST' action="https://formspree.io/f/myyrekjv" className='mt-24 flex flex-col gap-5 w-8/12 max-sm:w-full max-xl:w-full'>
                        <Input type='text' placeholder='Your Name' name='Name' />
                        <Input type='text' name='Email' placeholder='Your Email' required />
                        <Textarea name='Message' placeholder='Your Message' required />
                        <Button type='submit' className='sacramento w-fit px-20 text-white font-bold'>Send Message</Button>
                    </form>
                </motion.div>
            </div>

            {/* Copywriter */}
            <div className='bg-gray-950 text-center py-5 text-yellow-400 text-sm max-sm:text-[12px] max-sm:px-3'>
                Copyright &copy; {year} MCM Hair Saloon and Beauty. All Rights Reserved.
            </div>
        </section>
    </>

  )
}
