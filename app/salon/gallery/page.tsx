"use client"
import Link from 'next/link'
import ReactPlayer from "react-player"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { PiCaretUp } from "react-icons/pi";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaBars } from 'react-icons/fa'

import image2 from "../../images/gallery/IMG-20240210-WA0027.jpg"
import image3 from "../../images/gallery/IMG-20240210-WA0033.jpg"
import image1 from "../../images/gallery/IMG-20240210-WA0016.jpg"
import image4 from "../../images/gallery/IMG-20240210-WA0035.jpg"
import image5 from "../../images/gallery/IMG-20240210-WA0032.jpg"
import image6 from "../../images/gallery/IMG-20240210-WA0030.jpg"
import image7 from "../../images/gallery/IMG-20240210-WA0023.jpg"
import image8 from "../../images/gallery/IMG-20240210-WA0011.jpg"
import image10 from "../../images/gallery/IMG-20240210-WA0031.jpg"
import image9 from "../../images/IMG-20240210-WA0015.jpg"
import image11 from "../../images/gallery/IMG-20240210-WA0022.jpg"
import image12 from "../../images/gallery/IMG-20240210-WA0014.jpg"
import image13 from "../../images/gallery/WhatsApp Image 2024-02-21 at 18.12.16_47326e0c.jpg"
import Image from 'next/image'
import Styles from '../styles';
export default function Gallery() {
  const currentYear = new Date();
  const year = currentYear.getFullYear();

const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
}, []);

if (!isMounted) {
    return null;
  }

  let vid1 = '/videos/clothes/IMG_5820.mp4'
  let vid2 = '/videos/clothes/IMG_5822.mp4'
  let vid3 = '/videos/clothes/IMG_5825.mp4'
  let vid4 = '/videos/clothes/IMG_5827.mp4'
  let vid5 = '/videos/clothes/IMG_5828.mp4'
  let vid6 = '/videos/clothes/IMG_5830.mp4'
  let vid7 = '/videos/clothes/IMG_5834.mp4'
  let vid8 = '/videos/clothes/IMG_5836.mp4'
  let vid9 = '/videos/clothes/IMG_5838.mp4'
  let vid10 = '/videos/clothes/IMG_5840.mp4'
  let vid11 = '/videos/clothes/IMG_5843.mp4'
  let vid12 = '/videos/clothes/IMG_5862.mp4'
  let vid13 = '/videos/clothes/IMG_5850.mp4'
  let vid14 = '/videos/clothes/IMG_5852.mp4'
  let vid15 = '/videos/clothes/IMG_5853.mp4'
  let vid16 = '/videos/clothes/IMG_5861.mp4'

  return (
    <>
        <Styles />
        <section className='relative w-screen overflow-x-hidden'>
            <div  id='okay'></div>
            <nav className='fixed bg-gradient-to-r from-blue-500/50 via-pink-500/25 to-yellow-600/25 backdrop-blur-xl z-40 rounded-b-3xl'>
                    {/* Mobile view Brand title */}
                    <div className="italiana font-semibold text-yellow-400 absolute z-20 text-center w-full pt-2 sm:hidden max-[380px]:text-sm">MCM GALLERY</div>
                    <div className="flex justify-between items-center px-20 py-8 text-yellow-400 w-screen max-sm:px-5 max-sm:py-4 bg-transparent font-semibold max-sm:text-sm max-sm:pt-8" >
                        <Link href='/' className="italiana text-4xl w-[35%] max-[380px]:text-3xl max-sm:text-3xl max-xl:w-[20%]">MCM</Link>
                        <div className="italiana font-semibold max-sm:hidden">MCM BEAUTY GALLERY</div>
                        <div className="flex gap-5 w-[35%] justify-end max-sm:hidden max-xl:hidden">
                            <span  className='text-slate-400 cursor-default'>Gallery</span>
                            <Link href='/salon'>Salon</Link>
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
                                    <Link href='/salon'>Salon</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href='#about'>About </Link>
                                </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
            </nav>
 
            <section id='gallery' className='w-full h-screen max-sm:w-screen bg-black z-20 '>
                <div className='w-full flex h-[50vh] max-sm:block max-sm:h-fit sm:h-[35vh] xl:h-[50vh]'>
                    <Image src={image3} alt="Fries" width={0} height={0} className='xl:w-[30%] sm:w-[30%]' />
                    <Image src={image1} alt="Fries" width={0} height={0} className='xl:w-[42%] max-sm:w-screen sm:w-[40%]' />
                    <Image src={image2} alt="Fries" width={0} height={0} className='xl:w-[30%] w-full sm:w-[30%]' />
                </div>
                <div className='flex h-[80vh] xl:h-[70vh] max-sm:block sm:h-[35vh] '>
                    <Image src={image4} alt="Fries" width={0} height={0} className='xl:w-[40%] sm:w-[40%]' />
                    <Image src={image11} alt='Link' width={0} height={0} className='w-[25%] max-sm:w-full' />
                    <Image src={image5} alt="Fries" width={0} height={0} className='xl:w-[35%] sm:w-[30%]' />
                </div>
                {/* <div className='w-full flex h-[80vh] max-sm:block max-sm:h-fit bg-black sm:h-[40vh] xl:h-[80vh]'>
                    <Image src={image12} alt='Link' width={0} height={0} className='w-[23%] max-sm:w-full' />
                    <Image src={image6} alt="Fries" width={0} height={0} className=' sm:w-[35%] xl:w-[35%]' />
                    <Image src={image7} alt="Fries" width={0} height={0} className='xl:w-[42%]' />
                </div> */}
                <div className='w-full flex h-[80vh] max-sm:block max-sm:h-fit sm:h-[40vh] xl:h-[80vh] '>
                    <Image src={image8} alt="Fries" width={0} height={0} className='xl:w-[42%]' />
                    <Image src={image9} alt="Fries" width={0} height={0} className='xl:w-[30%]' />
                    <Image src={image10} alt="Fries" width={0} height={0} className='xl:w-[30%]' />
                </div>


                {/* Clothe Catalogue */}
                <div className='py-8 px-5 bg-gray-900'>
                   <h1 className='text-xl text-white text-center'> Also check out our <br /> Exclusive Clothing Catalogue</h1>
                </div>
                {/* Clothe Gallery */}
                <div className='w-full flex justify-evenly bg-gray-900 h-[80vh] max-sm:block max-sm:h-fit sm:h-[40vh] xl:h-[80vh]  sm:pt-5 '>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid1}
                            controls={true}
                            playing={true}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid1} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid2}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid2} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid3}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid3} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid4}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid4} type="video/mp4" className='w-full hidden' />
                    </div>
                </div>

                <div className='w-full flex justify-evenly bg-gray-900 h-[80vh] max-sm:block max-sm:h-fit sm:h-[40vh] xl:h-[80vh]  sm:pt-24'>
                <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid5}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid5} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid6}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid6} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid7}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid7} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid8}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid8} type="video/mp4" className='w-full hidden' />
                    </div>
                </div>

                <div className='w-full flex justify-evenly bg-gray-900 h-[80vh] max-sm:block max-sm:h-fit sm:h-[40vh] xl:h-[80vh]  sm:pt-44'>
                <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid9}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid9} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid10}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid10} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid11}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid11} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid12}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid12} type="video/mp4" className='w-full hidden' />
                    </div>
                </div>

                <div className='w-full flex justify-evenly bg-gray-900 h-[80vh] max-sm:block max-sm:h-fit sm:h-[40vh] xl:h-fit sm:pb-5 sm:pt-24 '>
                <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid13}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid13} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid14}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid14} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid15}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid15} type="video/mp4" className='w-full hidden' />
                    </div>
                    <div className='w-[23%] flex items-center  max-sm:w-full '>
                            <ReactPlayer
                            url={vid16}
                            controls={true}
                            playing={false}
                            loop={true}
                            muted={true}
                            light={false}
                            pip={true}
                            height={680}
                            
                            />
                      <source src={vid16} type="video/mp4" className='w-full hidden' />
                    </div>
                </div>


                {/* Contact */}
             <div className='h-[60vh] bg-gray-950 py-10 relative flex max-sm:flex-col-reverse max-sm:h-fit max-xl:px-5'>
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
             
        </section>
    </>
  )
}
