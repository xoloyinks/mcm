"use client"

import Image from "next/image";
import Link from "next/link";
import { PiCaretRight } from "react-icons/pi";
import { FaBars } from "react-icons/fa"

import hair from "../images/pexels-anna-shvets-3746226.jpg"
import food from "../images/9858dabef8e6b2da6332d2974d878421.jpeg"
import { Button } from "@/components/ui/button";

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

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const effectImages = [
    swiper_2,
    swiper_1,
    swiper_3
]

  return (
    <>
        <section className="w-full h-screen overflow-y-hidden">

          {/* Nav */}
            <div className="italiana font-semibold sm:hidden w-full text-center text-[10px] py-2 max-sm:text-sm max-[380px]:text-[11px]">MCM KITCHEN & HAIR BEAUTY SERVICES</div>
            <nav className="flex justify-between items-center px-20 py-8 max-lg:px-10 max-sm:px-5 max-sm:py-2">
                <div className="italiana text-4xl w-[35%] max-sm:text-2xl ">MCM</div>
                <div className="italiana font-semibold max-sm:hidden max-lg:text-sm w-[55%] text-center xl:text-center">MCM KITCHEN & HAIR BEAUTY SERVICES</div>
                <div className="xl:flex hidden gap-5 w-[35%] justify-end xl:">
                  <div className="text-slate-300 cursor-default">Home</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>Services</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Our services</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href='/salon'>MCM Beauty Hair salon</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href='/catering'>MCM Kitchen </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* <Link href='/'>About</Link> */}
                </div>
                <div className=" xl:hidden w-[20%] flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger><FaBars color="black" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Explore our Services</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href='/salon'>MCM Hair Beauty Salon</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href='/catering'>MCM Kitchen </Link>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem>
                        <Link href='#about'>About </Link>
                      </DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                    
                </div>
            </nav>

            <div className="h-[85%] overflow-y-hidden relative overflow-x-hidden  w-screen">
              <span className="w-full h-full absolute bg-black/50 backdrop-blur-[1px] z-10"></span>
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
                      className='absolute z-10 max-lg:h-full max-lg:min-w-[1200px] max-lg:hidden lg:h-full lg:min-w-[1300px] lg:w-screen lg:overflow-x-hidden'
                      >
                      {effectImages.map((el : any, i : number) => {
                          return <SwiperSlide key={i} className="lg:w-screen lg:overflow-x-hidden w-screen overflow-x-hidden"><Image src={el} alt={`Slide ${i} `}  className="max-lg:h-full max-lg:min-w-[1000px] lg:h-full lg:-translate-x-32 xl:translate-x-0 xl:h-fit max-sm:-translate-x-56" /></SwiperSlide>;
                      })}
              </Swiper>
                
                {/* Banner content */}
                <div className="banner-content absolute z-50 text-white top-0 w-full h-full flex items-center justify-center max-lg:flex-col-reverse max-lg:pb-5 lg:flex-col-reverse xl:flex-row  xl:items-center lg:pb-10">
                      <div className="w-[35%] h-[80%] max-lg:w-full check">
                        <Swiper
                          effect={'cards'}
                          grabCursor={true}
                          modules={[EffectCards, Pagination, Navigation, Autoplay]}
                          autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          className="mySwiper swiper-card w-[70%] h-full max-lg:w-[48%] lg:w-[100%] xl:w-[70%] max-sm:w-[70%] max-[380px]:w-[55%] max-[380px]: "
                        >
                          <SwiperSlide className="rounded-2xl relative">
                              <Image alt="MCM Beauty hair slide" src={hair} width={0} height={0} className="h-full absolute" />
                              <span className="w-full h-full bg-black/25 absolute"></span>
                              <div className="absolute w-full h-full z-30 px-5 py-5 flex flex-col justify-between">
                                <h1 className="text-4xl italiana text-center max-sm:text-2xl max-[391px]:text-[20px] font-semibold">MCM Hair <br className="max-sm:hidden" /> Beauty saloon</h1>
                                <Link href="/salon" className="flex justify-between h-fit w-[60%] mx-auto mb-5 bg-blue-600 px-5 py-2 items-center rounded-lg max-[380px]:text-[11px] max-[380px]:py-[4px]">
                                    <span>Explore</span>
                                    <PiCaretRight className="text-4xl animate-pulse max-sm:text-xl" />
                                </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide className="rounded-2xl ml-20 relative">
                            <Image alt="MCM Kitchen" src={food} width={0} height={0} className="h-full absolute z-10" />
                            <span className="w-full h-full bg-black/25 absolute z-10"></span>
                            <div className="absolute w-full h-full z-30 px-5 py-5 flex flex-col justify-between">
                            <h1 className="text-4xl italiana text-center max-sm:text-2xl max-[391px]:text-[20px] font-semibold">MCM Kitchen</h1>
                                <Link href="/catering" className="flex justify-between h-fit w-[60%] mx-auto mb-5 bg-blue-600 px-5 py-2 items-center rounded-lg max-[380px]:text-[11px] max-[380px]:py-[4px]">
                                    <span>Explore</span>
                                    <PiCaretRight className="text-4xl animate-pulse max-sm:text-xl" />
                                </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className="xl:w-[35%] max-lg:w-full max-lg:mx-auto max-lg:text-center pl-20 flex flex-col justify-evenly max-lg:items-center h-[80%]  my-10 max-lg:pl-0 lg:pl-0 lg-text-center lg:items-center lg:w-full xl:text-left xl:pl-20 xl:items-start max-sm:gap-3">
                          <h1 className="sm:text-4xl xl:w-[80%] max-lg:w-fit max-lg:mx-auto lg:text-center lg:w-fit xl:text-left max-sm:text-xl max-[380px]:text-[18px]">Ready for a 
                            <br /> 
                            <span className=" transform text-6xl text-yellow-500 font-semibold italiana max-sm:text-5xl max-sm:leading-12 max-[380px]:text-4xl">Transformative</span>
                            <br />
                            Fusion&#63;
                          </h1>
                          <h6 className="xl:text-sm max-[380px]:text-[12px] xl:w-[60%] xl:text-left  max-lg:w-[60%] max-lg:text-lg lg:text-center lg:text-[18px] lg:tracking-wider lg:leading-8 lg:w-[40%] xl:tracking-normal max-sm:text-sm">
                            Call us: <a href="tel:+12094609825"  className="underline text-blue-400 tracking-wide font-semibold">+1 209-460-9825</a> <br />
                            {/* <br className="max-sm:hidden" /> */}
                            <br className="max-lg:block hidden" /><form action="mailto:mcm.kitchens2024@gmail.com">Email: <button className="underline text-blue-400 font-semibold tracking-wide">mcm.kitchens2024@gmail.com</button></form>
                          </h6>
                          <h6 className="xl:text-sm xl:w-[60%] xl:text-left  max-lg:w-[60%] max-lg:text-lg lg:text-center lg:text-[18px] lg:tracking-wider lg:leading-8 lg:w-[40%] xl:tracking-normal max-sm:text-sm max-[380px]:text-[12px] max-[380px]:hidden">
                            327 Filbert Court&#44; <br className="max-lg:block hidden" /> Oakley California&#44; USA&#44; 94561&#46;
                          </h6>

                          {/* <Contact /> */}
                          <Drawer>
                            <DrawerTrigger><Button className="w-fit px-16 py-5 max-lg:mx-auto max-[380px]:py  max-[380px]:text-[12px]">Reach us</Button></DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle>Reach us</DrawerTitle>
                                <DrawerDescription>
                                  <div className="text-center mt-5">
                                      <h1 className="italiana text-xl font-semibold mb-5">MCM Kitchen & Hair Beauty Saloon</h1>
                                      <form action="mailto:mcm.kitchens2024@gmail.com">Email: <button className="underline text-blue-400 font-semibold tracking-wide">mcm.kitchens2024@gmail.com</button></form>
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
                </div>
            </div>


        </section>
    </>
  );
}
