'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import model from "../images/IMG-20240210-WA0012.jpg"
import rate from "../images/IMG-20240210-WA0022.jpg"
import freenzy from "../images/HD-wallpaper-black-hair-model-girls-model-removebg-preview (1).png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, EffectCards, Pagination, Navigation } from 'swiper/modules'
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-cards';
import swiper_1 from "../images/cc270c2ec0855e4ad3d9b6988b0caaa7.jpeg"
import swiper_2 from "../images/pexels-andrea-piacquadio-3768912.jpg"
import swiper_3 from "../images/pexels-ntsikelelo-radebe-12192379.jpg"

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
import Gallery from '../components/gallery/page';

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

const hair_styles = [
    {
        style: "Braids",
        price : "$20"
    },
    {
        style: "Dread Locks",
        price : "$20"
    },
    {
        style: "Crotchet",
        price : "$20"
    },
    {
        style: "Didi",
        price : "$20"
    },
    {
        style: "Weaving",
        price : "$20"
    },
    {
        style: "Wiggin",
        price : "$20"
    },
    {
        style: "Kinky",
        price : "$20"
    }
]


export default function Saloon() {
   
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
        <section className='w-screen h-fit overflow-x-hidden bg-gray-950'>

            {/* Banner */}
            <div className='w-screen h-screen overflow-y-hidden relative pb-5'>
                {/* Mobile view Brand title */}
                <div className="italiana font-semibold text-yellow-400 absolute z-20 text-center w-full py-2 sm:hidden max-[380px]:text-sm">MCM HAIR BEAUTY SALON</div>

                
                <nav className="flex justify-between items-center px-20 py-8 text-yellow-400 absolute z-40 w-full max-sm:px-5 max-sm:py-12">
                    <Link href='/' className="italiana text-4xl w-[35%] max-[380px]:text-3xl max-xl:w-[20%]">MCM</Link>
                    <div className="italiana font-semibold max-sm:hidden">MCM HAIR BEAUTY SALON</div>
                    <div className="flex gap-5 w-[35%] justify-end max-sm:hidden max-xl:hidden">
                        <Link href='/'>Home</Link>
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
                        <div className='text-[80px] sacramento text-white gap-3 max-sm:text-[50px] max-[380px]:text-5xl'>
                            Our Beauty Center
                        </div>
                        <div className='max-xl:hidden'>
                            <Dialog>
                                <DialogTrigger>
                                    <Button className="w-fit px-16 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px]">OUR STYLES</Button>
                                </DialogTrigger>
                                <DialogContent className='max-w-[550px]'>
                                    <DialogHeader>
                                    <DialogTitle>STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold py-3'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-between border-2 border-b-gray-300 border-dotted mb-4'><span>{key+1}&#46;   {style.style}</span><span>{style.price}</span></p>)}
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
                                    <Button className="w-fit px-16 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px] bg-transparent border-2 border-yellow-400">OUR STYLES</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle>STYLES</DialogTitle>
                                    <DialogDescription className='text-black text-md font-semibold relative text-left'>
                                    {hair_styles.map((style, key) => <p key={key} className='flex items-center justify-between border-2 border-b-gray-300 border-dotted mb-4'><span>{key+1}&#46;   {style.style}</span><span>{style.price}</span></p>)}
                                        <span className='absolute text-xl -bottom-5 -right-4 italiana text-gray-400 z-50'>MCM</span>
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
            <div id='about' className='w-screen h-screen overflow-x-hidden bgs-gray-950 relative flex items-center px-20 justify-center gap-20 max-sm:flex-col max-sm:px-10 max-[380px]:h-[120vh] max-xl:px-10 max-xl:h-fit max-xl:pb-16 max-xl:justify-evenly'>
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
                        <h1 className='text-4xl italiana text-yellow-400 max-sm:text-2xl max-sm:pt-16'>About MCM Salon</h1>
                        <p>Lorem ipsum dolor&#44; sit amet consectetur adipisicing elit&#46; Doloremque minus expedita cumque reprehenderit culpa velit commodi nam&#46; Cumque enim quaerat iure obcaecati numquam sit minima&#44; laborum animi voluptates est nisi&#46;</p>
                    </motion.div>
                    <motion.div className='w-fit rounded-3xl border border-yellow-600/50  max-sm:w-[80%] max-xl:w-[30%] max-sm:mt-5 max-xl:mt-32 '
                     initial={{opacity: 0, translateX:30}}
                     whileInView={{opacity: 1, translateX: 0}}
                     transition={{
                         duration: 1,
                         delay:0.5
                     }}
                    >
                        <Image src={model} alt='Model' width={0} height={500} className=' -translate-x-10 translate-y-5 rounded-3xl' />
                    </motion.div>
            </div>

            {/* Frenzy */}
            <motion.div
            initial={{ opacity:0}}
            whileInView={{opacity: 1}}
            transition={{
                type:"spring",
                duration:1,
                delay: 1
            }}
            className=' bg-gray-950 flex items-center text-white text-[100px] sacramento gap-10 max-sm:flex-col '>
                <Image alt='Freenzy model' src={freenzy} width={0} height={0} className=' ' />
                <span className='max-sm:text-6xl max-[380px]:text-5xl max-[380px]:pb-5 max-xl:text-[70px] max-xl:pr-24 max-sm:pr-0'>Hair Treatment</span>
                
            </motion.div>
            
            {/* Gallery */}
            <Gallery />

            {/* Haircut Prices */}
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
                                <span className='text-white text-2xl absolute right-0 italiana'>Haircut Prices</span>
                            </div>
                            <div className='flex w-full justify-evenly'>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-20 flex flex-col gap-5'>
                                    <Image src={highlight} alt='highlight' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Hair Cut With Blow Dry</span>
                                </div>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-20 flex flex-col gap-5'>
                                     <Image src={highlight} alt='highlight' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Hair Cut With Blow Dry</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-evenly w-fit'>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-5 flex flex-col gap-5'>
                                    <Image src={highlight} alt='highlight' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Hair Cut With Blow Dry</span>
                                </div>
                                <div className='bg-gray-900 p-5 w-[40%] text-center mt-5 flex flex-col gap-5'>
                                    <Image src={highlight} alt='highlight' width={60} height={60} className='mx-auto' />
                                    <span className='text-yellow-400 font-semibold' >Hair Cut With Blow Dry</span>
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
