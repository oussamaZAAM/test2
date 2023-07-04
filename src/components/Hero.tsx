import React from 'react'
import { K2D, Roboto, Jost } from 'next/font/google'
import Image from 'next/image';

const taglineFont = K2D({ weight: "400", subsets: ['latin'] });
const miniTaglineFont = Roboto({ weight: "400", subsets: ['latin'] });
const buttonFont = Jost({ weight: "400", subsets: ['latin'] });
type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='relative flex w-full px-4 sm:px-12 xm:px-24 lg:px-36 xl:px-48 py-32 mt-20'>
            <div className="parallax-bg absolute inset-0 bg-fixed bg-center"></div>
            {/* Web Overlay  */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full z-20 hero-gradient"></div>

            {/* Mobile Overlay  */}
            <div className="md:hidden block absolute top-0 left-0 w-full h-full z-20 hero-gradient-mobile"></div>

            <div className="flex flex-col justify-center items-center gap-12 z-30">
                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 className={taglineFont.className + " max-w-sm md:max-w-md lg:max-w-lg whitespace-normal text-5xl"}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit mauris in condimentum
                    </h1>
                    <p className={miniTaglineFont + " text-lg italic max-w-sm md:max-w-md"}>Vestibulum consequat augue nec mi rhoncus iaculis</p>
                </div>
                <div className="flex justify-center items-center bg-ac-bleu p-5 max-w-[200px] group hover:bg-transparent border-2 border-ac-bleu transition duration-300 cursor-pointer">
                    <p className={buttonFont + " uppercase text-xl font-bold text-white group-hover:text-ac-bleu transition duration-300"}>Nos Services</p>
                </div>
            </div>
        </div>
    )
}