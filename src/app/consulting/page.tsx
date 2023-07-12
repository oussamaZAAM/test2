"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getXfromY1, getXfromY2, getXfromY3 } from '@/utils/curveFunctions';
import { Lato, Montserrat, Poppins } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from "react";

const montserratFont = Montserrat({ subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })
const poppinsFont = Poppins({ weight: "600", subsets: ["latin"] })

type Props = {}

export default function Consulting({ }: Props) {
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(-18);

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.pageYOffset;
            if (yPos <= 1396 && yPos >= 0) {
                setYPosition(yPos - 18);
                if (yPos <= 470) {
                    setXPosition(getXfromY1(yPos));
                } else {
                    if (yPos <= 934) {
                        setXPosition(getXfromY2(yPos));
                    } else {
                        setXPosition(getXfromY3(yPos));
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col justify-start items-center bg-ac-gray w-full">
            <Navbar />

            {/* Consulting Page Hero */}
            <div className="flex justify-center sm:justify-end items-center w-full relative">
                {/* Parallax Background */}
                <div className="parallax-consulting absolute inset-0 bg-fixed bg-center"></div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>

                <a href='#formations' className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:mr-[10%] xm:mr-[15%] rounded-xl bg-ac-violet gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
                    <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-medium text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-xs"}>
                        Consultation
                    </h1>
                    <h3 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm"}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </h3>
                </a>
            </div>

            {/* Offres de Consultations */}
            <div className="w-full flex flex-col justify-start items-center gap-16 rounded-t-3xl -translate-y-5 z-30 bg-ac-gray pt-14 pb-36 px-10 md:px-20">
                <div className="flex justify-center items-center w-full relative">
                    <div className="flex justify-center items-center bg-ac-gray z-20 p-2 xm:p-4">
                        <h2 className={montserratFont.className + " text-ac-violet text-3xl xm:text-5xl font-semibold text-center"}>Nos offres de Consultation</h2>
                    </div>
                    <div className="absolute w-full h-px bg-ac-violet z-10"></div>
                </div>

                {/* Absolute Curvy Line */}
                <div className="hidden xm:flex flex-col justify-start items-center relative z-50">
                    <svg className='absolute top-0 -translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                        <path d="M80 0 C-20 150 -20 320 80 470" stroke="black" strokeWidth="6" />
                    </svg>
                    <svg className='absolute top-[464px] translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                        <path d="M0 470 C100 320 100 150 0 0" stroke="black" strokeWidth="6" />
                    </svg>
                    <svg className='absolute top-[928px] -translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                        <path d="M80 0 C-20 150 -20 320 80 470" stroke="black" strokeWidth="6" />
                    </svg>
                    <svg style={{ transform: `translate(${xPosition}px, ${yPosition}px)` }} className='absolute top-0 -translate-y-[18px]' width="40" height="40">
                        <circle cx="20" cy="20" r="20" fill="black" />
                    </svg>
                </div>

                {/* Liste des Offres */}
                <div className="w-full flex flex-col justify-start items-center gap-40">
                    {/* Offre 1 */}
                    <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
                        <img  loading='lazy' decoding='async' className='hidden sm:block max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/LzQ4Csy/cloud.png"} width={470} height={300} alt='consulting-1' />
                        <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                            <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Audit</h3>
                            <img  loading='lazy' decoding='async' className='sm:hidden max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/LzQ4Csy/cloud.png"} width={470} height={300} alt='consulting-1' />
                            <p className={montserratFont.className + " text-lg text-black text-center font-medium max-w-md"}>
                                Ut ornare iaculis leo, a pharetra turpis molestie dignissim. Ut at lobortis erat.
                                Mauris efficitur eleifend eros, in consectetur tortor ornare id.
                                Quisque sem elit, sagittis vel risus vitae, tempus porta orci.
                                Quisque laoreet rhoncus tincidunt.
                            </p>
                        </div>
                    </div>

                    {/* Offre 2 */}
                    <div className="flex flex-row-reverse justify-center sm:justify-between items-center sm:ml-4 md:ml-10 xm:ml-20 w-full gap-4">
                        <img  loading='lazy' decoding='async' className='hidden sm:block max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/JBzXT8Y/cyber-security.png"} width={470} height={300} alt='consulting-2' />
                        <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                            <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Prestation</h3>
                            <img  loading='lazy' decoding='async' className='sm:hidden max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/JBzXT8Y/cyber-security.png"} width={470} height={300} alt='consulting-2' />
                            <p className={montserratFont.className + " text-lg text-black text-center font-medium max-w-md"}>
                                Ut ornare iaculis leo, a pharetra turpis molestie dignissim. Ut at lobortis erat.
                                Mauris efficitur eleifend eros, in consectetur tortor ornare id.
                                Quisque sem elit, sagittis vel risus vitae, tempus porta orci.
                                Quisque laoreet rhoncus tincidunt.
                            </p>
                        </div>
                    </div>

                    {/* Offre 3 */}
                    <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
                        <img  loading='lazy' decoding='async' className='hidden sm:block max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/dDZFmNv/testing.png"} width={470} height={300} alt='consulting-3' />
                        <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                            <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Off-Shore</h3>
                            <img  loading='lazy' decoding='async' className='sm:hidden max-w-md max-h-72 object-contain object-center' src={"https://i.ibb.co/dDZFmNv/testing.png"} width={470} height={300} alt='consulting-3' />
                            <p className={montserratFont.className + " text-lg text-black text-center font-medium max-w-md"}>
                                Ut ornare iaculis leo, a pharetra turpis molestie dignissim. Ut at lobortis erat.
                                Mauris efficitur eleifend eros, in consectetur tortor ornare id.
                                Quisque sem elit, sagittis vel risus vitae, tempus porta orci.
                                Quisque laoreet rhoncus tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}