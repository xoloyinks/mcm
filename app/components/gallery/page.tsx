import Image from 'next/image'
import React from 'react'

import gallery_1 from "../../images/gallery/IMG-20240210-WA0027.jpg"
import gallery_2 from "../../images/gallery/IMG-20240210-WA0024.jpg"
import gallery_3 from "../../images/gallery/IMG-20240210-WA0032.jpg"
import gallery_4 from "../../images/gallery/IMG-20240210-WA0029.jpg"
import gallery_5 from "../../images/gallery/IMG-20240210-WA0026.jpg"
import gallery_6 from "../../images/gallery/IMG-20240210-WA0012.jpg"
import gallery_7 from "../../images/gallery/IMG-20240210-WA0027.jpg"
import gallery_8 from "../../images/gallery/IMG-20240210-WA0035.jpg"
import gallery_9 from "../../images/gallery/IMG-20240210-WA0023.jpg"
import gallery_10 from "../../images/gallery/IMG-20240210-WA0031.jpg"


export default function Gallery() {
  return (
    <>
        <section className='px-20 w-screen pt-10 max-sm:px-3 py-3'>
            <div className='relative  py-5 text-center'>
                <span className='absolute text-gray-900 text-[80px] -top-10  sacramento font-semibold max-sm:text-6xl max-sm:top-0' >Beauty</span>
                <span className='absolute text-white text-4xl italiana'>Gallery</span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-16'>
                <div className='flex h-fit w-[70%] mx-auto gap-2 max-sm:block' >
                    <div className='w-5/12 max-sm:w-full'>
                        <Image src={gallery_1} alt='Gallery Image' width={0} height={0} className='w-full' />
                    </div>
                    <div className='w-6/12 flex flex-col justify-between max-sm:w-full' >
                        <div className='flex w-full justify-evenly gap-2 max-sm:justify-between max-sm:py-3'>
                            <Image src={gallery_2} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                            <Image src={gallery_3} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                        </div>
                        <div className='flex justify-evenly gap-2 max-sm:justify-between'>
                            <Image src={gallery_4} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                            <Image src={gallery_5} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                        </div>
                    </div>
                </div>
                {/* <div className='flex h-fit w-[70%] mx-auto gap-2 max-sm:block' >
                    <div className='w-5/12 max-sm:w-full'>
                        <Image src={gallery_6} alt='Gallery Image' width={0} height={0} className='w-full h-[470px] max-sm:h-[410px]' />
                    </div>
                    <div className='w-6/12 flex flex-col justify-between max-sm:w-full'>
                        <div className='flex w-full justify-evenly gap-2 max-sm:justify-between max-sm:py-3'>
                            <Image src={gallery_7} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                            <Image src={gallery_8} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                        </div>
                        <div className='flex justify-evenly gap-2 max-sm:justify-between'>
                            <Image src={gallery_9} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                            <Image src={gallery_10} alt='Gallery Image' width={0} height={0} className='w-[45%] max-sm:w-[48%]' />
                        </div>
                    </div>
                   
                </div> */}
            </div>
        </section>
    </>
  )
}
