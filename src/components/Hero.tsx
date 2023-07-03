import React from 'react'
import { K2D, Roboto, Jost } from 'next/font/google'
import Image from 'next/image';

const taglineFont = K2D({ weight: "400", subsets: ['latin'] });
const miniTaglineFont = Roboto({ weight: "400", subsets: ['latin'] });
const buttonFont = Jost({ weight: "400", subsets: ['latin'] });
type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='relative flex w-full px-48 py-32'>
            <div className="parallax-bg absolute inset-0 bg-fixed bg-center"></div>
            <div className="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-r from-white from-10% via-[#ffffffbf] via-45% to-[#ffffff00] to-90%"></div>
            <div className="flex flex-col justify-center items-center gap-12 z-50">
                <div className="flex flex-col justify-center items-start gap-4">
                    <p className={taglineFont.className + " max-w-md whitespace-normal text-4xl"}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit mauris in condimentum
                    </p>
                    <p className={miniTaglineFont + " text-lg italic max-w-md"}>Vestibulum consequat augue nec mi rhoncus iaculis</p>
                </div>
                <div className="flex justify-center items-center bg-ac-bleu p-5 max-w-[200px]">
                    <p className={buttonFont + " uppercase text-white text-xl font-bold "}>Nos Services</p>
                </div>
            </div>
        </div>
    )
}